(function () {
  'use strict';

  var href = 'https://wa.me/556184507010?text=' + encodeURIComponent('Olá, vim do site e gostaria de agendar uma consulta.');

  document.querySelectorAll('[data-lead-open]').forEach(function (button) {
    var link = document.createElement('a');
    link.className = button.className;
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener';
    link.innerHTML = button.innerHTML;
    link.setAttribute('aria-label', button.getAttribute('aria-label') || 'Agendar consulta pelo WhatsApp');
    button.replaceWith(link);
  });

  var phone = document.querySelector('.footer-phone span:last-child');
  if (phone) phone.textContent = '+55 (61) 8450-7010';
}());
