<template>
<div>
<items-modal v-model="items"></items-modal>
<form @submit.prevent="submit">
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-3 mb-3 border-bottom">
    <h1 class="h2 mb-0">Nueva Boleta Sandra</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
      <!-- <div class="btn-group mr-2">
        <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
        <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
      </div> -->
      <button type="submit" class="btn btn-outline-primary">
        <feather type="save"></feather>
        Guardar
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8 mx-auto">
      <div class="row form-group">
        <label for="" class="col-md-3 col-form-label">Tipo de documento</label>
        <div class="col">
          <select name="" id="" class="custom-select" v-model="tipeDocument">
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
            <option value="CARNETEXT">CARNET DE EXT.</option>
            <option value="OTROS">OTROS</option>
          </select>
        </div>
      </div>
      <div class="row form-group">
        <label for="" class="col-md-3 col-form-label">N de Documento</label>
        <div class="col">
          <input type="text" v-model="client.documento" v-if="tipeDocument == 'DNI'" @input="findClientByDni" class="form-control" placeholder="N de DNI" maxlength="8" minlength="8" required>
          <input type="text" v-model="client.documento" v-if="tipeDocument == 'RUC'" @input="findClientByRuc" class="form-control" placeholder="N de RUC" maxlength="11" minlength="11" required>
          <input type="text" v-model="client.documento" v-if="tipeDocument == 'CARNETEXT'" @input="findClientByCarnetExt" class="form-control" placeholder="N de Carnet Extranjeria" maxlength="9" minlength="9" required>
          <input type="text" v-model="client.documento" v-if="tipeDocument == 'OTROS'" @input="findClientByOtros" class="form-control" placeholder="N del cliente" maxlength="11" minlength="11" required>
        </div>
      </div>
      <hr>
      <table class="table">
        <tbody>
          <tr>
            <td>
              Nombres:
            </td>
            <td>
              {{ client.nombres }}
            </td>
          </tr>
           <tr>
            <td>
              RUC:
            </td>
            <td>
              {{ client.documento }}
            </td>
          </tr>
          <tr>
            <td>
              Direccion:
            </td>
            <td>
              {{ client.direccion }}
            </td>
          </tr>
           <tr>
            <td>
              Puntos:
            </td>
            <td>
              {{ client.puntos }}
            </td>
          </tr>
          <tr>
            <td>
              Celular:
            </td>
            <td>
              {{ client.celular }}
            </td>
          </tr>
           <tr>
            <td>
              Email:
            </td>
            <td>
              {{ client.email }}
            </td>
          </tr>
          <tr>
            <td>
              Fecha de Nacimiento:
            </td>
            <td>
              {{ client.fechaNacimiento }}
            </td>
          </tr>
           <tr>
            <td>
              Genero:
            </td>
            <td>
              {{ client.genero }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
         <label for="" class="col-md-3 col-form-label">Productos/Servicios</label>
        <div class="col">
          <form @submit.prevent="addProduct" class="input-group form-group">
            <input type="text" v-model="item.nombre" class="form-control" placeholder="Nombre del producto o servicio" required>
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary">
                <feather type="plus"></feather>
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <!-- <label for="" class="col-md-3 col-form-label">Productos/Servicios</label> -->
        <div class="col">
          <!-- <form @submit.prevent="addProduct" class="input-group form-group">
            <input type="text" v-model="item.nombre" class="form-control" placeholder="Nombre del producto o servicio" required>
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary">
                <feather type="plus"></feather>
                Agregar
              </button>
            </div>
          </form> -->
          <div class="card shadow-sm" v-if="items.length">
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="(item, index) in items" :key="index">
                <div class="row">
                  <div class="col lead d-flex align-items-center text-uppercase">
                    {{ item.nombre }}
                  </div>
                  <div class="col-md-5">
                    <div class="input-group">
                      <input type="number" v-model.number="item.cantidad" class="form-control" placeholder="Cantidad" required>
                      <input type="number" v-model.number="item.precioUnitario" class="form-control" placeholder="Precio U." required>
                      <div class="input-group-append">
                        <a href="#" class="btn btn-danger" @click.prevent="items.splice(index, 1)">
                          <feather type="trash-2"></feather>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="list-group-item list-group-item-info d-flex justify-content-between lead font-weight-bold">
                TOTAL
                <span>
                  S/ {{ totalItems.toFixed(2)}}
                </span>
              </li>
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
      tipeDocument: 'DNI',
      client: {},
      invoice: {},
      items: [],
      item: {},
    }
  },
  computed: {
    totalItems() {
      return this.items.map(e => e.precioUnitario * e.cantidad).reduce((a, b) => a + b, 0);
    }
  },
  methods: {
    submit() {
      console.log('enviamos');
    },
    findClientByRuc() {
      console.log(this.client.documento);
      if (this.client.documento.length == 11) {
        this.$http.get(`/clients/${this.client.documento}/byRuc`).then(res => {
          console.log(res);
          this.client  = res.body.client;
        }, res => {
          console.log(res);
          alert(res.body.err);
        });
      }
    },
    findClientByDni() {
      console.log(this.client.documento);
      if (this.client.documento.length == 8) {
        this.$http.get(`/clients/${this.client.documento}/byDni`).then(res => {
          console.log(res);
          this.client  = res.body.client;
        }, res => {
          console.log(res);
          alert(res.body.err);
        });
      }
    },
    findClientByCarnetExt(){

    },
    findClientByOtros(){

    },
    addProduct() {
      this.item.precioUnitario = null;
      this.item.cantidad = null;
      this.items.push(Object.assign({}, this.item));
      this.item = {};
    }
  }
}
</script>

<style>

</style>