<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Vedmost;

class File extends Model
{
    public function vedomosts() {
        return $this->hasMany(Vedmost::class,'file_id','id');
    }
}
