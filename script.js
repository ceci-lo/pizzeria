const { createApp } = Vue;
createApp({
  data() {
    return {
      listaProducto: [
        {
          Nombre: "Pizza Calabreza",
          Ingredientes:
            "Salsa de tomate, oregano, muzarella, Calabreza y aceitunas",
          Porciones: "8 porciones",
          Precio: "2050",
          img: "img/pizzaCalabreza.jpg",
        },
        {
          Nombre: "Pizza Cuatro Quesos",
          Ingredientes:
            "Salsa de tomate, Holanda, muzarella, Roquefort y queso parmesano",
          Porciones: "8 porciones",
          Precio: "2150",
          img: "img/pizzaCuatroQuesos.jpg",
        },
        {
          Nombre: "Pizza Especial",
          Ingredientes: "Salsa de tomate, muzarella, jamon cocido  y morrones",
          Porciones: "8 porciones",
          Precio: "1900",
          img: "img/pizzaEspecial.jpg",
        },
        {
          Nombre: "Pizza Margaritha",
          Ingredientes:
            "Salsa de tomate, muzarella, Tomate cubeteado y alabahaca",
          Porciones: "8 porciones",
          Precio: "1900",
          img: "img/pizzaMargarita.jpg",
        },
        {
          Nombre: "Pizza Napolitana",
          Ingredientes:
            "Salsa de tomate, rodajas de Tomate, oregano y aceitunas negras",
          Porciones: "8 porciones",
          Precio: "1500",
          img: "img/pizzaNapolitana.jpg",
        },
        {
          Nombre: "Pizza Pepperoni",
          Ingredientes: "Salsa de tomate, muzarella, peperoni",
          Porciones: "8 porciones",
          Precio: "1900",
          img: "img/pizzaPepperoni.webp",
        },
        {
          Nombre: "Pizza Toscana",
          Ingredientes:
            "Salsa de tomate, muzarella, rucula, jamon crudo, tomates cherrys y aceitunas negras",
          Porciones: "8 porciones",
          Precio: "2500",
          img: "img/pizzaToscana.jpg",
        },
      ],
    };
  },

  /*,
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
}).mount("#productos");

function password() {
  let show = document.getElementById("inputPassword2");

  if (show.type == "password") {
    show.type = "text;";
  } else {
    show.type = "password";
  }
}

