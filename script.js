  function calcularTotal() {
    let total = 0;
    const checks = document.querySelectorAll('.product-check');
    checks.forEach(check => {
      if (check.checked) {
        total += parseFloat(check.getAttribute('data-price'));
      }
    });
    document.getElementById('total').textContent = total.toLocaleString();
  }

  //Agregar el evento para que se calcule automáticamente
  document.addEventListener('DOMContentLoaded', () => {
    const checks = document.querySelectorAll('.product-check');
    checks.forEach(check => {
      check.addEventListener('change', calcularTotal);
    });
  });

  function enviarFormulario(event) {
    event.preventDefault();
    alert("Solicitud enviada, gracias por visitarnos.");
    document.querySelector("form").reset(); // limpia el formulario después de enviar
  }


