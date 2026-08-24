# Checklist de Entrega — Dr. Rodrigo Pires (v2)

Rodado sobre `previews/dr-rodrigo-pires.html` publicado no GitHub Pages, após incorporar material do site em produção `drrodrigopires.com.br` + processo completo de ícones.

## Estrategia

- [x] Promessa, prova e CTA definidos antes do layout (ver `wireframe-textual.md`).
- [x] A pagina responde as objecoes mapeadas no briefing (FAQ cobre 5 das 5 + 2 novas sobre medicina regenerativa e convenios).

## Copy e design

- [x] Primeiro viewport explica oferta, publico e proxima acao.
- [x] Provas sao reais (HBDF, Ceilandia EC, SBCJ, formacoes, 5 unidades, 30 convenios) e precedem os CTAs mais fortes.
- [x] Mapa visual preenchido com IDs de referencia e overrides justificados (ver `visual-map.md`).
- [x] Mobile revisado a 375px — CRM/RQE visiveis no primeiro viewport, foto do medico compondo abaixo do bloco de texto.
- [x] Contraste do texto branco sobre `--dark #17323a` verificado (WCAG AA).
- [x] **Foto profissional real** do medico no hero (extraida do site em producao, 683x1024) e foto real do consultorio na secao autoridade (400x500). Retrato do medico nao repetido — retrato duas vezes cansa e enfraquece o hero.

## Ícones (spec saude + repertorio-icones)

- [x] Cada icone de card foi renderizado e OLHADO a 32px antes de ser aprovado (contact sheet gerado, screenshots capturados).
- [x] Cada icone tem linha no `mapa-icones.md`, com o que o desenho mostra e a marcacao de conferido.
- [x] Nenhum icone repetido em dois cards da mesma pagina.
- [x] Card da pagina rodrigo-pires so usa arquivo de `assets/topic-icons/rodrigo-pires/`.
- [x] 6 icones bucket A, zero bucket B, zero bucket C.
- [x] Card sem icone literal ("Terapia por onda de choque") **removido** e consolidado em "Infiltracoes e bloqueios" — regra `docs/repertorio-icones.md` §"Sem icone literal em lugar nenhum".

## Desenvolvimento

- [x] `<html lang="pt-BR">`, `meta viewport`, `title` e `meta description` presentes.
- [x] FAQ usa `<details>` nativo (sem JS pesado).
- [x] Fontes com `preconnect` e `display=swap`.
- [x] SVGs de icones em 32x32 nativo, otimizados pela Iconify API (color inline).
- [x] Foto do medico em JPG 683x1024, `loading="eager"` no hero. Foto do consultorio real 400x500 na secao autoridade, `loading="lazy"`.
- [ ] **Eventos de conversao** — nao aplicavel no preview (sem GTM). Bloqueante para producao.
- [ ] **Performance com Lighthouse** — executado localmente em 2026-08-10. A otimizacao de imagens reduziu o peso total de 11,5 MB para 999 KiB, mas o LCP ainda marcou 3,4 s (meta: abaixo de 2,5 s). Continua bloqueante para producao. Ver `lighthouse-2026-08-10.md`.

## Spec saude.md

- [x] Identificacao profissional com CRM/RQE/TEOT visivel no primeiro viewport.
- [x] Nenhum trecho da copy contem promessa absoluta ("resolvo", "definitivo", "cura"), superlativo ("melhor", "unico") ou termo promocional. **Nao copiada** a frase "eliminar suas dores" do site em producao — vai contra a spec.
- [x] Sem antes/depois, sem foto de paciente, sem depoimento com resultado quantificado.
- [x] Cirurgia do Joelho apresentada como area de atuacao (SBCJ 2023), nao como especialidade RQE.
- [x] Intervencionismo da Dor e Medicina Esportiva apresentados como pos-graduacao, nao como especialidade.
- [x] Sem numeros ou claims tecnicos sem fonte.
- [x] Icones seguem `docs/repertorio-icones.md`: contact sheet gerado, revisado a 32px, arquivos organizados por regiao. Nenhum icone escolhido apenas por nome.
- [x] **Politica de privacidade** publicada e linkada no rodape. Conteudo deve permanecer sujeito a validacao do consultorio antes de campanhas.

## Spec google-ads.md

- [x] Titulo do hero coerente com o publico do anuncio (dor articular ortopedica em Brasilia).
- [x] CTA primario unico e visivel no primeiro viewport.
- [x] **Rodape sem telefone, WhatsApp direto ou canal fora do CTA rastreado.** Nenhum numero exposto em toda a pagina.
- [x] Todos os CTAs de WhatsApp apontam para `#agendar-bridge` (placeholder). Producao: bridge page real do Pulso (site atual usa `tintim.link/whatsapp/...`, LP nova deve usar bridge propria).
- [ ] **Consent Mode v2 + GTM** — container `GTM-P8G6999S`, estado default negado e banner com persistencia instalados. Falta validar as tags e os eventos no ambiente publicado com Tag Assistant; continua bloqueante para producao (ver `specs/google-ads.md`).
- [x] Preview esta com `noindex, follow` — apropriado para preview no GitHub Pages, deve ser removido em producao.

## Pendencias registradas em briefing.md (bloqueiam publicacao em Ads)

1. Enderecos completos das 5 unidades (CEP, sala, complemento).
2. URL da bridge Pulso para o CTA de WhatsApp.
3. Confirmacao da foto atual com o medico (ou versao mais recente).
4. Texto do anuncio Google Ads para confirmar message match.
5. Se ele tem casos ou depoimentos captaveis com consentimento.
6. Consent Mode v2 + GTM configurado (ver `politica-de-privacidade.html` do Gustavo como template).
7. WhatsApp da campanha — o site usa (61) 99461-9084 via Hudson; LP nova precisa numero/bridge propria do Pulso.

## Regra de saida

Preview v2 aprovado para validacao visual com o cliente. **Nao aprovado para publicacao em Ads** — precisa ao menos: enderecos completos, URL de bridge Pulso, politica de privacidade real, GTM + Consent Mode v2, remocao do `noindex`.

## O que mudou da v1 para a v2

| Item | v1 | v2 |
| --- | --- | --- |
| Foto do medico | placeholder decorativo | foto real (do site em producao) |
| Unidades | 3 (2 nomes + 1 placeholder) | 5 nomes reais (Clindor, CEHD Asa Sul, CEHD Jardim Botanico, Neurospine, JK Ortopedia) |
| Convenios | nao mencionados | secao propria com 30 convenios, positioning "servidor publico federal" |
| Icones nos cards | **decisao explicita de nao usar** (justificada como "v1 sem contact sheet") | 6 icones bucket A com contact sheet completo |
| Card "Segunda opiniao" | presente | substituido por "Medicina esportiva" (aproveita perfil real, ancora Ceilandia EC) |
| Card "Terapia onda de choque" | contemplado no wireframe original | removido explicitamente (bucket C forcado nao vale a pena; onda de choque agora esta na copy do card "Infiltracoes e bloqueios") |
| FAQ | 6 perguntas | 7 perguntas (nova sobre medicina regenerativa) |
| Copy tom | tecnico-sobrio | mantido tecnico-sobrio, **rejeitando** as promessas absolutas ("eliminar suas dores") do site em producao |
