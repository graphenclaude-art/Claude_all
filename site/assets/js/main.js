// Menú móvil
document.addEventListener('click', (e) => {
  const toggle = e.target.closest('.nav-toggle');
  if (!toggle) return;
  const header = toggle.closest('.site-header');
  const open = header.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Formulario de proyecto: envío pendiente de conectar con el CRM.
document.addEventListener('submit', (e) => {
  const form = e.target.closest('form[data-project-form]');
  if (!form) return;
  e.preventDefault();
  const note = form.querySelector('[data-form-note]');
  if (note) {
    note.hidden = false;
    note.textContent = 'Formulario de demostración: falta conectar el endpoint de envío y el CRM.';
  }
});
