<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PreChoiceController;
use App\Http\Controllers\MainChoiceController;
use App\Http\Controllers\MainQuestionController;
use App\Http\Controllers\PreQuestionController;

Route::group(['middleware' => 'auth:sanctum', 'prefix' => '/assessment'], function () {
    Route::resource('/pre-questions', PreQuestionController::class);
    Route::resource('/pre-choices', PreChoiceController::class);

    Route::resource('/main-questions', MainQuestionController::class);
    Route::resource('/main-choices', MainChoiceController::class);
});
