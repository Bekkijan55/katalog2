<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vedmost;
use App\Katalog;
use App\File;
use App\Http\Resources\VedmostResource;
use App\Http\Resources\KatalogResource;
use App\Http\Resources\FilesResource;
use DB;
use Maatwebsite\Excel\Facades\Excel;
use Mtownsend\XmlToArray\XmlToArray;
use Carbon\Carbon;

class KatalogController extends Controller
{
    public function getVedmost($id) {
        $ved = File::where('id',$id)->get();

        return FilesResource::collection($ved);

    }

    public function matchFromKatalog(Request $request) {
        
        // $katmatch = Katalog::match('good_name')->against($request->query('good'))->get();
        $katmatch = Katalog::where('good_name','LIKE',"%".$request->query('good')."%")->get();

        return KatalogResource::collection($katmatch);
    }

    public function clickPassed(Request $request) {
        
        $all =  $request->all();
        if(count($all) == 0) {
            $getall = Vedmost::where('passed',true)->get();
            foreach($getall as $geta) {
                $get = Vedmost::findOrFail($geta->id);
                $get->passed = false;
                $get->save();
            }
        }
        else{
        foreach($all as $a) {
            $allarr[] = $a['id'];
        }        
       
        $allpassed = Vedmost::select('id')->whereNotIn('id',$allarr)->where('passed',true)->get();
       
        foreach($allpassed as $pa) {
            $getap = Vedmost::findOrFail($pa->id);
            $getap->passed = false;
            $getap->save();
        }        
        foreach($all as $a) {           
            
            $ved = Vedmost::findOrFail($a['id']);
            if($ved) {
                $ved->passed = true;
                $ved->save();
            }         
    }    
} 
        return VedmostResource::collection(Vedmost::all());
    }

    public function getAllPassed() {
        $getAll = Vedmost::where('passed',true)->get();

        return VedmostResource::collection($getAll);
        
    }

    public function getFiles() {
        $files = File::orderBy('id','desc')->get();

        return FilesResource::collection($files);
    }

    public function getExcel(Request $request) {    
        
        $allrows = $request->input('allrow'); 
        $filename = $request->input('ved_name');
        // return $allrows[1];
        $file = new File;
        $file->file_name = $filename;
        $file->created_at = Carbon::now();
        $file->save();
        // $ved = Vedmost::orderBy('id','desc')->first();
        // $fileid = (int)($ved->file_id + 1);
        
        for($i=2;$i<count($allrows);$i++) {
            $newveds = new Vedmost;
            $row = $allrows[$i];
            if($row[0] != null) {
             $newveds->justify = $row[1];
            $newveds->resource_name = $row[2];
             $newveds->unit = $row[3];
            $newveds->act_one = $row[4];
             $newveds->act_project = $row[5];
            $newveds->act_one_price = $row[6];
             $newveds->act_total = $row[7];
            $newveds->ins_one = $row[8];
             $newveds->amount = $row[9];
            $newveds->price = $row[10];
             $newveds->total = $row[11];
            $newveds->file_id = $file->id;
             $newveds->save();
            }

        }   
        return ['message' => 'Successfull'];
    }
}
