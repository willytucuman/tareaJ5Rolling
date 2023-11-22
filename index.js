const productos = ['television','celular','tablet','reloj']
let  carrito = [];
let productosBuscados = []
function ingresandoProductos(productos){
    carrito.push(productos)
}
function listandoProductos(carrito){
for(i=0;i<carrito.length;i++){
    console.log(carrito[i])
}
}

function buscandoProducto(producto){
    for(i=0;i<carrito.length;i++){
        producto.toLowerCase()
        if(producto == "television"||producto=="celular"||producto=="tablet"||producto=="reloj"){
            productosBuscados.push(producto)
        }
    }
}

function filtrarProductos(palabraClave) {
    return carrito.filter(producto => {
      return producto.toLowerCase().includes(palabraClave.toLowerCase());
    });
  }

function eliminandoProducto(producto){
    return carrito.forEach(p=> {
        producto.toLowerCase()
        if(producto === p){
            carrito.pop(p)
            console.log("ahora tu carrito es:" + {carrito})
        }
    }
)
}