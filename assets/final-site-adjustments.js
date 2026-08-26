(function () {
  'use strict';

  var treatments = [
    { index: 3, title: 'Tratamentos da coluna e hérnia de disco', text: 'Abordagens minimamente invasivas para dor cervical, lombar e hérnias de disco.', icon: 'fa-wave-square', href: 'tratamentos/coluna-e-hernia-de-disco.html' },
    { index: 5, title: 'Medicina regenerativa (PRP, terapia por ondas de choque e laserterapia)', text: 'Tratamentos que estimulam a regeneração, reduzem a dor e aceleram a recuperação dos tecidos.', icon: 'fa-dna', href: 'tratamentos/medicina-regenerativa.html' },
    { index: 6, title: 'Artrose, artrite, condropatia, tendinite e bursite', text: 'Tratamentos personalizados para reduzir a dor, preservar a articulação e melhorar a função.', icon: 'fa-bone', href: 'tratamentos/artrose-artrite-e-tendinites.html' }
  ];

  treatments.forEach(function (item) {
    var card = document.querySelectorAll('.treatment-grid > article, .treatment-grid > a')[item.index];
    if (!card) return;
    var title = card.querySelector('h3');
    var text = card.querySelector('p');
    var icon = card.querySelector('.treatment-icon i');
    if (title) title.textContent = item.title;
    if (text) text.textContent = item.text;
    if (icon) icon.className = 'fa-solid ' + item.icon;
    if (card.tagName === 'A') {
      card.href = item.href;
      card.setAttribute('aria-label', 'Saiba mais sobre ' + item.title.toLowerCase());
    }
  });

  var locations = document.querySelector('.locations');
  if (locations) {
    locations.classList.add('locations-final');
    var eyebrow = locations.querySelector(':scope > .container > .eyebrow');
    var title = locations.querySelector(':scope > .container > h2');
    if (eyebrow) eyebrow.remove();
    if (title) title.textContent = 'Locais de atendimento';
  }

  var faq = document.querySelectorAll('.faq-list details');
  if (faq[0]) faq[0].querySelector('p').textContent = 'Atendimento especializado em Ortopedia e Medicina da Dor, com foco em dor crônica, problemas da coluna, artrose, artrite, condropatias, tendinites, bursites e outras condições musculoesqueléticas, buscando aliviar a dor, recuperar movimentos e melhorar a qualidade de vida.';
  if (faq[1]) faq[1].querySelector('p').textContent = 'Cada tratamento é definido de forma individualizada após avaliação médica. Entre as opções estão infiltrações guiadas por imagem, bloqueios, radiofrequência, viscossuplementação e Medicina Regenerativa (PRP, terapia por ondas de choque e laserterapia), além de outras técnicas modernas conforme a necessidade de cada paciente.';
}());
