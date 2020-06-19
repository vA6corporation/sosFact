<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Header extends Model
{
    //
    protected $table =   "SF_DOC_ELECTRONICO";
    
    protected $fillable = [
        'id_doc_electronico', 
        'serieNumero', 
        'tipoDocumento',
        'fechaEmision',
        'numeroDocIdentidadEmisor',
        'tipoDocIdentidadEmisor',
        'numeroDocIdentidadReceptor',
        'razonSocialReceptor',
        'direccionReceptor',
        'correoReceptor',
        'tipoDocIdentidadReceptor',
        'telefono',
        'idCliente',
        'totalOPGravadas',
        'totalOPExoneradas',
        'totalOPNoGravadas',
        'totalOPGratuitas',
        'sumatoriaIGV',
        'sumatoriaISC',
        'importeTotal',
        'importeTotalVenta',
        'totalDescuentos',
        'descuentosGlobales',
        'sumatoriaOtrosCargos',
        'porcentajeOtrosCargos',
        'sumatoriaImpuestoBolsas', 
        'tipoMoneda',
        'codigoPaisReceptor',
        'codigoTipoOperacion',
        'montoEnLetras',
        'idPedido',
        'Doc_Estado',
        'Doc_id_cierre',
    ];

    //relacion entre modelos 
    public function details(){

        return $this->hasMany('App\Detail', 'id_doc_electronico');
    }
    
}
