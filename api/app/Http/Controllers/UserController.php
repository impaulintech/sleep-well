<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Routing\Controller;
use App\Http\Resources\UserResource;


class UserController extends Controller
{
    public function index()
    {
        return UserResource::collection(User::get());
    }

    public function show($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found.']);
        }

        return new UserResource($user);
    }

    public function update(UpdateUserRequest $request)
    {
        $userId = auth()->id();
        $user = User::findOrFail($userId);

        $user->update([
            'full_name' => $request->full_name ?: $user->full_name,
            'email' => $request->email ?: $user->email,
            'age' => $request->age ?: $user->age,
            'gender' => $request->gender ?: $user->gender,
            'avatar' => $request->avatar ? $user->generateAvatar($user->replaceAndLower($user->full_name), $userId) : $user->avatar,
            'password' => $request->password ?: $user->password,
        ]);

        return response()->json([
            'message' => 'User updated successfully',
            'data' => new UserResource($user)
        ]);
    }
}
