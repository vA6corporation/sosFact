<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    //
    protected $fillable = [
        'company_id', 
        'header_id', 
        'numero', 
        'motivo',
        'codigo',
        'status',
        'cod_sunat',
        'hash_cdr',
        'hash_cpe',
        'msj_sunat',
        'base64Xml',
        'base64Cdr',
    ];
}
