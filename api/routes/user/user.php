<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Email\VerificationController;
use App\Http\Controllers\Email\ForgotPasswordController;

Route::group(['prefix' => '/user'], function () {
});
