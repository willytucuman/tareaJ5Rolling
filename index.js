// 1.- Crear un repo en github.
// 2.- Crear la rama dev.
// 3.- Vamos a tener solo un archivo index.html y un archivo script.js
// 4.- Crear una rama por cada integrante del equipo.
// 5.- Mergeamos las branch a dev.

// Trabajo en equipo
// Carrito de productos
// Carrito de compras con Array
// ■ Crear una aplicación de carrito de compras donde se ingresen
// productos como elementos en un array.
// ■ las tareas que debe hacer son las siguientes:
// ● Agregar producto al carrito
// ● Listar los productos del carrito
// ● Buscar un producto en el carrito
// ● Filtrar productos que coincidan con una palabra, parte de ella
// o una letra
// ● Eliminar producto del carrito

const productos = ['television', 'celular', 'tablet', 'reloj'];
let carrito = [];

const ingresarProductos = (productos) => {
  productos.forEach((producto) => carrito.push(producto));

  console.log(carrito);
  listarProductos(carrito);
  buscarProducto(carrito);
  eliminarProducto(carrito);
};

const listarProductos = (carrito) => {
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
  }
};

const buscarProducto = (carrito) => {
  const nuevoProducto = carrito.filter((producto) => {
    producto.toLowerCase();
    return producto === 'celular';
  });

  console.log(nuevoProducto);
};

const filtrarProductos = (palabraClave) => {
  productoFiltrado = productos.filter((producto) =>
    producto.includes(palabraClave)
  );

  return console.log(productoFiltrado);
};

const eliminarProducto = (carrito) => {
  const carritoFiltrado = carrito.filter(
    (producto) => producto !== 'television'
  );

  return console.log(carritoFiltrado);
};

ingresarProductos(productos);
filtrarProductos('t');
