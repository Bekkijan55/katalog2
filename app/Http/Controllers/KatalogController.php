<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vedmost;
use App\Katalog;
use App\File;
use App\VedFile;
use App\Http\Resources\VedmostResource;
use App\Http\Resources\KatalogResource;
use App\Http\Resources\FilesResource;
use App\Http\Resources\VedFileResource;
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
        $katmatch = Katalog::where('good_name','LIKE',"%".$request->query('good')."%")->orderBy('price4','asc')->get();

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

    public function getFiles($id) {
        
        $files = File::orderBy('id','desc')->where('ved_file_id',$id)->get();

        return FilesResource::collection($files);
    }

    public function getExcel(Request $request) {    
       
        $allrows = $request->input('allrow'); 
        $filename = $request->input('ved_name');
        // return $allrows[1];
        $file = new File;
        $file->file_name = $filename;
        $file->ved_file_id = $request->input('id');
        $file->created_at = Carbon::now();
        $file->save();
        // $ved = Vedmost::orderBy('id','desc')->first();
        // $fileid = (int)($ved->file_id + 1);
        
        for($i=2;$i<count($allrows);$i++) {
            $newveds = new Vedmost;
            $row = $allrows[$i];
            if($row[0] != null && $row[1] != null) {
             $newveds->number = $row[0];
             $newveds->good_name = $row[1];
             $newveds->unit = $row[2];
             $newveds->one_amount = $row[3];
             $newveds->amount = $row[4];
             $newveds->price = $row[5];
             $newveds->total = $row[6];
             $newveds->file_id = $file->id;
             $newveds->save();
            }

        }   
        return ['message' => 'Successfull'];
    }

    public function addVedFile(Request $request) {
        $ved = new VedFile;
        $ved->filename = $request->input('file');
        $ved->save();

        return new VedFileResource($ved);
    }

    public function getVedFiles() {
        $veds = VedFile::orderBy('id','desc')->get();

        return VedFileResource::collection($veds);
    }
}
