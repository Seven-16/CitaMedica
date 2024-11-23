

let citas = [];

// guardado
document.getElementById('citaForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  const cita = { id: Date.now(), nombre, correo, telefono, fecha, hora };
  citas.push(cita);
  alert(`Cita agendada:\n\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nFecha: ${fecha}\nHora: ${hora}`);
  actualizar();
  document.getElementById('citaForm').reset();
});

// esto para actualizar
function actualizar() {
  const citasUl = document.getElementById('citas');
  citasUl.innerHTML = '';
  citas.forEach((cita) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${cita.nombre}</strong> - ${cita.fecha} ${cita.hora}
      <button onclick="editar(${cita.id})">Editar</button>
      <button onclick="eliminar(${cita.id})">Eliminar</button>
    `;
    citasUl.appendChild(li);
  });
}

// Esto es para editar
function editarCita(id) {
  const cita = citas.find((c) => c.id === id);
  if (cita) {
    document.getElementById('nombre').value = cita.nombre;
    document.getElementById('correo').value = cita.correo;
    document.getElementById('telefono').value = cita.telefono;
    document.getElementById('fecha').value = cita.fecha;
    document.getElementById('hora').value = cita.hora;

    citas = citas.filter((c) => c.id !== id); 
    actualizar();
  }
}

// Esto es para eliminar las citas
function eliminarCita(id) {
  citas = citas.filter((c) => c.id !== id);
  actualizar();
}