<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVedmostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vedmosts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('justify')->nullable();
            $table->string('resource_name')->nullable();
            $table->string('unit')->nullable();
            $table->string('act_one')->nullable();
            $table->string('act_project')->nullable();
            $table->string('act_one_price')->nullable();
            $table->string('act_total')->nullable();
            $table->string('ins_one')->nullable();
            $table->string('amount')->nullable();
            $table->string('price')->nullable();
            $table->string('total')->nullable();
            $table->boolean('passed')->default(false);
            $table->integer('file_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vedmosts');
    }
}
