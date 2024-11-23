document.getElementById('citaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
  
    alert(`Cita agendada:\n\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nFecha: ${fecha}\nHora: ${hora}`);
  });
  