<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Deliver;
use App\Requisite;
use App\Client;

class DeliverController extends Controller
{
    
    public function delivers() {

        $delivers = Deliver::with('requisite')->get();
       
        return response()->json($delivers);

    }
    public function clients() {

         $clients = Client::with('requisite')->get();
         return response()->json($clients);

    }
    public function deliver_by_id($id) {
        $deliver = Deliver::with('requisite')->find($id);

        return response()->json($deliver);
    }
    public function client_by_id($id) {

        $client = Client::with($id)->find($id);
        return response()->json($client);
    }
  

}
