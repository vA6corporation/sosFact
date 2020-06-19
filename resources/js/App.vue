<template>
<div id="app">
  <topbar/>
  <div class="container-fluid">
    <div class="row">
      <sidebar/>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Sidebar from '@/components/layouts/Sidebar'
import Topbar from '@/components/layouts/Topbar'

export default {
  components: {
    Sidebar,
    Topbar,
  },
  mounted() {
    console.log('Listo');
  }
}
</script>

<style>

</style>