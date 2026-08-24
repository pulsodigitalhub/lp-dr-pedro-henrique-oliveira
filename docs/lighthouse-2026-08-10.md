# Lighthouse — Dr. Rodrigo Pires

Auditoria local em `previews/dr-rodrigo-pires.html`, em 2026-08-10, com Lighthouse mobile e as categorias Performance, Accessibility, Best Practices e SEO.

## Resultado final

| Categoria | Nota |
| --- | ---: |
| Performance | 85 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 63 |

- FCP: 2,7 s
- LCP: 3,4 s
- TBT: 0 ms
- CLS: 0
- Transferencia total: 999 KiB

## Correcoes aplicadas

- Os 15 icones 3D usados pela pagina foram convertidos para WebP de 160 px e receberam dimensoes explicitas. Antes, os PNGs de 1024 px somavam cerca de 11,5 MB; depois da otimizacao, a pagina inteira ficou abaixo de 1 MB.
- Logo e fundo do hero receberam variantes WebP menores; o fundo do hero tambem foi pre-carregado.
- Os textos de apoio do rodape e os kickers foram ajustados para contraste AA.
- O titulo visual "Unidades" no rodape deixou de usar `h4`, removendo o salto de hierarquia de headings.

## Gate de producao

O LCP ainda esta acima do alvo de 2,5 s para Ads. O elemento LCP e a secao do hero, que usa a foto de fundo. A proxima rodada deve ser feita na URL final, com cache/CDN e a configuracao real de fontes; nao aprovar performance para Ads apenas com este preview local.

O SEO em 63 e esperado neste ambiente: o preview mantem `noindex, follow`. Esse valor deve subir somente na versao de producao, quando o `noindex` for removido junto com a URL canonica definitiva.

## Pendencias de producao que permanecem

- Container GTM correto e configuracao de tags/eventos no ambiente de producao.
- URL da bridge Pulso para o evento `whatsapp_click`.
- Politica de privacidade aprovada, com dados do controlador e mecanismo de reabrir preferencias.
- Enderecos completos e URL final/canonical.
