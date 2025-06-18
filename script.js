// Muestra u oculta el contenedor del carrito al hacer clic en el botón
function mostrarCarrito() {
  const carrito = document.getElementById("carrito-container");
  carrito.classList.toggle("visible"); // Alterna la clase "visible" para mostrar u ocultar
}

// Actualiza la lista del carrito con los productos seleccionados y suma el total
function actualizarCarrito() {
  const checks = document.querySelectorAll('.product-check'); // Selecciono todos los checkboxes
  const lista = document.getElementById("carrito-lista"); // Contenedor de los ítems del carrito
  lista.innerHTML = ''; // Limpio el contenido actual del carrito
  let total = 0;

  checks.forEach(check => {
    if (check.checked) { // Si el producto está seleccionado
      const producto = check.closest('.wsk-cp-product'); // Busco el contenedor del producto
      const nombre = producto.querySelector('.title-product h3').textContent; // Obtengo el nombre
      const precio = parseFloat(check.getAttribute('data-price')); // Obtengo el precio desde el atributo
      total += precio;

      const item = document.createElement('li'); // Creo el ítem para la lista
      item.className = 'list-group-item';
      item.textContent = `${nombre} - $${precio.toLocaleString()}`; // Formateo el texto
      lista.appendChild(item); // Agrego el ítem a la lista del carrito
    }
  });

  document.getElementById('total').textContent = total.toLocaleString(); // Muestro el total actualizado
}

// Desmarca todos los productos seleccionados y actualiza el carrito
function vaciarCarrito() {
  const checks = document.querySelectorAll('.product-check');
  checks.forEach(check => check.checked = false); // Desmarco todos los checkboxes
  actualizarCarrito(); // Refresco el carrito
}

// Evento que se activa cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  const checks = document.querySelectorAll('.product-check');
  // Cada vez que se selecciona o deselecciona un producto, actualizo el carrito
  checks.forEach(check => {
    check.addEventListener('change', actualizarCarrito);
  });
});
