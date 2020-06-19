import Vue from 'vue'
import Vuex from 'vuex'
import { sale } from './sale'
import { modules } from './modules'
import { system } from './system'
import { credit } from './credit'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sale,
    system,
    modules,
    credit,
  },
  state: {
    months: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    days: [
      'domingo',
      'lunes',
      'martes',
      'miercoles',
      'jueves',
      'viernes',
      'sabado',
    ],
    shortDays: [
      'dom',
      'lun',
      'mar',
      'mie',
      'jue',
      'vie',
      'sab',
    ],
  },
})
