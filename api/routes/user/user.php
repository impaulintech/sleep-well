<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PreQuestionController;
use App\Http\Controllers\MainQuestionController;
use App\Http\Controllers\GivenRecommendationController;

Route::group(['middleware' => 'auth:sanctum', 'prefix' => '/user'], function () {
    Route::put('/update', [UserController::class, 'update']);

    Route::get('/pre-questions', [PreQuestionController::class, 'assessment']);
    Route::post('/main-questions', [MainQuestionController::class, 'assessment']);
    Route::resource('/given-recommendations', GivenRecommendationController::class);
});
