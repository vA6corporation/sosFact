export const credit = {
  namespaced: true,
  state: {
    detalles: [],
    comprobante: '',
    pagos: [],
    pagosAnulados: [],
    cliente: {},
    oficina: {},
    descuento: null,
  },
  getters: {
    totalCredit({ detalles, descuento }) {
      return detalles.map(e => e.cantidad * e.precioVenta).reduce((a, b) => a + b, 0) - descuento;
    },
    totalPayed({ pagos }) {
      return pagos.map(e => e.totalPago).reduce((a, b) => a + b, 0);
    },
  },
  mutations: {
    setCredit(state, credit) {
      Object.assign(state, credit);  
    }
  }
}