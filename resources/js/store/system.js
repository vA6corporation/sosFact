export const system = {
  namespaced: true,
  state: {
    message: null,
    errorView: false,
    pathName: '',
    priceList: null,
    version: '',
    certificate: '',
    turn: {},
    business: {},
    group: {},
    setting: {},
    office: {},
    user: {},
    modules: {},
    categories: [],
    accounts: [],
    printers: [],
    workers: [],
    reservationsCard: false,
    notifyCount: 0,
  },
  mutations: {
    setNotifyCount(state, notifyCount) {
      state.notifyCount = notifyCount;
    },
    setGroup(state, group = {}) {
      state.group = group;
    },
    setPrinters(state, printers) {
      state.printers = printers;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setAccounts(state, accounts) {
      state.accounts = accounts;
    },
    setWorkers(state, workers) {
      state.workers = workers;
    },
    setErrorView(state) {
      state.errorView = true;
    },
    setCertificate(state, certificate = '') {
      state.certificate = certificate;
    },
    setModules(state, modules) {
      state.modules = modules;
    },
    setBusiness(state, business) {
      state.business = business;
    },
    setTurn(state, turn = {}) {
      state.turn = turn;
    },
    resetUser(state) {
      state.user = {};
      state.office = {};
      state.business = {};
    },
    setUser(state, user) {
      state.user = user;
    },
    setOffice(state, office = {}) {
      state.office = office;
    },
    setPathName(state, pathName) {
      state.pathName = pathName;
    },
    setVersion(state, version) {
      console.log(version);
      state.version = version;
    },
    setMessage(state, message) {
      state.message = Object.assign({}, message);
    }
  },
  actions: {
    setPriceList({ state, rootState }, priceList) {
      state.priceList = priceList;
      rootState.sale.options.precioLista = priceList;
      var officeId = rootState.system.office._id;
      rootState.productsList.forEach(product => {
        var price = product.precios.find(item => item.oficina == officeId && item.lista == priceList);
        product.precioVenta = price ? price.precioVenta : product.precioVenta;
      });
      if (rootState.product._id) {
        var product = rootState.product;
        var price = product.precios.find(item => item.oficina == officeId && item.lista == priceList);
        rootState.product.precioVenta = price ? price.precioVenta : product.precioVenta;
      }
    },
    setSetting({ state, rootState }, setting) {
      state.setting = setting;
      var options = rootState.sale.defaultOptions;
      options.comprobante = setting.defaultVoucher;
      options.tipoCambio = setting.defaultTipoCambio;
    },
  },
  getters: {
    offices({ group }) {
      var offices = [];
      if (group._id) {
        group.empresas.forEach(item => {
          offices.push(...item.oficinas);
        });
        return offices;
      } else {
        return offices;
      }
    },
    businessesId({ group }) {
      if (group._id) {
        return group.empresas.map(e => e._id);
      } else {
        return [];
      }
    },
    isAuthorized: ({ user, business, modules, group }) => (modulo) => {
      if (modulo == undefined) {
        return true;
      }

      if (modulo == 'ajustes' && user._id == business.usuario || modulo == 'ajustes' && group._id && group.empresas.find(e => e.usuario == user._id)) {
        return true;
      }

      if (modulo != 'ajustes') {
        if (modules[modulo] && (user.privilegios[modulo] || false))  {
          return true;
        } else { 
          if (modules[modulo] && user._id == business.usuario || modules[modulo] && group._id && group.empresas.find(e => e.usuario == user._id)) {
            return true;
          }
        }
      }
    },
    isDebtor: state => {
      var date = new Date();
      var paymentDate = new Date(state.business.fechaPago);
      date.setHours(0,0,0,0);
      paymentDate.setHours(0,0,0,0);
      var diff = paymentDate.getTime() - date.getTime();
      return diff;
    },
    privileges: state => state.user.privilegios,
    authenticated: state => state.user._id,
    isSetOffice: state => state.office._id,
  }
}
  