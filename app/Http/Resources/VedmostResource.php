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
           'justify' => $this->justify,
           'good' => $this->resource_name,
           'unit' => $this->unit,
           'act_one' => $this->act_one,
           'act_project' => $this->act_project,
           'act_one_price' => $this->act_one_price,
           'act_total' => $this->act_total,
           'ins_one' => $this->ins_one,
           'amount' => $this->amount,
           'price' => $this->price,
           'total' => $this->total,
           'passed' => $this->passed
       ];
    }
}
