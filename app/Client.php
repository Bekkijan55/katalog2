<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Requisite;

class Client extends Model
{
 
    public function requisite() {
        
        return $this->hasOne(Requisite::class);
    }

}
