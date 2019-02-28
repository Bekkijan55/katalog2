<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MeasureMaster extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('measures_master', function(Blueprint $table)
        {
            $table->increments('measure_id');
            $table->string('name', 16)->nullable();
        });


        Schema::create('unit_of_measures_master', function(Blueprint $table)
        {
            $table->increments('uom_id');
            $table->string('name', 16)->nullable();
            $table->string('symbol', 8)->nullable();
            $table->integer('measure_id')->nullable()->unsigned()->index();
            $table->timestamps();
            $table->boolean('status')->nullable()->default(1);

            $table->foreign('measure_id')->references('measure_id')->on('measures_master')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('measures_master');
        Schema::drop('unit_of_measures_master');
    }
}
