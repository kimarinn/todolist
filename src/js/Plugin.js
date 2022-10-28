
import Date from '../js/Date'

export default { 
    install(Vue) {
       console.log('Plugin use~')
       Vue.prototype.$date = new Date()
    }
}