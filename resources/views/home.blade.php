@extends('layouts.app')

@section('content')
<div class="card shadow-sm">
    <div class="card-header">Dashboard</div>

    <div class="card-body">
        @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
        @endif
        <div class="form-group">
            Bienvenido {{ Auth::user()->name }}!
        </div>
        <div class="row">
            <div class="col">
                <div class="card text-white bg-primary mb-3 text-center" style="max-width: 18rem;">
                    <div class="card-header lead">Equipos Registrados</div>
                    <div class="card-body">
                        <h1 class="card-title font-weight-bold">10</h1>
                        <i data-feather="monitor" class="feather-lg"></i>
                      {{-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> --}}
                    </div>
                  </div>
            </div>
            <div class="col">
                <div class="card text-white bg-dark mb-3 text-center" style="max-width: 18rem;">
                    <div class="card-header lead">Usuarios</div>
                    <div class="card-body">
                        <h1 class="card-title font-weight-bold">8</h1>
                        <i data-feather="users" class="feather-lg"></i>
                      {{-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> --}}
                    </div>
                  </div>
            </div>
            <div class="col">
                <div class="card text-white bg-danger mb-3 text-center" style="max-width: 18rem;">
                    <div class="card-header lead">Maquinas Asignadas</div>
                    <div class="card-body">
                        <h1 class="card-title font-weight-bold">15</h1>
                        <i data-feather="box" class="feather-lg"></i>
                      {{-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> --}}
                    </div>
                  </div>
            </div>
            <div class="col">
                <div class="card text-white bg-success mb-3 text-center" style="max-width: 18rem;">
                    <div class="card-header lead">Custodios</div>
                    <div class="card-body">
                        <h1 class="card-title font-weight-bold">3</h1>
                        <i data-feather="user-plus" class="feather-lg"></i>
                      {{-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> --}}
                    </div>
                  </div>
            </div>
        </div>
    </div>
</div>
{{-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
        </div>
    </div>
</div> --}}
@endsection
