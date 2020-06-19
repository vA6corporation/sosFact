<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('ruc', 100)->unique();
            $table->string('razonSocial', 240)->default('Razon social');
            $table->string('nombreComercial', 240)->default('Nombre comercial');
            $table->string('domicilioFiscal', 450)->default('Domicilio fiscal');
            //$table->string('email', 120)->nullable();
            $table->string('codigoUbigeo', 6)->default('150101');
            $table->string('departamento', 50)->default('lima');
            $table->string('provincia', 50)->default('lima');
            $table->string('distrito', 50)->default('lima');
            $table->string('codigoPais', 2)->default('PE');
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
        Schema::dropIfExists('companies');
    }
}
