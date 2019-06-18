<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VedFileResource extends JsonResource
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
            'name' => $this->filename,
            'created_at' => $this->created_at
        ];
    }
}
