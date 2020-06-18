<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    //
    protected $fillable = [
        'ruc', 'razonSocial', 'nombreComercial', 'domicilioFiscal', 'email', 'codigoUbigeo', 'departamento', 'provincia', 'distrito', 'codigoPais',
    ];
}
