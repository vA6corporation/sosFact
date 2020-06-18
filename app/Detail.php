<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    //
    protected $table = "SF_DOC_ELECTRONICO_DET";

    protected $fillable = [
        'id_doc_electronico', 
        'ordenItem',
        'codigoProductoItem',
        'descripcionItem',
        'unidadMedidaItem',
        'cantidadItem',
        'valorUnitarioSinIgv',
        'precioUnitarioConIgv',
        'codTipoPrecioVtaUnitarioItem',
        'importeIGVItem',
        'codigoAfectacionIGVItem',
        'descuentoItem',
        'valorVentaItem',
        '_descuentoItem',
        '_valorVentaSinIGV',
        'montoReferenciaItem',
        'montoReferencialUnitarioItem', 
        'clasificacionProductoItem',
        'montoTotalItem',
        'cantidadBolsasItem', 
        'montoUnitarioBolsasItem',
        'importeBolsasItem',
        'iddetpedido',
    ];
}
