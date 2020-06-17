<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->enum('tipoDocumento', ['RUC', 'DNI', 'PASAPORTE', 'CARNETEXT', 'OTROS'])->default('DNI');
            $table->string('nombres', 240);
            $table->string('documento', 11);
            $table->string('direccion', 240)->nullable();
            $table->integer('puntos');
            $table->string('celular', 12)->nullable();
            $table->string('email', 120)->nullable();
            $table->date('fechaNacimiento')->nullable();
            $table->enum('genero', ['HOMBRE', 'MUJER', NULL])->nullable();



        
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
        Schema::dropIfExists('clients');
    }
}
