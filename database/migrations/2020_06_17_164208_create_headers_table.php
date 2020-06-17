<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHeadersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('headers', function (Blueprint $table) {
            $table->id(); //primary key 
            $table->integer('user_id');
            $table->integer('id_doc_electronico'); 
            $table->string('serieNumero', 13);
            $table->integer('tipoDocumento');
            $table->date('fechaEmision');
            $table->string('numeroDocIdentidadEmisor', 100);
            $table->integer('tipoDocIdentidadEmisor');
            $table->string('numeroDocIdentidadReceptor', 100);
            $table->string('razonSocialReceptor', 450);
            $table->string('direccionReceptor', 450);
            $table->string('correoReceptor', 450);
            $table->integer('tipoDocIdentidadReceptor');
            $table->string('telefono', 11);
            $table->integer('idCliente'); //id
            $table->double('totalOPGravadas', 26, 2);
            $table->double('totalOPExoneradas', 26, 2);
            $table->double('totalOPNoGravadas', 26, 2);
            $table->double('totalOPGratuitas', 26, 2);
            $table->double('sumatoriaIGV', 26, 2);
            $table->double('sumatoriaISC', 26, 2);
            $table->double('importeTotal', 26, 2);
            $table->double('importeTotalVenta', 26, 2);
            $table->double('totalDescuentos', 26, 2);
            $table->double('descuentosGlobales', 26, 2);
            $table->double('sumatoriaOtrosCargos', 26, 2);
            $table->double('porcentajeOtrosCargos', 26, 2);
            $table->double('sumatoriaImpuestoBolsas', 26, 2);
            $table->string('tipoMoneda', 100);
            $table->string('codigoPaisReceptor', 100);
            $table->integer('codigoTipoOperacion');
            $table->string('montoEnLetras', 150);
            $table->integer('idPedido');
            $table->integer('Doc_Estado');
            $table->integer('Doc_id_cierre');
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
        Schema::dropIfExists('headers');
    }
}
