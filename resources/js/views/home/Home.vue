<template>
<div>
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h1 class="h2">Dashboard</h1>
  <div class="btn-toolbar mb-2 mb-md-0">
    <!-- <div class="btn-group mr-2">
      <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
      <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
    </div> -->
    <button type="button" class="btn btn-outline-primary dropdown-toggle">
      <feather type="calendar"></feather>
      Esta semana
    </button>
  </div>
</div>
<div class="card shadow-sm">
  <div class="card-body">
    <div class="row">
      <div class="col">
        <div class="card text-white bg-primary mb-3 text-center" style="max-width: 18rem;">
          <div class="card-header lead">Equipos Registrados</div>
          <div class="card-body">
            <h1 class="card-title font-weight-bold">10</h1>
            <i data-feather="monitor" class="feather-lg"></i>
          </div>
          </div>
      </div>
      <div class="col">
        <div class="card text-white bg-dark mb-3 text-center" style="max-width: 18rem;">
          <div class="card-header lead">Usuarios</div>
          <div class="card-body">
            <h1 class="card-title font-weight-bold">8</h1>
            <i data-feather="users" class="feather-lg"></i>
          </div>
          </div>
      </div>
      <div class="col">
        <div class="card text-white bg-danger mb-3 text-center" style="max-width: 18rem;">
          <div class="card-header lead">Maquinas Asignadas</div>
          <div class="card-body">
            <h1 class="card-title font-weight-bold">15</h1>
            <i data-feather="box" class="feather-lg"></i>
          </div>
          </div>
      </div>
      <div class="col">
        <div class="card text-white bg-success mb-3 text-center" style="max-width: 18rem;">
          <div class="card-header lead">Custodios</div>
          <div class="card-body">
            <h1 class="card-title font-weight-bold">3</h1>
            <i data-feather="user-plus" class="feather-lg"></i>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {

}
</script>