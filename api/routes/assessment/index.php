<?php

use App\Http\Controllers\MainChoiceController;
use App\Http\Controllers\MainQuestionController;
use App\Http\Controllers\PreChoiceController;
use App\Http\Controllers\PreQuestionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '/assessment'], function () {
    Route::resource('/pre-questions', PreQuestionController::class);
    Route::resource('/pre-choices', PreChoiceController::class);

    Route::resource('/main-questions', MainQuestionController::class);
    Route::resource('/main-choices', MainChoiceController::class);
});
