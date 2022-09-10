<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// =====================================
use validator;
use App\Models\User;
use Auth;
// ======================================
class AuthController extends Controller
{
    public function signup(Request $request){
        
        // $validated = $request->validate([
        //     'name'=>'required',
        //     'email'=>'required|email|unique:users',
        //     'password'=>'required',
        //     'pasword_confirmation'=>'required|same:password'
        // ]);
        
        $userData = User::create($request->except('pasword_confirmation'));
        return response()->json(['message'=>"User Added", 'userData'=>$userData,"statusCode"=>200]);
    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Failed Email or Password not matches!!'], 401);
        }

        return $this->respondWithToken($token);
    }
    // public function refresh()
    // {
    //     return $this->respondWithToken(auth()->refresh());
    // }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
