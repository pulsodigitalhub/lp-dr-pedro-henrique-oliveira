(function () {
  'use strict';

  var settings = {
    joelho: 'Ortopedia para dor no joelho em Brasília',
    ombro: 'Ortopedia para dor no ombro em Brasília',
    coluna: 'Ortopedia para dor na coluna em Brasília',
    quadril: 'Ortopedia para dor no quadril em Brasília',
    'punho-mao': 'Ortopedia para dor no punho e mão em Brasília',
    'pe-tornozelo': 'Ortopedia para dor no pé e tornozelo em Brasília',
    'ortopedista-aguas-claras': 'Ortopedista em Águas Claras',
    'ortopedista-asa-sul': 'Ortopedista na Asa Sul',
    convenio: 'Ortopedia pelo convênio em Brasília'
  };

  var key = document.documentElement.dataset.variation;
  var title = settings[key];
  if (!title) return;

  fetch('../../index.html', { cache: 'no-cache' })
    .then(function (response) {
      if (!response.ok) throw new Error('Não foi possível carregar a LP base.');
      return response.text();
    })
    .then(function (html) {
      var safeTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      html = html.replace(/<head>/i, '<head><base href="../../"><meta name="robots" content="noindex,follow">');
      html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>' + safeTitle + ' | Dr. Pedro Henrique</title>');
      html = html.replace(/<h1>[\s\S]*?<\/h1>/i, '<h1>' + safeTitle + '</h1>');
      document.open();
      document.write(html);
      document.close();
    })
    .catch(function () {
      document.body.innerHTML = '<main style="padding:48px;font-family:Arial,sans-serif"><p>Não foi possível carregar esta variação agora.</p><p><a href="../../">Voltar para a landing page.</a></p></main>';
    });
}());
