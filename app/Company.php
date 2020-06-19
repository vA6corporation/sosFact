<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    //
    protected $fillable = [
        'ruc', 'razonSocial', 'nombreComercial', 'domicilioFiscal', 'email', 'codigoUbigeo', 'departamento', 'provincia', 'distrito', 'codigoPais',
    ];

    //relaciones entre modelos  
    public function clients(){

        return $this->hasMany('App\Client', 'company_id');
    }
    
    public function users(){

        return $this->hasMany('App\User', 'company_id');
    }

    public function headers(){

        return $this->hasMany('App\Header', 'numeroDocIdentidadReceptor', 'ruc');
    }

    public function permissions(){

        return $this->hasMany('App\Permission', 'company_id');
    }

    public function cdrs(){

        return $this->hasMany('App\Cdr', 'company_id');

    }

    public function tickets(){

        return $this->hasMany('App\Ticket', 'company_id');
    }
}

