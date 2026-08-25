(() => {
  const button = document.querySelector('[data-convenios-toggle]');
  const list = document.getElementById('lista-completa-convenios');
  if (!button || !list) return;

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    list.hidden = expanded;
    button.querySelector('small').textContent = expanded ? 'Ver todos' : 'Ver menos';
  });
})();
