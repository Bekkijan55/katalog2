<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VedmostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
       // return parent::toArray($request);
       return [
           'id' => $this->id,           
           'number' => $this->number,
           'good' => $this->good_name,
           'unit' => $this->unit,         
           'one_amount' => $this->one_amount, 
           'amount' => $this->amount,
           'price' => $this->price,
           'total' => $this->total,
           'passed' => $this->passed
       ];
    }
}
