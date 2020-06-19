<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cdr extends Model
{
    //
    protected $fillable = [
        'company_id', 
        'header_id', 
        'cod_sunat', 
        'hash_cpe',
        'hash_cdr',
        'msj_sunat',
        'respuesta',
        'base64Xml',
        'base64Cdr',
    ];
    
}
