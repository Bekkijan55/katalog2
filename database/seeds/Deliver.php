<?php

use Illuminate\Database\Seeder;

class Deliver extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('delivers') -> insert([
            'comp_name' => 'test1comp1name',
        ]);
        DB::table('clients') -> insert([
            'comp_name' => 'testclient_comp'
        ]);
    }
}
