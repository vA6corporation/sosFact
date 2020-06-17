<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('details', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('id_doc_electronico');  //foreign  key 
            $table->integer('ordenItem');
            $table->integer('codigoProductoItem');
            $table->string('descripcionItem', 150);
            $table->string('unidadMedidaItem', 10);
            $table->double('cantidadItem', 26, 2);
            $table->double('valorUnitarioSinIgv', 26,2);
            $table->double('precioUnitarioConIgv', 26, 2);
            $table->integer('codTipoPrecioVtaUnitarioItem');
            $table->double('importeIGVItem', 26,2);
            $table->integer('codigoAfectacionIGVItem');
            $table->double('descuentoItem', 26,2);
            $table->double('valorVentaItem', 26,2);
            $table->double('_descuentoItem', 26, 2);
            $table->double('_valorVentaSinIGV', 26,2);
            $table->double('montoReferenciaItem', 26, 2);
            $table->double('montoReferencialUnitarioItem', 26, 2);
            $table->integer('clasificacionProductoItem');
            $table->double('montoTotalItem', 26, 2);
            $table->integer('cantidadBolsasItem');
            $table->double('montoUnitarioBolsasItem', 26, 2);
            $table->double('importeBolsasItem', 26, 2);
            $table->integer('iddetpedido');
           // $table->foreign('id_doc_electronico')->references('id')->on('headers')->onDelete('cascade');
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
        Schema::dropIfExists('details');
    }
}
