window.Vue = require('vue');
import comon from "./common";

console.log($('h1'));


// Vue.component('exemple-component', require('./components/exemple.vue').default);
Vue.component('exemple-component', require('./components/exemple.vue').default);
const app = new Vue({
    el : "#app"
});
