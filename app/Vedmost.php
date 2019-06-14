<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\File;

class Vedmost extends Model
{
    public $timestamps = false;
   

    public function files() {
        return $this->belongsTo(File::class,'id','file_id');
    }


}
