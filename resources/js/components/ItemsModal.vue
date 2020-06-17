<template>
<form @submit.prevent="submit" class="modal fade" id="itemsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Agregar Items</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row form-group">
            <div class="col">
              <form @submit.prevent="addItem" class="input-group">
                <input type="text" v-model="item.nombre" class="form-control" placeholder="Nombre del Producto/Servicio" required>
                <div class="input-group-append">
                  <button class="btn btn-primary">
                    <i data-feather="plus"></i>
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <i data-feather="save"></i>
              <ul class="list-group">
                <li class="list-group-item" v-for="(item, index) in items" :key="index">
                  <div class="row d-flex align-items-center">
                    <div class="col lead">
                      {{ item.nombre }}
                    </div>
                    <div class="col-md-5">
                      <div class="input-group">
                        <input type="number" v-model="item.cantidad" class="form-control" placeholder="Cantidad" step="any" required>
                        <input type="number" v-model="item.precioUnitario" class="form-control" placeholder="Precio U." step="any" required>
                        <div class="input-group-append">
                          <a href="#" class="btn btn-sm btn-danger">
                            <feather type="trash-2" class="feather-md"></feather>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            <feather type="x" class="feather-md"></feather>
            Cancelar
          </button>
          <button type="submit" class="btn btn-primary">
            <feather type="save" class="feather-md"></feather>
            Guardar
          </button>
        </div>
    </div>
  </div>
</form>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      item: {},
      items: [],
    }
  },
  methods: {
    submit() {
      this.$emit('input', this.items);
      $('.modal').modal('hide');
    },
    addItem() {
      this.items.push(this.item);
      this.item = {};
    }
  }
}
</script>