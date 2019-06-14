<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKatalogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('katalogs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('city');
            $table->string('comp_name');
            $table->string('good_name');
            $table->string('unit')->nullable();
            $table->string('currency')->nullable();
            $table->double('ndc')->nullable();
            $table->double('bezndc')->nullable();
            $table->double('summa')->nullable();
            $table->string('address');
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
        Schema::dropIfExists('katalogs');
    }
}
