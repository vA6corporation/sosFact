<template>
<nav class="navbar navbar-expand-md navbar-dark bg-primary">
  <div class="container-fluid">
    <div class="row">
      <div class="col-3"></div>
    </div>
    <a class="navbar-brand" href="/">
    <h2 class="mb-0 font-weight-bold">
      SosFact
    </h2>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left Side Of Navbar -->
      <ul class="navbar-nav mr-auto">

      </ul>

      <!-- Right Side Of Navbar -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
            <a id="navbarDropdown" class="nav-link lead" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              vampiroDx
              <feather type="chevron-down"></feather>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" @click.prevent="logout">
                Salir
              </a>
            </div>
          </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$http.post('/logout');
      location.replace('/login');
    }
  }
}
</script>

<style>

</style>