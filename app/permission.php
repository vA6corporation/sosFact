<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class permission extends Model
{
    //
    protected $fillable = [
        'company_id', 'user_id', 'facturas', 'boletas', 'guiaDeRemision', 'notasDeCredito', 'usuarios', 'ajustes',
    ];
}
