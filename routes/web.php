<?php

use Illuminate\Support\Facades\Route;
// use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('clients/{ruc}/byRuc', 'ClientController@byRuc');
Route::get('clients/{dni}/byDni', 'ClientController@byDni');

Route::get('{any}', function () {
    error_log(Auth::check());
    if (Auth::check()) {
        return view('app');
    } else {
        return view('auth.login');
    }
})->where('any','.*');
