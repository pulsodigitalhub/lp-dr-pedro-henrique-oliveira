# Landing Page — Dr. Pedro Henrique Oliveira

Landing page do Dr. Pedro Henrique Oliveira, com atendimento em ortopedia e medicina da dor em Brasília.

## Publicação

Todo push para `main` publica automaticamente a prévia no GitHub Pages. A página principal está em `index.html` e os ativos ficam em `img/` e `assets/`.

## Sitemap — pendente

`sitemap.xml` foi removido em 19/08/2026: o arquivo estava com as 19 URLs apontando pra `lp.drrodrigopires.com.br` (domínio real de outro cliente), resquício de ter copiado o repo do Dr. Rodrigo Pires como template. `scripts/generate-sitemap.mjs` e `sitemap.xsl` continuam no repo, prontos pra uso — rodar `SITEMAP_BASE_URL=https://<dominio-real> node scripts/generate-sitemap.mjs` assim que o domínio de produção do Dr. Pedro for confirmado (nunca assumir pelo domínio `*.vercel.app`).
