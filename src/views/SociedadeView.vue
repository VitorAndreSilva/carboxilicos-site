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
    titulo: "Origem natural e humana",
    texto:
      "Os ácidos carboxílicos podem ter origem natural ou antropogênica. O ácido fórmico (HCOOH), por exemplo, é encontrado naturalmente na atmosfera, enquanto a queima de combustíveis e de biomassa contribui para sua presença no ambiente.",
  },
  {
    titulo: "Atmosfera e acidez",
    texto:
      "Na atmosfera, esses compostos estão presentes no ar, na chuva, na neve, no gelo e em partículas. Podem representar 16% a 35% da acidez livre da chuva em áreas urbanas e cerca de 65% em áreas remotas, contribuindo para acidificação e corrosão de metais.",
  },
  {
    titulo: "Produção e resíduos",
    texto:
      "A produção tradicional depende da indústria petroquímica, mas alternativas que utilizam resíduos agroindustriais e matérias-primas renováveis vêm sendo estudadas para reduzir impactos ambientais e a dependência do petróleo.",
  },
  {
    titulo: "Química verde",
    texto:
      "Processos biológicos, como a produção por digestão anaeróbia de resíduos orgânicos, aproveitam descartes e utilizam recursos renováveis de baixo custo, aproximando a produção dos princípios da química verde.",
  },
];

const cadeia = [
  { pass: "Matéria-prima", d: "petróleo, gás natural, cana-de-açúcar, milho, óleos vegetais e resíduos agroindustriais" },
  { pass: "Transformação", d: "síntese química, oxidação de compostos orgânicos ou fermentação por microrganismos" },
  { pass: "Purificação", d: "separação, concentração e obtenção do ácido com o grau de pureza necessário" },
  { pass: "Processamento", d: "transformação e preparação para diferentes setores da indústria" },
  { pass: "Consumo", d: "alimentos, medicamentos, cosméticos, plásticos, tintas, sabões, têxteis e agricultura" },
  { pass: "Pós-consumo", d: "tratamento de efluentes, reciclagem, reaproveitamento ou biodegradação" },
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
    produto: "Ácidos carboxílicos",
    dado: "US$ 17,3 bi (2025) → US$ 27,1 bi (2035)",
    lider: "América do Norte e Ásia-Pacífico",
    players: "BASF, Celanese, Dow, Eastman",
  },
  {
    produto: "Mercado global",
    dado: "Crescimento de 4,59% ao ano",
    lider: "Ásia-Pacífico em expansão",
    players: "Sasol, INEOS, LG Chem, Arkema",
  },
  {
    produto: "Produção química",
    dado: "Mercado internacional em expansão",
    lider: "Forte presença industrial na Ásia",
    players: "ExxonMobil, LyondellBasell, Evonik",
  },
  {
    produto: "Ácidos de base biológica",
    dado: "Segmento em crescimento",
    lider: "Europa e Ásia-Pacífico",
    players: "Empresas químicas e biotecnológicas",
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
      lead="Presentes na natureza e no cotidiano, os ácidos carboxílicos contribuem para a alimentação, saúde e qualidade de vida. Podem ajudar na segurança e conservação dos alimentos, mas seu uso exige controle, pois concentrações inadequadas e exposições incorretas podem trazer riscos."
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
              Do ciclo natural à
              <span class="grad-text">ação humana</span>
            </h2>
            <p class="lead">
              O impacto ambiental dos ácidos carboxílicos depende de sua
              <strong>origem</strong>, <strong>concentração</strong>,
              quantidade liberada e destino no ambiente. Eles participam de
              processos naturais, mas também são emitidos por atividades humanas.
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
              <strong>Conclusão:</strong> os impactos ambientais dos ácidos
              carboxílicos dependem de todo o seu ciclo de vida. O uso de fontes
              renováveis, o tratamento adequado de resíduos e a redução de
              emissões são caminhos para tornar sua produção e utilização mais
              segura e sustentável.
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
              Dos recursos naturais à indústria, os ácidos carboxílicos passam
              por diferentes etapas até chegarem aos produtos consumidos pela
              sociedade.
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
              O mercado global de ácidos carboxílicos foi estimado em US$ 17,3
              bilhões em 2025 e pode chegar a US$ 27,1 bilhões até 2035. A
              Ásia-Pacífico se destaca pelo crescimento acelerado, enquanto
              América do Norte e Europa permanecem importantes mercados
              consumidores.
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
              <p class="panel-label">Um mercado mundial</p>
              <div class="chips-row">
                <span v-for="s in setores" :key="s" class="chip">{{ s }}</span>
              </div>
              <p class="small" style="margin-top: 0.9rem">
                A produção e o consumo de ácidos carboxílicos estão distribuídos
                internacionalmente. Empresas de diferentes países participam
                dessa cadeia, conectando produção química, comércio, indústria e
                consumidores.
              </p>
            </div>
          </Reveal>
          <Reveal :delay="160">
            <div class="card">
              <p class="panel-label">E o Brasil?</p>
              <p class="small" style="margin: 0 0 0.7rem">
                O Brasil também participa desse mercado global. Em 2024, foram
                importadas cerca de <strong>56 mil toneladas</strong> de ácidos
                carboxílicos, movimentando aproximadamente
                <strong>US$ 237 milhões</strong>.
              </p>
              <ul class="clean tick">
                <li><strong>China</strong> → 50% do volume importado</li>
                <li><strong>Índia</strong> → 2º maior fornecedor</li>
                <li><strong>Estados Unidos</strong> → 3º maior fornecedor</li>
              </ul>
              <p class="small" style="margin-top: 0.7rem">
                Os dados mostram como o mercado brasileiro está conectado ao
                comércio internacional, com parte da demanda nacional sendo
                atendida por fornecedores estrangeiros.
              </p>
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
