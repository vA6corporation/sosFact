<?php

namespace App\Http\Controllers;

use App\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        //
    }

    //metodos personalidos byRuc and byDni
    public function byRuc(Request $request){

        $ruc = $request->ruc;
        $client = Client::where([
            'tipoDocumento' => 'RUC',
            'documento' => $ruc
        ])->first();
        if ($client) {
            return ['client' => $client];
        } else {
            $user = Auth::user();
            $response = Http::post("https://80002.sos-delivery.com/web_service/api/v1/get_ruc?token=app963&ruc_consultar={$ruc}");
            $data = json_decode($response);
            if (isset($data->error)) {
                return response(['err' => $data->error], 400);
            }else{
                $entity = $data->entity;
                $client = new Client([
                    "company_id" => $user->company_id,
                    "tipoDocumento" => "RUC",
                    "documento" => $entity->ruc,
                    "nombres" => $entity->nombre_o_razon_social 
                ]);
            
                $client->save();
                return ['client' => $client];
            }
        }
    }

    //byDni
    public function byDni(Request $request){

        $dni = $request->dni;
        $client = Client::where([
            'tipoDocumento' => 'DNI',
            'documento' => $dni
        ])->first();
        if ($client) {
            return ['client' => $client];
        } else {
            $user = Auth::user();
            $response = Http::post("https://80002.sos-delivery.com/web_service/api/v1/get_dni?token=app963&dni={$dni}");
            $data = json_decode($response);
            if (isset($data->error)) {
                return response(['err' => $data->error], 400);
            }else{
                $entity = $data->entity;
                $client = new Client([
                    "company_id" => $user->company_id,
                    "tipoDocumento" => "DNI",
                    "documento" => $entity->dni,
                    "nombres" => $entity->nombre_o_razon_social 
                ]);
            
                $client->save();
                return ['client' => $client];
            }
        }
    }
}
