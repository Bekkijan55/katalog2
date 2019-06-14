<?php

use App\Deliver;
use App\Client;
use App\Requisite;
use Faker\Generator as Faker;

$factory->define(Deliver::class, function (Faker $faker) {
    return [
        'comp_name' => $faker->name
    ];
});

$factory->define(Client::class, function (Faker $faker) {
    return [
        'comp_name' => $faker->name
    ];
});

$factory->define(Requisite::class, function (Faker $faker) {
    return [
        'client_id' => ($n=$faker.random.number({'min':3,'max':25}) %2 ) ? $n : null,
        'deliver_id' => ($m=$faker.random.number({'min':3,'max':25}) %2 ) ? null : $n,
        'address' => $faker->address,
        'r_account' => (string) $faker.random.number({'min':10000000000000000000,'max' : 99999999999999999999}),
        'bank_name' => $faker->name,
        'inn' => $faker.random.number({'min':111111111,'max':999999999}),
        'mfo' => $faker.random.number({'min':11111,'max':99999}),
        'oked' => $faker.random.number({'min':11111,'max':99999})
    ];
});