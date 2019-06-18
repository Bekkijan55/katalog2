<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Vedmost;
use App\VedFile;

class File extends Model
{
    public function vedomosts() {
        return $this->hasMany(Vedmost::class,'file_id','id');
    }

    public function vedfiles() {
        return $this->belongsTo(VedFile::class,'id','ved_file_id');
    }
}
