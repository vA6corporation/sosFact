<template>
<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="sidebar-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="(item, index) in modules" :key="index">
          <router-link class="nav-link" :to="item.path" :class="{ active: $route.name == item.name }">
            <feather :type="item.icon" class="feather-md"></feather>
            {{ item.label }}
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/invoices">
            <feather type="file" class="feather-md"></feather>
            Facturas
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <feather type="file" class="feather-md"></feather>
            Boletas
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <feather type="file" class="feather-md"></feather>
            Notas de Credito
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <feather type="file" class="feather-md"></feather>
            Notas de Debito
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <feather type="file" class="feather-md"></feather>
            Guias de Remision
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <feather type="tool" class="feather-md"></feather>
            Ajustes
          </a>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            modules: state => state.modules,
        }),
    },
    methods: {
        isActive(name) {

        }
    }
}
</script>