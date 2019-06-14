<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class FilesResource extends JsonResource
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
            'name' => $this->file_name,
            'created_at' => $this->created_at ? $this->created_at->toDateString() : null,
            'vedomosts' => VedmostResource::collection($this->vedomosts)
        ];
    }
}
