<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\UserResource;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
  /**
   * @var User
   */
  protected $user;

  /**
   * UsersController constructor.
   *
   * @param User $user
   */
  public function __construct(User $user)
  {
    $this->user = $user;
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $users = $this->user->all();

    return UserResource::collection($users);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  int $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    $user = $this->user->findOrFail($id);

//    dd($user);
    return new UserResource($user);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  int $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    $data = $request->only(['firstname', 'password', 'lastname', 'status', 'email', 'image']);

    if (isset($data['password'])) {
      $data['password'] = bcrypt($data['password']);
    }

    $user = User::findOrFail($id);

    $user->update($data);

    $user->roles()->sync(array_values($data['roles']));

    return response()->json(['id'=> $id, 'data'=>$data, 'user'=>$user]);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }

  // Roles
  public function getRoles() {
    $role = Role::all();

    return response()->json($role);
  }
}
