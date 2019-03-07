<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Requisite;

class Deliver extends Model
{

    public function requisite() {

        return $this->hasOne(Requisite::class);
    }
 
}
