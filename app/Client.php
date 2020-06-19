<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    //
    protected $fillable = [
        'company_id', 'tipoDocumento', 'nombres', 'documento', 'direccion', 'puntos', 'celular', 'email', 'fechaNacimiento', 'genero', 
    ];

    //relacion entre modelos 
    public function headers(){

        return $this->hasMany('App\Header', 'idCliente');
    }
}
