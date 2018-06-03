<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    // User
    Route::patch('settings/profile', 'Settings\ProfileController@update');
    Route::patch('settings/password', 'Settings\PasswordController@update');
    Route::post('files/upload', 'Auth\StoreAvatar@store');
    // Threads
    Route::get('threads', 'ThreadController@index');
    Route::get('threads/{id}', 'ThreadController@single');
    Route::get('threads/create', 'ThreadController@create');
    Route::get('threads/{channel}', 'ThreadController@index');
    Route::get('threads/{channel}/{thread}', 'ThreadController@show');
    Route::get('threads/{thread}', 'ThreadController@show');
    Route::delete('threads/{channel}/{thread}', 'ThreadController@destroy');
    Route::post('threads', 'ThreadController@store');
    Route::post('threads/{channel}/{thread}/replies', 'RepliesController@store');
    Route::get('threads/{channel}/{thread}/replies', 'RepliesController@index');

    // subscribe and unsubscribe
    Route::post('/threads/{channel}/{thread}/subscriptions', 'ThreadSubscriptionsController@store')->middleware('auth');
    Route::delete('/threads/{channel}/{thread}/subscriptions', 'ThreadSubscriptionsController@destroy')->middleware('auth');

    // Replies
    Route::delete('/replies/{reply}', 'RepliesController@destroy');
    Route::post('/replies/{reply}/favorites', 'FavoritesController@store');
    Route::delete('/replies/{reply}/favorites', 'FavoritesController@destroy');
    Route::patch('/replies/{reply}', 'RepliesController@update');
    });

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
});
