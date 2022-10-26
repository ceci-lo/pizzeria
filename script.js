import VueAxios from './plugins/axios'
const app = new Vue({
    el: "#productos",
    data: {
        listaProducto: []       
    },
    methods: {
        
        getProducto: function(){
            Vue.prototype.$axios = axios
            this.$axios.get('productos.json').then( response => {
                this.listaProducto = response.data
            })
            
        }
    },
    mounted: function(){
        this.getProducto();
    }
})