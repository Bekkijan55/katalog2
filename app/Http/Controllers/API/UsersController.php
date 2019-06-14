<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\UsersResource;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Profile;
use Carbon\Carbon;

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

    return UsersResource::collection($users);
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
    return new UsersResource($user);
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

  public function allUsers() {
    $users = User::orderBy('id','asc')->get();

    return UsersResource::collection($users);
  }

  public function updateProfile(Request $request) {
    // return $request->all();
    $user = User::findOrFail($request->input('user_id'));
    $user->firstname = $request->input('firstname');
    $user->email = $request->input('email');
    $user->updated_at = Carbon::now();
    $user->save();

    if($request->input('profile_id')) {
      $profile = Profile::findOrFail($request->input('profile_id'));
    }
    else{
      $profile = new Profile;
      $profile->user_id = $user->id;
    }

    $profile->lastname = $request->input('lastname');

    if($request->input('selectedImage')) {
    $explode = explode(',',$request->input('selectedImage'));

    $decoded = base64_decode($explode[1]);
    if(str_contains($explode[0], 'jpeg'))
        $extension = 'jpeg';

    if(str_contains($explode[0] , 'jpg'))
        $extension = 'jpg';
        
    if(str_contains($explode[0], 'png'))
        $extension = 'png';
        
    $filename = str_random() . '.' . $extension;

    $img = Image::make($request->selectedImage);

    $img->fit(400,400);

    $path = 'uploads/'. $request->input('firstname').$request->input('lastname');

    if(!file_exists(public_path().'/'. $path)) {
        File::makeDirectory($path,0755,true);
    }

    $img->save(public_path('uploads/'. $request->input('firstname').$request->input('lastname').'/'.$filename));

    $file_path = '/uploads/'. $request->input('firstname').$request->input('lastname').'/'.$filename;

    $profile->photo = $file_path;

  }
  
  $profile->updated_at = Carbon::now();

  
  $profile->save();

  return new UsersResource($user);


  }
}
