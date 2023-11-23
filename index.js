const productos = ['television','celular','tablet','reloj']
let  carrito = [];


function ingresandoProductos(productos){
    for(i=0;i<productos.length;i++){
        carrito.push(productos[i])
    }
}
function listandoProductos(carrito){
for(i=0;i<carrito.length;i++){
    console.log(carrito[i])
}
}

function buscandoProducto(producto){
    let productosBuscados = []
    for(i=0;i<carrito.length;i++){
        producto.toLowerCase()
        if(producto === carrito[i]){
            productosBuscados.push(producto)
        }
    }
    return productosBuscados;
}

function filtrarProductos(palabraClave) {
    return carrito.filter(producto => producto.toLowerCase().includes(palabraClave.toLowerCase()))
}

function eliminandoProducto(buscando){
    let productIndex =  carrito.findIndex(p=> p===buscando )
    if(productIndex == -1){
      return  console.log("producto no encontrado")
    }
    carrito.splice(productIndex,1)
    return console.log("producto eliminado con exito")
}
 ingresandoProductos(productos)
console.log(filtrarProductos("tele"))
//console.log(listandoProductos(productos))
eliminandoProducto("television")
console.log(carrito)