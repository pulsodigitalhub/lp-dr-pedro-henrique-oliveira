(function () {
  'use strict';

  var treatments = [
    { index: 3, title: 'Tratamentos da coluna e hérnia de disco', text: 'Abordagens minimamente invasivas para dor cervical, lombar e hérnias de disco.', image: '../img/icons/spine-flaticon-1397621.png', href: 'tratamentos/coluna-e-hernia-de-disco.html' },
    { index: 5, title: 'Medicina regenerativa (PRP, terapia por ondas de choque e laserterapia)', text: 'Tratamentos que estimulam a regeneração, reduzem a dor e aceleram a recuperação dos tecidos.', icon: 'fa-dna', href: 'tratamentos/medicina-regenerativa.html' },
    { index: 6, title: 'Artrose, artrite, condropatia, tendinite e bursite', text: 'Tratamentos personalizados para reduzir a dor, preservar a articulação e melhorar a função.', icon: 'fa-bone', href: 'tratamentos/artrose-artrite-e-tendinites.html' }
  ];

  treatments.forEach(function (item) {
    var card = document.querySelectorAll('.treatment-grid > article, .treatment-grid > a')[item.index];
    if (!card) return;
    var title = card.querySelector('h3');
    var text = card.querySelector('p');
    var iconHolder = card.querySelector('.treatment-icon');
    var icon = card.querySelector('.treatment-icon i');
    if (title) title.textContent = item.title;
    if (text) text.textContent = item.text;
    if (item.image && iconHolder) {
      iconHolder.innerHTML = '<img class="treatment-icon-image" src="' + item.image + '" alt="" aria-hidden="true">';
    } else if (icon) {
      icon.className = 'fa-solid ' + item.icon;
    }
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
    if (eyebrow) {
      eyebrow.textContent = 'Atendimento presencial';
    } else if (title) {
      eyebrow = document.createElement('p');
      eyebrow.className = 'eyebrow';
      eyebrow.textContent = 'Atendimento presencial';
      title.before(eyebrow);
    }
    if (title) title.textContent = 'Locais de atendimento';
  }

  var faq = document.querySelectorAll('.faq-list details');
  if (faq[0]) faq[0].querySelector('p').textContent = 'Atendimento especializado em Ortopedia e Medicina da Dor, com foco em dor crônica, problemas da coluna, artrose, artrite, condropatias, tendinites, bursites e outras condições musculoesqueléticas, buscando aliviar a dor, recuperar movimentos e melhorar a qualidade de vida.';
  if (faq[1]) faq[1].querySelector('p').textContent = 'Cada tratamento é definido de forma individualizada após avaliação médica. Entre as opções estão infiltrações guiadas por imagem, bloqueios, radiofrequência, viscossuplementação e Medicina Regenerativa (PRP, terapia por ondas de choque e laserterapia), além de outras técnicas modernas conforme a necessidade de cada paciente.';

  var reviews = document.querySelector('.review-demo-grid');
  if (reviews) {
    var comments = [
      ['Tereza C.', 'Fui em uma consulta com o Dr. Pedro e gostei muito do atendimento. Muito atencioso e profissional!'],
      ['Francisco R.', 'O Dr. Pedro atendeu o meu pai, foi muito paciente para explicar todo o diagnóstico e nos passar segurança.'],
      ['Kamila O.', 'Só tenho a agradecer o Dr. Pedro por todo o carinho e atenção.']
    ];
    reviews.classList.add('reviews-final');
    reviews.setAttribute('aria-label', 'Avaliações de pacientes');
    reviews.innerHTML = comments.map(function (comment) {
      return '<article class="review-demo-card"><p>' + comment[1] + '</p><span class="review-demo-name">' + comment[0] + '</span></article>';
    }).join('');
  }
}());
