<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Email\VerificationController;
use App\Http\Controllers\Email\ForgotPasswordController;
use App\Http\Controllers\PreQuestionController;
use App\Http\Controllers\UserController;

Route::group(['middleware' => 'auth:sanctum', 'prefix' => '/user'], function () {
    Route::put('/update', [UserController::class, 'update']);

    Route::get('/pre-questions', [PreQuestionController::class, 'assessment']);
});
