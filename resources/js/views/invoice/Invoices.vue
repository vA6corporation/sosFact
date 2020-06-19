<template>
<div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-3 mb-3 border-bottom">
        <h1 class="h2 mb-0">Facturas</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <!-- <div class="btn-group mr-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
            </div> -->
            <router-link class="btn btn-outline-primary" to="/invoices/create">
                <feather type="plus"></feather>
                Nuevo
            </router-link>
        </div>
    </div>
    <div class="card shadow-sm">
        <div class="card-body">
            <div class="row">
                
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>