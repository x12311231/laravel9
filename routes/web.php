<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

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

Route::prefix('test')->group(function() {
    Route::get('/ts',[TestController::class, 'testSleep']);
    Route::get('/t',[TestController::class, 'test']);
    Route::get('/tqi',[TestController::class, 'testQueryInsert']);
    Route::get('/tmi',[TestController::class, 'testModelInsert']);
    Route::get('/tmi1',[TestController::class, 'testModelInsert1']);
});
