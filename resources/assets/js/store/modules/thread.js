import axios from 'axios'
// import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  threads: [],
  currentThread: null
}

// getters
export const getters = {
  threads: state => state.threads,
  currentThread: state => state.currentThread
}

// mutations
export const mutations = {
  [types.SAVE_THREADS] (state, { threads, remember = 1 }) {
    state.threads = threads
  },
  [types.ADD_THREAD] (state, thread) {
    state.threads.push(thread)
  },
  [types.FETCH_THREADS_FAILURE] (state, payload) {
    state.errors = payload
  },
  [types.STORE_CURRENT_THREAD] (state, payload) {
    state.currentThread = payload
  }
}

// actions
export const actions = {

  async fetchThreads ({ commit }) {
    try {
      const { data } = await axios.get('/api/threads')
      commit(types.SAVE_THREADS, { threads: data })
    } catch (e) {
      commit(types.FETCH_THREADS_FAILURE)
    }
  },

  async saveThread ({ commit }, payload) {
    try {
      const { thread } = await axios.post('api/new/thread')
      commit(types.ADD_THREAD, thread)
    } catch (e) {
      commit(types.SAVE_THREAD_FAILURE, e)
    }
  },

  addThread ({ commit, dispatch }, payload) {
    dispatch('saveThread', payload)
    commit(types.ADD_THREAD, payload)
  },

  async findThread ({ commit }, id) {
    try {
      const thread = await axios.get('/api/threads/' + id)
      console.log(JSON.stringify(thread.data))
      commit(types.STORE_CURRENT_THREAD, thread.data)
    } catch (e) {
      commit(types.SAVE_THREAD_FAILURE, e)
    }
  }
}
