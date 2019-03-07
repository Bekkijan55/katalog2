<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Client;
use App\Deliver;

class Requisite extends Model
{

    public function client() {

        return $this->belongsTo(Client::class);
    }

    public function deliver() {

        return $this->belongsTo(Deliver::class);
    }
    
}
