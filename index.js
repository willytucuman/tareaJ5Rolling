const productos = ['television', 'celular', 'tablet', 'reloj'];
let carrito = [];

const ingresarProductos = (productos) => {
  productos.forEach((producto) => carrito.push(producto));

  console.log(carrito);
  listarProductos(carrito);
  buscarProducto(carrito);
};

const listarProductos = (carrito) => {
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
  }
};

const buscarProducto = (carrito) => {
  const nuevoProducto = carrito.filter((producto) => {});

  console.log(nuevoProducto);
};

ingresarProductos(productos);
