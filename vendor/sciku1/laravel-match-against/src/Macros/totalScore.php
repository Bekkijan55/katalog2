<?php
use Illuminate\Database\Query\Builder;

Builder::macro("totalScore", function ($order = "DESC") {
    $query = "(";
    $count = count($this->matches);
    $i = 0;
    $search = [];
    foreach ($this->matches as $match) {
        $query .= "MATCH ({$match}) AGAINST (?)";
        $search[] = $this->search;
        if(++$i !== $count) {
            $query .= " + ";
        }
    }
    $query .= ")";
    $this->selectRaw($query . " as total_score", $search);
    $this->orderByRaw($query . " " . $order, $search);
    return $this;
});