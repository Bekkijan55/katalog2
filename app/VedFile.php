<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\File;

class VedFile extends Model
{
    public function files() {
        return $this->hasMany(File::class,'ved_file_id','id');
    }
}
