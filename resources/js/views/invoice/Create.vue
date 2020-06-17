<template>
<div>
<items-modal v-model="items"></items-modal>
<form @submit.prevent="submit">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-3 mb-3 border-bottom">
        <h1 class="h2 mb-0">Nueva Factura</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <!-- <div class="btn-group mr-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
            </div> -->
            <button type="submit" class="btn btn-sm btn-outline-primary">
                <i data-feather="save"></i>
                Guardar
            </button>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8 mx-auto">
            <div class="row form-group">
                <label for="" class="col-md-3 col-form-label">N de RUC del cliente</label>
                <div class="col">
                    <input type="text" class="form-control" placeholder="N de RUC del cliente" required>
                </div>
            </div>
            <div class="row">
                <label for="" class="col-md-3 col-form-label">Productos/Servicios</label>
                <div class="col">
                    <div class="card">
                        <!-- <div class="card-header d-flex justify-content-end">
                            <button class="btn btn-sm btn-outline-primary">
                                <i data-feather="plus"></i>
                                Agregar
                            </button>
                        </div> -->
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between" v-for="(item, index) in items" :key="index">
                                {{ item.nombre }}
                                <div class="btn-toolbar">
                                    Cantidad: {{ item.cantidad }}
                                    Precio U.: {{ item.precioUnitario }}
                                </div>
                            </li>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-primary text-center" data-toggle="modal" data-target="#itemsModal">
                                <i data-feather="plus"></i>
                                Agregar Items
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
</div>
</template>

<script>
import ItemsModal from '@/components/ItemsModal'
export default {
    components: {
        ItemsModal,
    },
    data() {
        return {
            invoice: {},
            items: [],
        }
    },
    methods: {
        submit() {
            console.log('enviamos');
        }
    }
}
</script>

<style>

</style>