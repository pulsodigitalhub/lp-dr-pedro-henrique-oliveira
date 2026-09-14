/* Botão flutuante do WhatsApp + barra fixa de rodapé no celular (padrão das LPs do Dr. Gustavo Pimpão). Os dois usam data-lead-open: na LP, o lead-modal.js os transforma em gatilho do popup (lead vai pro webhook); na página institucional, o institutional-whatsapp.js os troca por link direto do WhatsApp, como faz com os outros botões. Por isso este script tem que ser incluído ANTES desses dois, sem defer. O rastreamento usa delegação no document porque o botão pode ser substituído por outro elemento. */
(function () {
  'use strict';

  var SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.91 11.91 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.59 5.96L0 24l6.25-1.64a11.9 11.9 0 0 0 5.79 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.48-8.41ZM12.05 21.83a9.88 9.88 0 0 1-5.04-1.380l-.36-.21-3.71.97.99-3.62-.23-.37a9.91 9.91 0 0 1-1.51-5.27c0-5.47 4.45-9.920 9.92-9.920 2.65 0 5.14 1.03 7.01 2.9a9.85 9.85 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.97 9.92Zm5.44-7.43c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-1.78-.89-2.95-1.59-4.13-3.61-.31-.53.31-.49.89-1.64.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.030-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z"/></svg>';

  function updateSticky() {
    var sticky = document.querySelector('.wa-sticky');
    var button = document.querySelector('.wa-sticky .wa-sticky-btn');
    var visible = window.scrollY > 260;

    if (!sticky || !button) return;

    if (visible) {
      sticky.classList.add('is-visible');
      sticky.setAttribute('aria-hidden', 'false');
      button.tabIndex = 0;
      document.body.classList.add('has-wa-sticky');
    } else {
      sticky.classList.remove('is-visible');
      sticky.setAttribute('aria-hidden', 'true');
      button.tabIndex = -1;
      document.body.classList.remove('has-wa-sticky');
    }
  }

  function init() {
    var floating;
    var sticky;

    if (document.querySelector('.wa-float')) return;

    floating = document.createElement('button');
    floating.type = 'button';
    floating.className = 'wa-float';
    floating.setAttribute('data-lead-open', '');
    floating.setAttribute('aria-label', 'Falar com a equipe pelo WhatsApp');
    floating.innerHTML = SVG;
    document.body.appendChild(floating);

    sticky = document.createElement('div');
    sticky.className = 'wa-sticky';
    sticky.setAttribute('aria-hidden', 'true');
    sticky.innerHTML = '<button type="button" class="wa-sticky-btn" data-lead-open tabindex="-1" aria-label="Agendar pelo WhatsApp">' + SVG + '<span>Agendar pelo WhatsApp</span></button>';
    document.body.appendChild(sticky);

    updateSticky();
    window.addEventListener('scroll', updateSticky, { passive: true });
  }

  document.addEventListener('click', function (event) {
    var element = event.target.closest('.wa-float, .wa-sticky-btn');

    if (element) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'cta_click',
        cta_location: element.classList.contains('wa-float') ? 'floating_whatsapp' : 'mobile_sticky'
      });
    }
  }, true);

  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
}());
