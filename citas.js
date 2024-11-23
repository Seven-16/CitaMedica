document.addEventListener('DOMContentLoaded', function () {
  const citasGuardadas = localStorage.getItem('citas');
  const citas = citasGuardadas ? JSON.parse(citasGuardadas) : [];

  // limpiar 
  const citasUl = document.getElementById('citas');
  citasUl.innerHTML = ''; 

  if (citas.length === 0) {
    citasUl.innerHTML = '<li>No hay citas guardadas.</li>';
  } else {
    citas.forEach((cita) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${cita.nombre}</strong> - ${cita.fecha} ${cita.hora}
      `;
      citasUl.appendChild(li);
    });
  }
});
