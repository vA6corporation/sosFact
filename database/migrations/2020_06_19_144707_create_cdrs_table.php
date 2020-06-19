<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCdrsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cdrs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id'); //foreign key with companies tables
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('header_id'); //foreign key with table headers
            $table->foreign('header_id')->references('id')->on('SF_DOC_ELECTRONICO')->onDelete('cascade')->onUpdate('cascade');
            $table->string('cod_sunat', 250);
            $table->string('hash_cpe', 250);
            $table->string('hash_cdr', 250);
            $table->string('msj_sunat', 250);
            $table->string('respuesta', 250);
            $table->longText('base64Xml')->nullable();
            $table->longText('base64Cdr')->nullable();
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
        Schema::dropIfExists('cdrs');
    }
}
