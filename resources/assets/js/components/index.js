import Vue from 'vue'
import Card from './Card'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import BaseActions from './BaseActions'
import ThreadCard from './ThreadCard.vue'
import Threads from './Threads.vue'
import ThreadTemplate from './ThreadTemplate.vue'
import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globaly.
[
  Card,
  Child,
  Button,
  Checkbox,
  HasError,
  AlertError,
  AlertSuccess,
  BaseActions,
  ThreadCard,
  Threads,
  ThreadTemplate
].forEach(Component => {
  Vue.component(Component.name, Component)
})
