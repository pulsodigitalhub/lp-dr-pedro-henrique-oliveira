# Briefing — Dr. Rodrigo Pires

Preenchido a partir do currículo, transcrição de call comercial e **site em produção** `drrodrigopires.com.br` (Drive: `1dnbIMeO99AlJ5fiKzqOqm_vvRbV2suOm`, iteração v2 em 2026-08-05).

## Contexto

- **Empresa ou profissional:** Dr. Rodrigo Nunes de Albuquerque Pires
- **Oferta principal:** Consulta ortopédica com foco em intervencionismo da dor (infiltrações, bloqueios, PRP, ondas de choque, ultrassonografia musculoesquelética) e avaliação para cirurgia do joelho
- **Objetivo da página:** Agendar consulta via WhatsApp; encher agenda das cinco unidades privadas
- **Tipo:** Google Ads
- **Fonte de tráfego:** Google Ads (Search principalmente, secundária Meta) — a definir com o time de tráfego do Pulso
- **Cidade/região:** Brasília – DF, com forte concentração em servidor público federal

## Público e decisão

- **Quem chega à página:** Adulto (30-65) com dor articular persistente (joelho, ombro, quadril, coluna), muitas vezes já em tratamento conservador sem alívio suficiente. Perfil predominante: servidor público federal com convênio (base de convênios do site foca em 30+ planos de servidor: SIS Senado, TRE/TRT/TST Saúde, Pró-Ser STJ, SERPRO, SAÚDE PETROBRAS, etc.).
- **Problema/desejo:** Aliviar dor que limita esporte, trabalho, sono e rotina, buscando alternativa entre "só remédio" e "cirurgia grande".
- **Nível de consciência:** Solução consciente; marca-inconsciente.
- **Objeções prováveis:**
  1. "Meu convênio é aceito?"
  2. "Onde fica a unidade mais próxima?"
  3. "Vão me empurrar cirurgia sem necessidade?"
  4. "Vai doer o procedimento?"
  5. "É bom mesmo em joelho / dor / esporte?"

## Posicionamento

- **Promessa central:** Avaliação ortopédica que separa o que precisa de cirurgia do que resolve com procedimento minimamente invasivo — decisão orientada pelo diagnóstico, não pelo padrão.
- **Diferenciais verificáveis:**
  - Cirurgião do joelho com título pela SBCJ (2023)
  - Pós-graduação em Medicina Intervencionista da Dor + Ultrassonografia Musculoesquelética (2025)
  - Ortopedista no Hospital de Base do DF (referência em trauma) desde 2022
  - Médico do Ceilândia Esporte Clube (departamento médico do futebol, desde 2025)
  - **Cobertura ampla para servidor público federal** (30+ convênios)
  - **Cinco unidades em Brasília** (Águas Claras, Asa Sul, Jardim Botânico, Neurospine, Taguatinga Norte)
  - TEOT 17060 + RQE 18477
- **Provas disponíveis:** Formação institucional (HFA, SBCJ, HBDF, Ceilândia EC), 5 unidades, 30+ convênios (visíveis no site), foto profissional em consultório (disponível). Depoimentos ainda não captados `[A VALIDAR]`
- **Restrições de compliance:**
  - CFM: RQE 18477 cobre Ortopedia e Traumatologia. Cirurgia do Joelho é **área de atuação** (SBCJ) — mencionar como tal, nunca como especialidade RQE.
  - "Medicina Intervencionista da Dor" e "Medicina Esportiva" são **pós-graduações lato sensu** — apresentar como "pós-graduação em" ou "atuação em", nunca "especialista em".
  - Sem promessa de resultado, sem antes/depois, sem comparação com colegas.
  - **Site atual usa frases como "eliminar suas dores", "movimente-se sem dor" e "restaurar seus movimentos"** — no limite ou além do que `specs/saude.md` permite. LP nova evita promessa absoluta.

## Conversão

- **CTA primário:** "Agendar avaliação pelo WhatsApp"
- **Destino do CTA:** WhatsApp via bridge page com evento de conversão (padrão Pulso).
  - Site atual usa `tintim.link/whatsapp/...` (bridge do Hudson, agência anterior).
  - LP nova deve usar a bridge do Pulso `[A VALIDAR — URL da bridge Pulso]`.
- **Campos obrigatórios do formulário:** N/A (WhatsApp-only, sem formulário próprio na LP)
- **Eventos de conversão esperados:** `whatsapp_click` no dataLayer + conversão no Google Ads via bridge `[A VALIDAR]`

## Ativos

- **Identidade visual:** Não tem identidade formalizada (site atual em WordPress+Elementor, tom soft-callout do Hudson). LP nova segue padrão da agência Pulso com identidade própria do médico (accent teal, tokens.css base).
- **Fotos/vídeos:** **Foto profissional disponível e usada** — extraída de `drrodrigopires.com.br/wp-content/uploads/2025/02/139A6248-683x1024.jpg` (retrato em consultório, 683x1024, plano médio). Baixada para `previews/img/dr-rodrigo-pires.jpg`.
- **Links de referência:** Site em produção `drrodrigopires.com.br`, LP do Dr. Gustavo Pimpão (colega, mesma clínica JK — identidade visual diferenciada intencionalmente).
- **Informações de contato:**
  - **WhatsApp do site atual (via Hudson):** (61) 99461-9084 — bridge `tintim.link`
  - **WhatsApp pessoal do CV:** (61) 98335-0316
  - Email: dr.rnapires@gmail.com — não expor na LP de Ads
  - Instagram: @dr.rodrigopiresortopedia
  - **Cinco unidades de atendimento (confirmadas no site):**
    - **Clindor Ortopedia** — Águas Claras — DF
    - **Clínica CEHD** — Asa Sul — DF
    - **Clínica CEHD** — Jardim Botânico — DF
    - **Neurospine Instituto de Neurocirurgia** — Brasília — DF
    - **JK Ortopedia** — em frente ao Shopping JK, Taguatinga Norte — DF
- **Convênios (obtidos do site, 30+ planos):**
  SIS Senado, TRE Saúde, TRT Saúde, TST Saúde, Pró-Ser STJ, Pró-Social TRF, Pró-Saúde TJDFT, Plan Assiste MPU, PLAS/JMU STM, Saúde Petrobras, Saúde Caixa, SERPRO, ASSEFAZ, BACEN, PF Saúde, GDF Saúde, GEAP, CASSI, CASEC, CASEMBRAPA, Care Plus, Fapes, Fascal, Embratel, Conab, Omint, Postal Saúde, Proasa, Unafisco, Gravia — foco em servidor público federal.

## Pendências `[A VALIDAR]`

1. **Endereços completos** de cada uma das 5 unidades (CEP, sala, complemento) — site atual não expõe.
2. **URL da bridge Pulso** para o CTA de WhatsApp (substituir o `tintim.link` atual).
3. **Confirmação com o Dr. Rodrigo:** foto profissional atual serve, ou tem versão mais recente?
4. Texto do anúncio Google Ads para confirmar message match do hero (o hero atual da LP puxa para "dor no joelho, ombro, quadril e coluna" — coerente com as patologias mais buscadas no site).
5. Se ele tem casos ou depoimentos que possam ser captados com consentimento.
6. Se o Consent Mode v2 + GTM entram na produção via repo do Pulso.
7. Se o WhatsApp exposto no site atual `(61) 99461-9084` continua sendo o canal comercial da LP nova, ou se o Pulso vai usar número dedicado da agência.

## O que mudou da v1 para a v2

- **v1 (antes):** 7 pendências, 3 unidades placeholder, sem foto (placeholder decorativo), sem convênios, sem ícones nos cards.
- **v2 (agora):** 7 pendências (composição diferente, focadas em endereços/tracking), 5 unidades reais (nomes confirmados), foto real do médico, 30 convênios listados (nova seção), 6 ícones nos cards (processo completo em `mapa-icones.md`), tom de copy mantido técnico-sóbrio (não copia a promessa absoluta do site atual).
