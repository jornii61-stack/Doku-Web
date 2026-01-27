/* =========================
   DEMO VERSIONES
========================= */

// Botones y secciones
const demoButtons = document.querySelectorAll('.demo-btn');
const demoSections = document.querySelectorAll('.demo-section');

// Función principal
function setDemoVersion(version) {
  demoSections.forEach(section => {
    section.style.display = 'none';

    // Básica
    if (section.classList.contains(version)) {
      section.style.display = 'block';
    }

    // Pro ve también básica
    if (version === 'pro' && section.classList.contains('basica')) {
      section.style.display = 'block';
    }

    // Premium ve todo
    if (version === 'premium') {
      section.style.display = 'block';
    }
  });

  // Estado activo del botón
  demoButtons.forEach(btn => btn.classList.remove('active'));
  document
    .querySelector(`.demo-btn[data-version="${version}"]`)
    .classList.add('active');
}

// Click en botones
demoButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    setDemoVersion(btn.dataset.version);
  });
});

// Versión inicial
setDemoVersion('basica');
