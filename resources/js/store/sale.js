
export const sale = {
  namespaced: true,
  state: {
    products: [],
    payments: [],
    product: {
      inventario: {},
      opciones: [],
    },
    customer: {
      nombres: '',
      documento: '',
      direccion: '',
      email: '',
      celular: '',
      tipoDocumento: 'DNI',
    },
    options: {
      cuenta: null,
      inicial: null,
      fechaEntrega: new Date(),
      fechaInicial: new Date(),
      tipoCambio: null,
      comprobante: 'BOLETA',
      metodoPago: 'EFECTIVO',
      moneda: 'PEN',
      cliente: null,
      pagado: true,
      entregado: true,
      totalPago: 0,
      descuento: null,
      referencia: null,
      efectivo: null,
      observacion: null,
      //Montos
      montoEfectivo: null,
      montoVisa: null,
      montoMastercard: null,
      montoDeposito: null,
      montoTransferencia: null,
      montoOnline: null,
      //IGV
      inafecto: null,
      exonerado: null,
      gravado: null,
      igv: null,
      //Personal
      personal: null,
      referido: null,

      voucherVisa: null,
      voucherMastercard: null,
      turno: null,
      reseller: null,
      precioLista: null,
    },
    defaultOptions: {}
  },
  getters: {
    stock({ product }) {
      return product.inventario.stock;
    },
    debtAmount(state, getters) {
      return (getters.totalProducts - state.options.inicial) / (state.options.cuotas);
    },
    totalProductsUSD({ products, options }) {
      var total = 0;
      var totalOptions = 0;

      products.forEach(item => {
        total += (item.moneda == 'USD' ? item.precioVenta : item.precioVenta / options.tipoCambio || 1) * item.cantidad;
      });
      products.forEach(product => {
        if (product.opciones) {
          product.opciones.forEach(option => {
            totalOptions += option.precioVenta * option.pickY.filter(item => item).length;
          });
        }
      });
      return  total + totalOptions - options.descuento;
    },
    totalProductsPEN({ products, options }) {
      var total = 0;
      var totalOptions = 0;

      products.forEach(item => {
        total += (item.moneda == 'PEN' ? item.precioVenta : item.precioVenta * options.tipoCambio || 1) * item.cantidad;
      });
      products.forEach(product => {
        if (product.opciones) {
          product.opciones.forEach(option => {
            totalOptions += option.precioVenta * option.pickY.filter(item => item).length;
          });
        }
      });
      return  total + totalOptions - options.descuento;
    },
    totalProducts({ products, options }) {
      var total = 0;
      var totalOptions = 0;

      if (options.moneda == 'PEN') {
        products.forEach(item => {
          total += (item.moneda == 'PEN' ? item.precioVenta : item.precioVenta * options.tipoCambio || 1) * item.cantidad;
        });
      } else {
        products.forEach(item => {
          total += (item.moneda == 'USD' ? item.precioVenta : item.precioVenta / options.tipoCambio || 1) * item.cantidad;
        });
      }
      // products.forEach(product => {
      //   if (product.opciones) {
      //     product.opciones.forEach(option => {
      //       totalOptions += option.precioVenta * option.pickY.filter(item => item).length;
      //     });
      //   }
      // });
      return  total + totalOptions - options.descuento;
    },
  },
  mutations: {
    setPayments(state, payments = []) {
      if (payments.length) {
        state.payments = payments;
      } else {
        state.payments = [
          { metodoPago: 'EFECTIVO', totalPago: null },
        ];
      }
    },
    addPayment(state, payment) {
      payment = payment || { metodoPago: 'EFECTIVO', totalPago: null };
      state.payments.push(payment);
    },
    removePayment(state, index) {
      state.payments.splice(index, 1);
    },
    setSale(state, sale) {
      state.options = Object.assign({
        fechaEntrega: new Date(),
        cuenta: null,
        inicial: null,
        tasa: null,
        comprobante: 'BOLETA',
        // metodoPago: 'EFECTIVO',
        moneda: 'PEN',
        cliente: null,
        pagado: true,
        entregado: true,
        totalPago: 0,
        descuento: null,
        referencia: null,
        efectivo: null,
        observacion: null,
        //Montos
        montoEfectivo: null,
        montoVisa: null,
        montoMastercard: null,
        montoDeposito: null,
        montoTransferencia: null,
        montoOnline: null,
        //IGV
        inafecto: null,
        exonerado: null,
        gravado: null,
        igv: null,
        //Personal
        personal: null,
        referido: null,

        voucherVisa: null,
        voucherMastercard: null,
        turno: null,
        reseller: null,
        precioLista: null,
      }, sale || state.defaultOptions);
    },
    setCustomer(state, customer) {
      state.customer = Object.assign({
        nombres: '',
        documento: '',
        direccion: '',
        email: '',
        celular: '',
        tipoDocumento: 'DNI',
      }, customer);
    },
    setPersonal(state, personal) {
      state.options.personal = personal;
    },
    setReferido(state, referido) {
      state.options.referido = referido;
    },
    pushProduct(state, product) {
      state.products.push(JSON.parse(JSON.stringify(product)));
    },
    addProductWithSerial(state, product) {
      var index = state.products.findIndex(item => item._id == product._id);
      product.seriesOut = product.series.filter(item => item.active);
      product.cantidad = product.seriesOut.length;
      if (index != -1) {
        state.products.splice(index, 1, product);
      } else {
        state.products.push(product);
      }
    },
    addProduct({ products }, product) {
      product = JSON.parse(JSON.stringify(product));
      var check = true;
      if (product.sinStock) {
        product.cantidad = 1;
        products.forEach(item => {
          if (item._id == product._id) {
            item.cantidad += 1;
            check = false;
          }
        });
        if (check) products.push(product);
      } else if(product.inventario && product.inventario.stock) {
        product.cantidad = 1;
        products.forEach(item => {
          if (item._id == product._id) {
            item.cantidad += 1;
            check = false;
          }
        });
        if (check) products.push(product);
      }
    },
    plusProduct(state, product) {
      product.cantidad += 1;
    },
    minusProduct(state, product) {
      if (product.cantidad - 1 > 0) {
        product.cantidad -= 1;
      }
    },
    deleteProduct(state, index) {
      state.products.splice(index, 1);
    },
    setProducts(state, products = []) {
      state.products = products;
    },
  }
};