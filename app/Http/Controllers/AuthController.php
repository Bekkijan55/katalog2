<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;



class AuthController extends Controller
{
  public $restful = true;


  /*  public function register(Request $request)
    {
        $v = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'password'  => 'required|min:3|confirmed',
        ]);
        if ($v->fails())
        {
            return response()->json([
                'status' => 'error',
                'errors' => $v->errors()
            ], 422);
        }
        $user = new User;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();
        return response()->json(['status' => 'success'], 200);
    }*/
  public function login(Request $request)
  {
    $credentials = $request->only(['email', 'password']);

    if (!$token = auth()->attempt($credentials)) {
      http_response_code(401);
      return response()->json(['error' => 'Unauthorized'], 401);
    }
    return $this->respondWithToken($token);
  }

  protected function respondWithToken($token)
  {
    return response()->json([
      'access_token' => $token,
      'token_type' => 'bearer',
      'expires_in' => auth()->factory()->getTTL() * 60
    ]);
  }

  public function logout()
  {
    $this->guard()->logout();
    return response()->json([
      'status' => 'success',
      'msg' => 'Logged out Successfully.'
    ], 200);
  }

  public function user(Request $request)
  {
    $user = User::find(Auth::user()->id);
    return response()->json([
      'status' => 'success',
      'data' => $user
    ]);
  }

  public function refresh()
  {
    if ($token = $this->guard()->refresh()) {
      return response()
        ->json(['status' => 'successs'], 200)
        ->header('Authorization', $token);
    }
    return response()->json(['error' => 'refresh_token_error'], 401);
  }

  private function guard()
  {
    return Auth::guard();
  }
}
