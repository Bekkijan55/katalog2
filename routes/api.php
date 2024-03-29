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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::post('login', 'AuthController@login');

/*Route::prefix('auth')->group(function () {
//    Route::post('/register', 'AuthController@register');
    Route::get('refresh', 'AuthContr  oller@refresh');

});*/

Route::group(['middleware' => 'auth:api'], function(){
  
  Route::get('user', 'AuthController@user');  
  Route::resource('users', 'API\UsersController');
  Route::get('roles', 'API\UsersController@getRoles');
  Route::post('logout', 'AuthController@logout');
  Route::get('get-vedmost/{id}','KatalogController@getVedmost');
  Route::get('find-katalog','KatalogController@matchFromKatalog');
  Route::post('click-passed','KatalogController@clickPassed');
  Route::get('get-all-passed','KatalogController@getAllPassed');
  Route::get('get-files/{id}','KatalogController@getFiles');
  Route::post('get-excel','KatalogController@getExcel');
  Route::post('add-ved-fie','KatalogController@addVedFile');
  Route::get('get-ved-files','KatalogController@getVedFiles');

});