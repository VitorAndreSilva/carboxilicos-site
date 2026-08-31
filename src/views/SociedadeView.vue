<script setup>
import PageHero from "../components/PageHero.vue";
import Reveal from "../components/Reveal.vue";

const setores = [
  "América do Norte",
  "Europa",
  "Ásia-Pacífico",
  "Oriente Médio & África",
  "América Latina",
];

const impacto = [
  {
    titulo: "Natural ≠ inócuo",
    texto:
      "Ser “natural” não torna uma substância inofensiva: ácido de frutas em alta dose (ex.: oxálico) é tóxico. O efeito depende da substância, da concentração, da quantidade, da exposição e do organismo afetado.",
  },
  {
    titulo: "Oxigênio nos rios",
    texto:
      "Lançamentos de ácidos orgânicos elevam a demanda bioquímica de oxigênio (DBO): a degradação microbiana consome O₂ dissolvido e pode sufocar ecossistemas aquáticos — problema típico de efluentes alimentícios.",
  },
  {
    titulo: "pH e ecossistemas",
    texto:
      "Acidificação local de corpos d’água altera a vida aquática. Mesmo em baixas concentrações, descarte contínuo muda o equilíbrio — daí o controle de efluentes industriais.",
  },
  {
    titulo: "O ciclo de vida importa",
    texto:
      "PLA e PET são ácidos “aplicados” (polilático e tereftálico): o plástico biodegradável (PLA) só degrada em condições adequadas, e o PET é reciclável — a história do resíduo é parte do impacto.",
  },
];

const cadeia = [
  { pass: "Matéria-prima", d: "biomassa, açúcar, petróleo, gás natural" },
  { pass: "Transformação", d: "fermentação microbiana ou rota química" },
  { pass: "Purificação", d: "refino, grau alimentício/farmacêutico" },
  { pass: "Formulação", d: "acidulantes, conservantes, polímeros, sais" },
  { pass: "Consumo", d: "alimentos, medicamentos, cosméticos, limpeza" },
  { pass: "Resíduo", d: "efluente tratado, reciclagem, biodegradação" },
];

const leis = [
  {
    org: "ANVISA",
    norma: "RDC 778/2023 + IN 211/2023",
    oque: "Listas positivas e limites máximos de aditivos alimentares (acidulantes e conservantes como benzóico, sórbico, cítrico).",
  },
  {
    org: "Mercosul",
    norma: "GMC/RES 52/98",
    oque: "Harmonização dos critérios de aditivos entre os países do bloco; base técnica nas referências internacionais.",
  },
  {
    org: "Codex Alimentarius (FAO/OMS)",
    norma: "Padrões globais de alimentos",
    oque: "Referência para fixação de limites e Ingestão Diária Aceitável (IDA) de aditivos.",
  },
  {
    org: "Segurança química",
    norma: "NR 26 · ABNT NBR 14725",
    oque: "GHS: classificação, rótulos e Ficha com Dados de Segurança (FDS) para produtos químicos no trabalho e no transporte.",
  },
  {
    org: "Biodiesel & renováveis",
    norma: "Lei 11.097/2005 · RenovaBio (13.576/2017)",
    oque: "Mistura obrigatória do biodiesel (ésteres de ácidos graxos) ao diesel e metas de descarbonização da matriz.",
  },
  {
    org: "Resíduos e ambiente",
    norma: "Lei 9.605/1998 · Lei 12.305/2010",
    oque: "Crimes ambientais e Política Nacional de Resíduos Sólidos — enquadram descartes irregulares de efluentes e plásticos.",
  },
];

const tratados = [
  {
    nome: "Convenção de Basileia",
    foco: "Movimentação e destinação de resíduos perigosos",
    sobre:
      "Evita que resíduos químicos sejam descartados em países sem controle.",
  },
  {
    nome: "Convenção de Roterdã",
    foco: "Consentimento prévio informado (PIC)",
    sobre:
      "Países consentem, de forma informada, exportações de químicos perigosos.",
  },
  {
    nome: "Convenção de Estocolmo",
    foco: "Poluentes orgânicos persistentes (POPs)",
    sobre: "Redução e banimento de substâncias persistentes no ambiente.",
  },
  {
    nome: "Convenções da OIT (170 · 174)",
    foco: "Segurança química no trabalho",
    sobre: "Classificação de perigos, rotulagem e proteção dos trabalhadores.",
  },
  {
    nome: "GHS da ONU",
    foco: "Classificação e rotulagem global",
    sobre:
      "Sistema Globalmente Harmonizado, adotado no Brasil via NR 26/NBR 14725.",
  },
  {
    nome: "Agenda 2030 · ODS",
    foco: "ODS 12, 13 e 14",
    sobre: "Consumo e produção responsáveis, ação climática e vida na água.",
  },
];

const mercado = [
  {
    produto: "Ácido acético",
    dado: "US$ 18 bi (2025) · ~21 Mt/ano",
    lider: "Ásia-Pacífico (~57%)",
    players: "Celanese, BP, LyondellBasell, Daicel",
  },
  {
    produto: "Ácido cítrico",
    dado: "US$ 2,5–2,9 bi · 70% para alimentos",
    lider: "China (~55% da capacidade)",
    players: "RZBC, TTCA, ADM, Jungbunzlauer",
  },
  {
    produto: "Ácido lático / PLA",
    dado: "Bioeconomia em alta",
    lider: "Europa e Ásia-Pacífico",
    players: "NatureWorks, TotalEnergies-Corbion",
  },
  {
    produto: "Ácidos graxos",
    dado: "Base de sabões, cosméticos e biodiesel",
    lider: "Mundo inteiro (deixa a agricultura global)",
    players: "Integradores de óleos e gorduras",
  },
];

const biomassaBrasil = [
  "Cana-de-açúcar",
  "Milho",
  "Soja",
  "Resíduos agrícolas",
  "Óleos vegetais",
];

const desafiosBrasil = [
  "Necessidade de investimentos em pesquisa",
  "Desenvolvimento de tecnologias nacionais",
  "Infraestrutura industrial",
  "Competição internacional",
  "Custos logísticos",
  "Necessidade de fiscalização ambiental",
];

const controlesIndustriais = [
  "Efluentes líquidos",
  "Emissões atmosféricas",
  "Resíduos perigosos",
  "Armazenamento de produtos químicos",
];

const odsAgenda = [
  { n: "ODS 3", t: "Saúde e Bem-Estar" },
  { n: "ODS 9", t: "Indústria, Inovação e Infraestrutura" },
  { n: "ODS 12", t: "Consumo e Produção Responsáveis" },
  { n: "ODS 13", t: "Ação Contra a Mudança Global do Clima" },
];

const acordoParisPontos = [
  "Redução das emissões de gases do efeito estufa",
  "Utilização de fontes renováveis",
  "Desenvolvimento de tecnologias sustentáveis",
  "Diminuição da dependência de combustíveis fósseis",
];

const quimicaVerdeTendencias = [
  "Fermentação",
  "Aproveitamento de resíduos agrícolas",
  "Utilização de biomassa",
  "Biotecnologia",
  "Economia circular",
];
</script>

<template>
  <div class="page">
    <PageHero
      eixo="Eixo 05 · 05/05"
      kicker="Química com contexto"
      title="Sociedade · Ambiente · Cadeias & Comércio"
      lead="Vinagre pode ser natural e ainda assim agredir um rio em excesso. Ácido cítrico move bilhões de dólares e depende de cadeias globais. Leis, tratados e metas de descarbonização enquadram essa química — do Brasil ao mundo."
      :chips="[
        'Impacto ambiental',
        'Cadeia produtiva',
        'ANVISA',
        'GHS',
        'Convenções BRS',
        'Brasil × mundo',
      ]"
    >
      <template #media>
        <div class="panel donut-wrap">
          <p class="panel-label" style="justify-content: center">
            capacidade global de ácido cítrico (≈)
          </p>
          <div class="donut-row">
            <svg
              viewBox="0 0 100 100"
              class="donut"
              role="img"
              aria-label="Gráfico de rosquinha da capacidade global de ácido cítrico"
            >
              <g transform="rotate(-90 50 50)">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(150,165,190,0.1)"
                  stroke-width="16"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#ffc857"
                  stroke-width="16"
                  stroke-dasharray="138.2 251.3"
                  stroke-dashoffset="0"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#6fb2ff"
                  stroke-width="16"
                  stroke-dasharray="47.8 251.3"
                  stroke-dashoffset="-138.2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#6cf2b0"
                  stroke-width="16"
                  stroke-dasharray="40.2 251.3"
                  stroke-dashoffset="-186"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#8b99b0"
                  stroke-width="16"
                  stroke-dasharray="25.1 251.3"
                  stroke-dashoffset="-226.2"
                />
              </g>
              <text
                x="50"
                y="54"
                text-anchor="middle"
                font-size="13"
                font-family="'IBM Plex Mono', monospace"
                font-weight="600"
                fill="var(--text)"
              >
                55%
              </text>
              <text
                x="50"
                y="66"
                text-anchor="middle"
                font-size="7"
                font-family="'IBM Plex Mono', monospace"
                fill="#8b99b0"
              >
                CHINA
              </text>
            </svg>
            <ul class="clean legend">
              <li>
                <i class="lg" style="background: #ffc857"></i> China — ≈55%
              </li>
              <li>
                <i class="lg" style="background: #6fb2ff"></i> Europa — ≈19%
                (demanda)
              </li>
              <li>
                <i class="lg" style="background: #6cf2b0"></i> América do Norte
                — ≈16%
              </li>
              <li>
                <i class="lg" style="background: #8b99b0"></i> Demais regiões —
                ≈10%
              </li>
            </ul>
          </div>
          <p class="caption">
            <b>Concentração da oferta</b> — produção dominada pela China;
            demanda pulverizada.
          </p>
        </div>
      </template>
    </PageHero>

    <!-- AMBIENTE -->
    <section class="section">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Impactos ambientais</p>
            <h2>
              “É natural, logo é inofensivo”?
              <span class="grad-text">Cuidado.</span>
            </h2>
            <p class="lead">
              O impacto de um ácido carboxílico no ambiente depende de
              <strong>qual</strong> é, da <strong>concentração</strong>, da
              quantidade liberada, do tempo de exposição, do organismo afetado e
              da capacidade de degradação. Contexto é tudo — “a dose faz o
              veneno”.
            </p>
          </div>
        </Reveal>

        <div class="grid grid-4">
          <Reveal v-for="(im, i) in impacto" :key="im.titulo" :delay="i * 80">
            <div class="card">
              <h3 style="font-size: 1.05rem">{{ im.titulo }}</h3>
              <p class="small" style="margin: 0">{{ im.texto }}</p>
            </div>
          </Reveal>
        </div>

        <Reveal :delay="140">
          <div class="panel card-amber" style="margin-top: 2rem">
            <p style="margin: 0">
              <strong>Contra-exemplo de sala:</strong> o espinafre contém ácido
              oxálico (HOOC–COOH) — “natural”, presente em legumes — e ainda
              assim, em excesso, precipita oxalato de cálcio e pode contribuir
              para cálculos renais. Da mesma forma, um composto sintético pode
              ser seguro nas condições controladas de uma fábrica. A avaliação é
              sempre <em>caso a caso</em>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- CADEIA PRODUTIVA -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Da matéria-prima ao consumidor</p>
            <h2>
              A cadeia produtiva <span class="grad-text">em seis elos</span>
            </h2>
            <p class="lead">
              Ácidos carboxílicos conectam agricultura, biotecnologia, indústria
              química e a mesa do consumidor — terminando em efluentes,
              reciclagem ou biodegradação.
            </p>
          </div>
        </Reveal>

        <div class="chain chain-6">
          <template v-for="(c, i) in cadeia" :key="c.pass">
            <Reveal :delay="i * 70" class="chain-step cadeia-step">
              <small>{{ i + 1 }}</small>
              {{ c.pass }}
              <span class="chip" style="display: block; margin-top: 0.5rem">{{
                c.d
              }}</span>
            </Reveal>
            <span v-if="i < cadeia.length - 1" class="chain-arrow">→</span>
          </template>
        </div>
      </div>
    </section>

    <!-- MERCADO GLOBAL -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Comércio global</p>
            <h2>Números que <span class="grad-text">impressionam</span></h2>
            <p class="lead">
              A Ásia-Pacífico domina a oferta; Europa e América do Norte puxam a
              demanda. A China é o maior exportador mundial de ácido cítrico
              (mais de US$ 1 bilhão anuais em exportações, segundo a OEC).
            </p>
          </div>
        </Reveal>

        <div class="table-wrap">
          <Reveal>
            <table class="tbl">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Escala / mercado</th>
                  <th>Liderança regional</th>
                  <th>Alguns players</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="m in mercado" :key="m.produto">
                  <td>
                    <strong>{{ m.produto }}</strong>
                  </td>
                  <td>{{ m.dado }}</td>
                  <td>{{ m.lider }}</td>
                  <td>{{ m.players }}</td>
                </tr>
              </tbody>
            </table>
          </Reveal>
        </div>

        <div class="grid grid-2" style="margin-top: 1.6rem">
          <Reveal :delay="80">
            <div class="card">
              <p class="panel-label">Setores consumidores</p>
              <div class="chips-row">
                <span v-for="s in setores" :key="s" class="chip">{{ s }}</span>
              </div>
              <p class="small" style="margin-top: 0.9rem">
                Todos os continentes compram e vendem ácidos carboxílicos —
                alimentos processados, bebidas, detergentes, fármacos e
                polímeros movimentam o comércio.
              </p>
            </div>
          </Reveal>
          <Reveal :delay="160">
            <div class="card">
              <p class="panel-label">E o Brasil?</p>
              <ul class="clean tick">
                <li>
                  Demanda atendida em parte por <strong>importações</strong> de
                  ácido cítrico.
                </li>
                <li>
                  Trunfo renovável: <strong>etanol de cana</strong> como rota
                  bio para o ácido acético.
                </li>
                <li>
                  <strong>Biodiesel de soja</strong>: ésteres de ácidos graxos
                  na matriz nacional (Lei 11.097/05; RenovaBio).
                </li>
                <li>
                  Agroindústria e química fina geram
                  <strong>emprego e renda</strong> na cadeia.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- BRASIL: POTENCIAL E DESAFIOS -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Potencial nacional</p>
            <h2>
              Brasil: <span class="grad-text">biomassa como vantagem</span>
            </h2>
            <p class="lead">
              O Brasil reúne condições favoráveis para a produção de ácidos
              carboxílicos de origem renovável, graças à grande disponibilidade
              de biomassa agrícola — da cana-de-açúcar aos resíduos do campo.
            </p>
          </div>
        </Reveal>

        <div class="grid grid-2" style="align-items: start">
          <Reveal :delay="80">
            <div class="card">
              <p class="panel-label">Biomassa disponível</p>
              <div class="chips-row">
                <span v-for="b in biomassaBrasil" :key="b" class="chip">{{
                  b
                }}</span>
              </div>
              <p class="small" style="margin-top: 0.9rem">
                A cana-de-açúcar, por exemplo, fornece açúcares que alimentam
                processos de fermentação usados na produção de compostos
                químicos.
              </p>
            </div>
          </Reveal>
          <Reveal :delay="160">
            <div class="card">
              <p class="panel-label">Indústria e bioeconomia</p>
              <p class="small" style="margin: 0 0 0.7rem">
                O país já conta com indústrias química e alimentícia relevantes,
                consumidoras de ácidos carboxílicos e seus derivados. A aposta
                agora é a <strong>bioeconomia</strong>: transformar recursos
                biológicos em produtos industriais de maior valor agregado.
              </p>
              <p class="small" style="margin: 0">
                É um setor com potencial de crescimento, conectando agricultura,
                biotecnologia e indústria em uma só cadeia.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal :delay="220">
          <div class="panel card-amber" style="margin-top: 1.6rem">
            <p class="panel-label" style="margin-bottom: 0.6rem">
              Desafios brasileiros
            </p>
            <ul class="clean tick" style="columns: 2; column-gap: 2rem">
              <li v-for="d in desafiosBrasil" :key="d">{{ d }}</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- LEIS AMBIENTAIS NO BRASIL -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Regulação nacional</p>
            <h2>
              Leis e regulamentações
              <span class="grad-text">ambientais no Brasil</span>
            </h2>
            <p class="lead">
              A produção e o descarte de substâncias químicas no Brasil devem
              obedecer à legislação ambiental, que impõe controle sobre
              poluição, resíduos e o uso de recursos.
            </p>
          </div>
        </Reveal>

        <div class="grid grid-2">
          <Reveal :delay="80">
            <div class="card">
              <h3 style="font-size: 1.05rem">
                Política Nacional do Meio Ambiente
              </h3>
              <p class="small" style="margin: 0">
                Estabelece mecanismos para proteção ambiental e controle da
                poluição causada por atividades industriais.
              </p>
            </div>
          </Reveal>
          <Reveal :delay="160">
            <div class="card">
              <h3 style="font-size: 1.05rem">
                Política Nacional de Resíduos Sólidos
              </h3>
              <p class="small" style="margin: 0">
                Determina princípios relacionados ao gerenciamento e descarte
                adequado de resíduos, incentivando a redução, reutilização e
                reciclagem.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal :delay="220">
          <div class="panel" style="margin-top: 1.6rem">
            <p class="panel-label">
              Para indústrias químicas, é fundamental controlar
            </p>
            <div class="chips-row">
              <span
                v-for="c in controlesIndustriais"
                :key="c"
                class="chip chip-amber"
                >{{ c }}</span
              >
            </div>
            <p class="small" style="margin-top: 0.9rem">
              Dependendo da atividade industrial, empresas podem precisar de
              licenciamento ambiental e ficam sujeitas à fiscalização de órgãos
              ambientais.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- ACORDOS INTERNACIONAIS -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Compromissos internacionais</p>
            <h2>
              Acordos e tratados <span class="grad-text">internacionais</span>
            </h2>
            <p class="lead">
              Não existe um tratado internacional específico para os ácidos
              carboxílicos, mas sua produção e utilização dialogam com diversos
              acordos globais sobre meio ambiente, clima e substâncias químicas.
            </p>
          </div>
        </Reveal>

        <div class="grid grid-4">
          <Reveal v-for="(o, i) in odsAgenda" :key="o.n" :delay="i * 80">
            <div class="card" style="text-align: center">
              <span class="chip chip-amber" style="display: inline-block">{{
                o.n
              }}</span>
              <p class="small" style="margin: 0.6rem 0 0">{{ o.t }}</p>
            </div>
          </Reveal>
        </div>

        <Reveal :delay="180">
          <div class="panel card-amber" style="margin-top: 1.6rem">
            <p class="panel-label">Acordo de Paris</p>
            <p class="small" style="margin: 0 0 0.7rem">
              Embora não trate especificamente dos ácidos carboxílicos, o Acordo
              de Paris influencia indiretamente a indústria química ao
              incentivar:
            </p>
            <ul class="clean tick">
              <li v-for="p in acordoParisPontos" :key="p">{{ p }}</li>
            </ul>
            <p class="small" style="margin-top: 0.7rem">
              Isso favorece pesquisas voltadas à produção de compostos químicos
              a partir da biomassa, em vez de exclusivamente a partir do
              petróleo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- QUÍMICA VERDE E O FUTURO -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Tendências</p>
            <h2>Química verde <span class="grad-text">e o futuro</span></h2>
            <p class="lead">
              A Química Verde busca desenvolver produtos e processos que reduzam
              ou eliminem substâncias perigosas — e os ácidos carboxílicos estão
              no centro dessa transição.
            </p>
          </div>
        </Reveal>

        <div class="chain chain-6">
          <template v-for="(t, i) in quimicaVerdeTendencias" :key="t">
            <Reveal :delay="i * 70" class="chain-step cadeia-step">
              <small>{{ i + 1 }}</small>
              {{ t }}
            </Reveal>
            <span
              v-if="i < quimicaVerdeTendencias.length - 1"
              class="chain-arrow"
              >→</span
            >
          </template>
        </div>

        <Reveal :delay="220">
          <div class="panel" style="margin-top: 1.6rem">
            <p style="margin: 0">
              <strong>Exemplo promissor:</strong> aproveitar resíduos da
              agricultura para produzir compostos químicos de valor comercial —
              fechando o ciclo entre campo, indústria e consumo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.donut-wrap {
  width: 100%;
  max-width: 430px;
  margin-inline: auto;
}

.donut-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.donut {
  width: 150px;
  flex: 0 0 150px;
  filter: drop-shadow(0 10px 30px rgba(255, 168, 46, 0.15));
}

.legend {
  margin: 0;
  font-size: 0.8rem;
}

.legend li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
  color: var(--text-soft);
}

.lg {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  flex: 0 0 10px;
}

.caption {
  font-size: 0.8rem;
  color: var(--muted);
  text-align: center;
  margin-top: 0.8rem;
}

.chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.lei-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
}

.chain-6 {
  align-items: stretch;
}

.cadeia-step {
  font-size: 0.98rem;
  padding: 0.9rem 1rem;
  min-width: 130px;
}

.nav-prev-next {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.8rem;
}
</style>
