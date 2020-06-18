<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    //
    protected $fillable = [
        'company_id', 'tipoDocumento', 'nombres', 'documento', 'direccion', 'puntos', 'celular', 'email', 'fechaNacimiento', 'genero', 
    ];
}
