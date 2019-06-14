<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class KatalogResource extends JsonResource
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
            'comp' => $this->comp_name,
            'good' => $this->good_name,
            'city' => $this->city,
            'address' => $this->address,
            'bezndc' => $this->bezndc,
            'ndc' => $this->ndc,
            'currency' => $this->currency,
            'summa' => $this->summa,
            'unit' => $this->unit,
            'created_at' => $this->created_at
        ];
    }
}
