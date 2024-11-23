let citas = [];

// Para cargar citas local storage
document.addEventListener('DOMContentLoaded', function () {
  const citasGuardadas = localStorage.getItem('citas');
  if (citasGuardadas) {
    citas = JSON.parse(citasGuardadas);
    actualizarCitas();
  }
});

// Guardar y actualizar
function actualizarCitas() {
  const citasUl = document.getElementById('citas');
  citasUl.innerHTML = '';  
  citas.forEach((cita) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${cita.nombre}</strong> - ${cita.fecha} ${cita.hora}
      <button onclick="editarCita(${cita.id})">Editar</button>
      <button onclick="eliminarCita(${cita.id})">Eliminar</button>
    `;
    citasUl.appendChild(li);
  });

  // guardar cita actualizada
  localStorage.setItem('citas', JSON.stringify(citas));
}

// crear y editar
document.getElementById('citaForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;


  const id = document.getElementById('citaForm').dataset.id;
  
  //Editar
  if (id) {
    const citaEditada = citas.find(cita => cita.id == id);
    citaEditada.nombre = nombre;
    citaEditada.correo = correo;
    citaEditada.telefono = telefono;
    citaEditada.fecha = fecha;
    citaEditada.hora = hora;
    document.getElementById('citaForm').removeAttribute('data-id');
  } else {
    const nuevaCita = { id: Date.now(), nombre, correo, telefono, fecha, hora };
    citas.push(nuevaCita);
  }


  actualizarCitas();
  document.getElementById('citaForm').reset();
  alert(id ? 'Cita editada.' : 'Cita guardada.');
});

function editarCita(id) {
  const cita = citas.find(c => c.id === id);
  if (cita) {
    document.getElementById('nombre').value = cita.nombre;
    document.getElementById('correo').value = cita.correo;
    document.getElementById('telefono').value = cita.telefono;
    document.getElementById('fecha').value = cita.fecha;
    document.getElementById('hora').value = cita.hora;
    
    document.getElementById('citaForm').dataset.id = cita.id;
  }
}

// Borrar
function eliminarCita(id) {
  citas = citas.filter(cita => cita.id !== id);
  actualizarCitas(); 
  alert('Cita eliminada.');
}
