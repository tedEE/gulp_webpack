window.Vue = require('vue');

Vue.component('exemple-component', require('./components/exemple.vue').default);
const app = new Vue({
    el : "#app"
});

export default {
    app
}
