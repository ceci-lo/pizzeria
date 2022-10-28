const { createApp } = Vue
  
createApp({
  data() {
    return {
      listaProducto: [{
        Nombre: "Pizza Calabreza",
        Ingredientes:  "Salsa de tomate, oregano, muzarella, Calabreza y aceitunas",
        Porciones: "8 porciones",
        Precio: "2050",
        img: "img/pizzaCalabreza.jpg"
        }, 
        { 
        Nombre: "Pizza Cuatro Quesos",
        Ingredientes:  "Salsa de tomate, Holanda, muzarella, Roquefort y queso parmesano",
        Porciones: "8 porciones",
        Precio: "2150",
        img: "img/pizzaCuatroQuesos.jpg" }]
      
    }
  } /*,
  methods:
   {
        
    getProducto: function(){
        axios.get('productos.json').then( response => {
            this.listaProducto = response.data
            
        })
        
    }
},
mounted: function(){
   this.getProducto();
}*/
}).mount('#productos')


    