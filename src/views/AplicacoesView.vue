<script setup>
import { computed, ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import ApplicationLogicExplorer from '../components/ApplicationLogicExplorer.vue'
import ApplicationPhSimulator from '../components/ApplicationPhSimulator.vue'
import CarboxylDerivativeMap from '../components/CarboxylDerivativeMap.vue'
import DailyLifeMap from '../components/DailyLifeMap.vue'
import MoleculeComparator from '../components/MoleculeComparator.vue'
import MoleculeShowcase from '../components/MoleculeShowcase.vue'
import PlasmaMembrane3D from '../components/PlasmaMembrane3D.vue'
import ReactionProcessExplorer from '../components/ReactionProcessExplorer.vue'
import Reveal from '../components/Reveal.vue'
import lacticAcid from '../data/lacticAcid'

const activeFilter = ref('Todos')
const filters = ['Todos', 'Natureza', 'Alimentos', 'Indústria', 'Biologia']

function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const acids = [
  {
    nome: 'Ácido fórmico',
    categories: ['Natureza', 'Indústria'],
    detailsRoute: '/aplicacoes/acido-formico',
    iupac: 'ácido metanoico',
    formula: 'HCOOH',
    has3d: true,
    moleculePath: 'molecules/formic-acid.sdf',
    atomCounts: { C: 1, O: 2, H: 2 },
    comparePka: '3,75', solubility: 'Muito alta', polarRegion: 'Carboxila domina',
    onde: 'Defesa química de algumas formigas; processos industriais',
    usos: ['Tanagem de couro', 'Conservante de ração', 'Desincrustante industrial'],
    propertyLink: 'Acidez e pequeno tamanho molecular favorecem controle de pH e reatividade.',
    view: '0 0 120 95',
    scale: 1,
    atoms: [
      { x: 20, y: 45, el: 'H' },
      { x: 52, y: 45, el: 'C' },
      { x: 82, y: 25, el: 'O' },
      { x: 78, y: 68, el: 'O' },
      { x: 95, y: 80, el: 'H' },
    ],
    bonds: [
      [0, 1],
      [1, 2, 2],
      [1, 3],
      [3, 4],
    ],
  },
  {
    nome: 'Ácido acético',
    categories: ['Alimentos', 'Indústria'],
    detailsRoute: '/aplicacoes/acido-acetico',
    iupac: 'ácido etanoico',
    formula: 'CH₃COOH',
    has3d: true,
    moleculePath: 'molecules/acetic-acid.sdf',
    atomCounts: { C: 2, O: 2, H: 4 },
    comparePka: '4,76', solubility: 'Miscível', polarRegion: 'Carboxila + cadeia curta',
    onde: 'Principal responsável pela acidez característica do vinagre',
    usos: ['Condimento e conservante', 'Produção de acetato de vinila', 'Solvente e reagente'],
    propertyLink: 'Acidez, miscibilidade e formação de acetatos e ésteres explicam esses usos.',
    view: '0 0 130 95',
    scale: 0.95,
    atoms: [
      { x: 8, y: 45, el: 'H' },
      { x: 28, y: 45, el: 'C' },
      { x: 28, y: 22, el: 'H' },
      { x: 28, y: 68, el: 'H' },
      { x: 72, y: 45, el: 'C' },
      { x: 100, y: 26, el: 'O' },
      { x: 96, y: 70, el: 'O' },
      { x: 112, y: 82, el: 'H' },
    ],
    bonds: [
      [0, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [4, 5, 2],
      [4, 6],
      [6, 7],
    ],
  },
  {
    nome: 'Ácido cítrico',
    categories: ['Natureza', 'Alimentos', 'Biologia'],
    detailsRoute: '/aplicacoes/acido-citrico',
    iupac: '2-hidroxipropano-1,2,3-tricarboxílico',
    formula: 'C₆H₈O₇',
    has3d: true,
    moleculePath: 'molecules/citric-acid.sdf',
    atomCounts: { C: 6, O: 7, H: 8 },
    comparePka: '3,13 / 4,76 / 6,40', solubility: 'Alta', polarRegion: '3 carboxilas + hidroxila',
    onde: 'Frutas cítricas: limão, laranja, tangerina',
    usos: ['Acidulante INS 330 (bebidas, balas)', 'Agente quelante (detergentes)', 'Comprimidos efervescentes'],
    propertyLink: 'Três carboxilas permitem controle de pH e complexação de íons metálicos.',
    view: '0 0 260 170',
    scale: 0.95,
    atoms: [
      { x: 130, y: 90, el: 'C' },
      { x: 130, y: 58, el: 'O' },
      { x: 138, y: 42, el: 'H' },
      { x: 82, y: 52, el: 'C' },
      { x: 48, y: 44, el: 'C' },
      { x: 24, y: 30, el: 'O' },
      { x: 38, y: 70, el: 'O' },
      { x: 28, y: 86, el: 'H' },
      { x: 178, y: 52, el: 'C' },
      { x: 212, y: 44, el: 'C' },
      { x: 236, y: 30, el: 'O' },
      { x: 222, y: 70, el: 'O' },
      { x: 232, y: 86, el: 'H' },
      { x: 130, y: 128, el: 'C' },
      { x: 114, y: 152, el: 'O' },
      { x: 150, y: 152, el: 'O' },
      { x: 170, y: 164, el: 'H' },
    ],
    bonds: [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 4],
      [4, 5, 2],
      [4, 6],
      [6, 7],
      [0, 8],
      [8, 9],
      [9, 10, 2],
      [9, 11],
      [11, 12],
      [0, 13],
      [13, 14, 2],
      [13, 15],
      [15, 16],
    ],
  },
  { ...lacticAcid, categories: ['Alimentos', 'Biologia', 'Indústria'], comparePka: '3,86', solubility: 'Muito alta', polarRegion: 'Carboxila + hidroxila', propertyLink: 'Acidez, hidroxila e capacidade de polimerização conectam fermentação, cosméticos e PLA.' },
  {
    nome: 'Ácido benzóico',
    categories: ['Alimentos', 'Indústria'],
    detailsRoute: '/aplicacoes/acido-benzoico',
    iupac: 'ácido benzenocarboxílico',
    formula: 'C₆H₅COOH',
    has3d: true,
    moleculePath: 'molecules/benzoic-acid.sdf',
    atomCounts: { C: 7, O: 2, H: 6 },
    comparePka: '4,20', solubility: 'Baixa', polarRegion: 'Carboxila + anel apolar',
    onde: 'Aromático; conservante de alimentos',
    usos: ['Conservante INS 210 (refrigerantes, molhos)', 'Síntese de fármacos e aromas', 'Intermediário químico'],
    propertyLink: 'O equilíbrio ácido–benzoato e o anel aromático controlam solubilidade e ação em meios ácidos.',
    view: '0 0 195 135',
    scale: 0.9,
    atoms: [
      { x: 80, y: 32, el: 'C' },
      { x: 80, y: 11, el: 'H' },
      { x: 108.6, y: 48.5, el: 'C' },
      { x: 135, y: 63, el: 'C' },
      { x: 150, y: 47, el: 'O' },
      { x: 150, y: 79, el: 'O' },
      { x: 164, y: 90, el: 'H' },
      { x: 108.6, y: 81.5, el: 'C' },
      { x: 124, y: 90, el: 'H' },
      { x: 80, y: 98, el: 'C' },
      { x: 80, y: 116, el: 'H' },
      { x: 51.4, y: 81.5, el: 'C' },
      { x: 36, y: 90, el: 'H' },
      { x: 51.4, y: 48.5, el: 'C' },
      { x: 36, y: 38, el: 'H' },
    ],
    bonds: [
      [0, 2, 2],
      [2, 7],
      [7, 9, 2],
      [9, 11],
      [11, 13, 2],
      [13, 0],
      [0, 1],
      [2, 3],
      [3, 4, 2],
      [3, 5],
      [5, 6],
      [7, 8],
      [9, 10],
      [11, 12],
      [13, 14],
    ],
  },
  {
    nome: 'Ácidos graxos',
    categories: ['Biologia', 'Indústria'],
    detailsRoute: '/aplicacoes/acido-palmitico',
    iupac: 'cadeias longas R-COOH',
    formula: 'CH₃(CH₂)ₙCOOH',
    has3d: true,
    moleculePath: 'molecules/palmitic-acid.sdf',
    modelName3d: 'Representante: ácido palmítico',
    formula3d: 'C₁₆H₃₂O₂',
    atomCounts: { C: 16, O: 2, H: 32 },
    comparePka: '≈ 4,8', solubility: 'Muito baixa', polarRegion: 'Cauda apolar domina',
    onde: 'Lipídios, óleos, gorduras, membranas',
    usos: ['Sabões (saponificação)', 'Biodiesel (ésteres)', 'Membranas celulares'],
    propertyLink: 'A cabeça carboxílica e a longa cauda apolar permitem formar sais, ésteres e lipídios.',
    view: '0 0 270 110',
    scale: 0.9,
    atoms: [
      { x: 28, y: 60, el: 'C' },
      { x: 48, y: 42, el: 'O' },
      { x: 46, y: 78, el: 'O' },
      { x: 60, y: 90, el: 'H' },
      { x: 70, y: 70, el: 'C' },
      { x: 104, y: 50, el: 'C' },
      { x: 138, y: 70, el: 'C' },
      { x: 172, y: 50, el: 'C' },
      { x: 206, y: 70, el: 'C' },
      { x: 238, y: 48, el: 'C' },
      { x: 256, y: 48, el: 'H' },
    ],
    bonds: [
      [0, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
      [0, 1, 2],
      [0, 2],
      [2, 3],
      [9, 10],
    ],
  },
]

const filteredAcids = computed(() => activeFilter.value === 'Todos'
  ? acids
  : acids.filter((acid) => acid.categories?.includes(activeFilter.value)))

const esteres = [
  { ester: 'Acetato de etila', scent: 'solução / cola de esmalte', base: 'Ácido acético + etanol' },
  { ester: 'Acetato de isoamila', scent: 'banana', base: 'Ácido acético + álcool isoamílico' },
  { ester: 'Butanoato de etila', scent: 'abacaxi', base: 'Ácido butanoico + etanol' },
  { ester: 'Salicilato de metila', scent: 'gualtéria / inverno', base: 'Ácido salicílico + metanol' },
  { ester: 'Benzoato de benzila', scent: 'fixador de fragrâncias', base: 'Ácido benzóico + álcool benzílico' },
]

const graxos = [
  {
    tipo: 'Saturados',
    def: 'Sem ligações duplas C=C na cadeia',
    ex: 'Ácido palmítico (16 C), ácido esteárico (18 C)',
    papel: 'Gorduras sólidas em temperatura ambiente (manteiga)',
  },
  {
    tipo: 'Insaturados',
    def: 'Uma ou mais ligações duplas C=C',
    ex: 'Ácido oleico (18 C, 1 dupla), linoleico (18 C, 2 duplas)',
    papel: 'Óleos líquidos em temperatura ambiente (azeite)',
  },
]
</script>

<template>
  <div class="page">
    <PageHero
      eixo="Eixo 04 · 04/05"
      kicker="Além da bancada"
      title="Aplicações & Usos no cotidiano"
      lead="Por que uma mesma função química aparece no vinagre, nas frutas, no metabolismo, nos sabões e nos materiais? A resposta começa na carboxila: uma pequena região molecular capaz de controlar acidez, polaridade e reatividade."
      :chips="['Propriedade → aplicação', 'Modelos 2D e 3D', 'Cotidiano']"
    >
      <template #media>
        <div class="palette">
          <div class="palette-row">
            <span class="chip">Formigas → fórmico</span>
            <span class="chip">Vinagre → acético</span>
          </div>
          <div class="palette-row">
            <span class="chip">Limão → cítrico</span>
            <span class="chip">Aroma de banana → éster</span>
          </div>
          <div class="palette-row">
            <span class="chip">Sabão → graxos</span>
            <span class="chip">Biodiesel → ésteres</span>
          </div>
        </div>
      </template>
    </PageHero>

    <!-- ROTEIRO PROGRESSIVO -->
    <section class="presentation-path section-tight">
      <div class="container">
        <p class="presentation-label">Roteiro progressivo</p>
        <nav class="presentation-steps" aria-label="Etapas da apresentação">
          <button type="button" @click="scrollToSection('por-que-aplicar')"><b>01</b><span>Por que são úteis?</span></button>
          <button type="button" @click="scrollToSection('propriedades')"><b>02</b><span>Propriedades-chave</span></button>
          <button type="button" @click="scrollToSection('cotidiano')"><b>03</b><span>No cotidiano</span></button>
          <button type="button" @click="scrollToSection('moleculas')"><b>04</b><span>Moléculas</span></button>
          <button type="button" @click="scrollToSection('transformacoes')"><b>05</b><span>Transformações</span></button>
          <button type="button" @click="scrollToSection('sintese-aplicacoes')"><b>06</b><span>Síntese final</span></button>
        </nav>
      </div>
    </section>

    <section id="por-que-aplicar" class="section intro-applications">
      <div class="container">
        <Reveal><div class="section-head"><p class="kicker">Antes dos exemplos</p><h2>Por que essa família química tem <span class="grad-text">tantas aplicações?</span></h2><p class="lead">Ácidos carboxílicos compartilham o grupo <span class="chem">–COOH</span>, mas o restante da estrutura pode variar muito. Essa combinação entre uma carboxila reativa e uma parte variável permite ajustar comportamento, função e uso.</p></div></Reveal>
        <div class="reason-grid">
          <Reveal :delay="40"><article class="reason-card"><span>–COOH</span><div><h3>Uma identidade comum</h3><p>A carboxila pode doar H⁺, formar ligações de hidrogênio e reagir para produzir sais e derivados.</p></div></article></Reveal>
          <Reveal :delay="100"><article class="reason-card"><span>R</span><div><h3>Uma estrutura variável</h3><p>O grupo R muda tamanho, forma e polaridade: pode ser um H, uma cadeia curta, um anel ou uma longa cauda carbônica.</p></div></article></Reveal>
          <Reveal :delay="160"><article class="reason-card"><span>↗</span><div><h3>Comportamento ajustável</h3><p>Estrutura, pH e meio determinam solubilidade, acidez, interação biológica e transformação química.</p></div></article></Reveal>
        </div>
        <Reveal :delay="180"><p class="transition-line"><b>Ideia central:</b> não aplicamos uma molécula apenas porque ela é “um ácido”; nós exploramos propriedades específicas de sua estrutura.</p></Reveal>
      </div>
    </section>

    <section id="propriedades" class="section properties-section">
      <div class="container">
        <Reveal><div class="section-head"><p class="kicker">Da causa ao efeito</p><h2>Escolha uma propriedade e acompanhe o <span class="grad-text">caminho até o uso</span></h2><p class="lead">Este modelo evita uma lista de produtos sem explicação: cada aplicação nasce de uma característica molecular observável.</p></div></Reveal>
        <Reveal :delay="100"><ApplicationLogicExplorer /></Reveal>
      </div>
    </section>

    <section id="cotidiano" class="section everyday-section">
      <div class="container">
        <Reveal><div class="section-head"><p class="kicker">Química ao nosso redor</p><h2>Onde essa química <span class="grad-text">aparece?</span></h2><p class="lead">Escolha um ambiente para relacionar moléculas, propriedades e usos sem perder o contexto.</p></div></Reveal>
        <Reveal :delay="100"><DailyLifeMap /></Reveal>
      </div>
    </section>

    <!-- PERFIL DOS ÁCIDOS -->
    <section id="moleculas" class="section">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Ficha dos protagonistas</p>
            <h2>Seis ácidos, <span class="grad-text">seis histórias</span></h2>
            <p class="lead">
              Agora que a lógica está clara, compare moléculas reais. Use 2D para reconhecer ligações
              e 3D para observar geometria e volume; abra cada perfil para aprofundar a análise.
            </p>
          </div>
        </Reveal>

        <Reveal :delay="70">
          <nav class="acid-filters" aria-label="Filtrar moléculas por contexto">
            <button v-for="filter in filters" :key="filter" type="button" :class="{ active: activeFilter === filter }" :aria-pressed="activeFilter === filter" @click="activeFilter = filter">{{ filter }}</button>
          </nav>
        </Reveal>

        <div class="grid grid-2 acids-grid">
          <Reveal v-for="(a, i) in filteredAcids" :key="a.nome" :delay="(i % 2) * 90">
            <article class="acid-card card">
              <MoleculeShowcase
                :atoms="a.atoms"
                :bonds="a.bonds"
                :view="a.view"
                :scale="a.scale"
                :name="a.nome"
                :has3d="a.has3d"
                :molecule-path="a.moleculePath"
                :formula="a.formula3d || a.formula"
                :model-name="a.modelName3d || a.nome"
                :atom-counts="a.atomCounts"
              />

              <div class="acid-content">
                <div class="acid-title-row">
                  <div>
                    <p class="acid-index">Molécula {{ String(i + 1).padStart(2, '0') }}</p>
                    <h3>{{ a.nome }}</h3>
                  </div>
                  <p class="chem acid-formula">{{ a.formula }}</p>
                </div>

                <p class="acid-iupac">{{ a.iupac }}</p>

                <div class="acid-context">
                  <span>Onde aparece</span>
                  <p>{{ a.onde }}</p>
                </div>

                <div class="acid-applications">
                  <p class="acid-section-label">Principais aplicações</p>
                  <ul class="clean tick acid-usos">
                    <li v-for="u in a.usos" :key="u">{{ u }}</li>
                  </ul>
                  <p class="property-link"><b>Propriedade → uso:</b> {{ a.propertyLink }}</p>
                </div>

                <RouterLink v-if="a.detailsRoute" :to="a.detailsRoute" class="acid-details-link">
                  Ver perfil completo
                  <span aria-hidden="true">→</span>
                </RouterLink>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal :delay="100">
          <div class="comparison-block">
            <div class="comparison-heading"><p class="kicker">Compare para compreender</p><h2>Duas estruturas, <span class="grad-text">dois comportamentos</span></h2><p class="lead">Escolha um par e observe como tamanho e regiões polares alteram solubilidade, acidez e aplicação.</p></div>
            <MoleculeComparator :acids="acids" />
          </div>
        </Reveal>
      </div>
    </section>

    <section class="section derivatives-section">
      <div class="container">
        <Reveal><div class="section-head"><p class="kicker">A carboxila se transforma</p><h2>Do ácido aos <span class="grad-text">derivados</span></h2><p class="lead">Ácido livre, carboxilato, sal e éster não são nomes equivalentes: cada transformação muda carga, ligações e aplicação.</p></div></Reveal>
        <Reveal :delay="100"><CarboxylDerivativeMap /></Reveal>
      </div>
    </section>

    <!-- ESTERIFICAÇÃO -->
    <section id="transformacoes" class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <p class="optional-label">Aprofundamento opcional · depois do roteiro essencial</p>
        <Reveal>
          <div class="section-head">
            <p class="kicker">Transformações em ação</p>
            <h2>Da carboxila a <span class="grad-text">aromas, sabões e combustíveis</span></h2>
            <p class="lead">
              Compare como ligações éster podem ser formadas, rompidas ou trocadas. Navegue pelas
              etapas para relacionar reagentes, condições, produtos e aplicações cotidianas.
            </p>
          </div>
        </Reveal>

        <Reveal :delay="100">
          <ReactionProcessExplorer />
        </Reveal>

        <div class="table-wrap" style="margin-top: 1.4rem">
          <Reveal :delay="120">
            <p class="panel-label">Exemplo da esterificação · ésteres e seus aromas característicos</p>
            <table class="tbl">
              <thead>
                <tr>
                  <th>Éster</th>
                  <th>Aroma / sabor</th>
                  <th>De onde vem</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="e in esteres" :key="e.ester">
                  <td data-label="Éster"><span class="chem">{{ e.ester }}</span></td>
                  <td data-label="Aroma / sabor">{{ e.scent }}</td>
                  <td data-label="De onde vem">{{ e.base }}</td>
                </tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ÁCIDOS GRAXOS -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="split" style="align-items: center">
            <div>
              <p class="kicker">A ponte com a biologia</p>
              <h2>Ácidos graxos: a <span class="grad-text">extensão</span> mais famosa</h2>
              <p class="lead">
                São ácidos carboxílicos de cadeia longa
                <span class="chem">CH₃–(CH₂)ₙ–COOH</span> — e a peça central de lipídios, óleos,
                gorduras e membranas celulares. A diferença começa nas ligações duplas.
              </p>
              <div class="grid grid-2" style="margin-top: 1.2rem">
                <div v-for="g in graxos" :key="g.tipo" class="card">
                  <p class="panel-label">{{ g.tipo }}</p>
                  <p class="small" style="margin: 0 0 0.5rem">{{ g.def }}</p>
                  <p class="small" style="margin: 0"><strong>{{ g.ex }}</strong></p>
                  <p class="small" style="margin: 0.5rem 0 0">{{ g.papel }}</p>
                </div>
              </div>
            </div>
            <PlasmaMembrane3D />
          </div>
        </Reveal>

        <Reveal :delay="120">
          <div class="grid grid-3" style="margin-top: 1.6rem">
            <div class="card">
              <p class="panel-label">Sabões</p>
              <div class="eq" style="font-size: 0.92rem">
                gordura + NaOH → <b>sabão</b> + glicerina
              </div>
              <p class="small" style="margin: 0">
                Saponificação: o carboxilato de sódio é o agente tensoativo que “limpa”.
              </p>
            </div>
            <div class="card">
              <p class="panel-label">Biodiesel</p>
              <div class="eq" style="font-size: 0.92rem">
                óleo + metanol → <b>ésteres</b> + glicerol
              </div>
              <p class="small" style="margin: 0">
                Transesterificação: ésteres metílicos de ácidos graxos são o combustível renovável.
              </p>
            </div>
            <div class="card">
              <p class="panel-label">Membranas</p>
              <p style="margin: 0">
                Fosfolipídios carregam caudas de ácidos graxos — é a química da formação das
                membranas celulares, do aceite de oliva à célula viva.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- METABOLISMO / NATUREZA -->
    <section class="section section-tight" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Natureza e corpo humano</p>
            <h2>Química dentro de <span class="grad-text">nós e ao redor</span></h2>
          </div>
        </Reveal>

        <div class="grid grid-4">
          <Reveal :delay="40">
            <div class="card">
              <h3 style="font-size: 1.1rem">Plantas</h3>
              <p class="small" style="margin: 0">Cítrico, oxálico, málico e diversos ácidos orgânicos em frutos e seivas.</p>
            </div>
          </Reveal>
          <Reveal :delay="110">
            <div class="card">
              <h3 style="font-size: 1.1rem">Microrganismos</h3>
              <p class="small" style="margin: 0">Fermentações, decomposição e metabolismo produzem e consomem ácidos.</p>
            </div>
          </Reveal>
          <Reveal :delay="180">
            <div class="card">
              <h3 style="font-size: 1.1rem">Corpo humano</h3>
              <p class="small" style="margin: 0">O citrato participa do ciclo de Krebs; lactato é produzido e reutilizado no metabolismo energético.</p>
            </div>
          </Reveal>
          <Reveal :delay="250">
            <div class="card">
              <h3 style="font-size: 1.1rem">Defesa química</h3>
              <p class="small" style="margin: 0">Formigas usam o ácido fórmico; plantas e animais liberam ácidos para proteção.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section id="uso-responsavel" class="section responsible-section">
      <div class="container">
        <Reveal><div class="section-head"><p class="kicker">Uso responsável</p><h2>O pH muda a <span class="grad-text">forma e a aplicação</span></h2><p class="lead">Mova o controle para observar por que identificar a molécula não basta: pH, pKa, concentração e meio alteram seu comportamento.</p></div></Reveal>
        <Reveal :delay="80"><ApplicationPhSimulator /></Reveal>
        <div class="responsibility-grid">
          <Reveal :delay="100"><article class="card"><b>Natural ≠ automaticamente seguro</b><p>Origem natural não substitui avaliação de concentração, exposição, pureza e forma de uso.</p></article></Reveal>
          <Reveal :delay="150"><article class="card"><b>PLA: três conceitos diferentes</b><p><strong>Biobaseado</strong> trata da origem; <strong>biodegradável</strong>, da transformação biológica; <strong>compostável</strong>, do atendimento a critérios em condições definidas.</p></article></Reveal>
          <Reveal :delay="200"><article class="card"><b>Valores dependem das condições</b><p>pKa, solubilidade e propriedades físicas são apresentados de modo aproximado e variam com temperatura, solvente e concentração.</p></article></Reveal>
        </div>
      </div>
    </section>

    <!-- FECHO -->
    <section id="sintese-aplicacoes" class="section section-tight">
      <div class="container">
        <Reveal>
          <div class="panel card-amber">
            <p style="margin: 0">
              <strong>Conclusão para a apresentação:</strong> os ácidos carboxílicos são, ao mesmo tempo,
              <em>um produto natural</em> (frutas, formigas, metabolismo),
              <em>um ingrediente</em> (vinagre, conservantes, fármacos) e
              <em>uma matéria-prima industrial</em> (ésteres, polímeros, solventes) — a mesma
              carboxila conectando química, biologia, alimentação e indústria.
            </p>
          </div>
        </Reveal>
        <Reveal :delay="80">
          <div class="sources-compact">
            <span>Conteúdo revisado com:</span>
            <a href="https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Basic_Principles_of_Organic_Chemistry_(Roberts_and_Caserio)/18%3A_Carboxylic_Acids_and_Their_Derivatives/18.02%3A_Physical_Properties_of_Carboxylic_Acids" target="_blank" rel="noreferrer">Chemistry LibreTexts ↗</a>
            <a href="https://www.fao.org/4/y4358e/y4358e06.htm" target="_blank" rel="noreferrer">FAO · conservação de alimentos ↗</a>
            <a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank" rel="noreferrer">PubChem · dados moleculares ↗</a>
          </div>
        </Reveal>
      </div>
    </section>

  </div>
</template>

<style scoped>
.palette {
  display: grid;
  gap: 0.7rem;
  width: 100%;
  max-width: 420px;
  margin-inline: auto;
}

.palette-row {
  display: flex;
  gap: 0.6rem;
  justify-content: center;
}

.presentation-path {
  position: sticky;
  z-index: 5;
  top: 76px;
  padding-block: 0.8rem;
  border-block: 1px solid var(--line);
  background: var(--header-bg-strong);
  backdrop-filter: blur(16px);
}

.presentation-label,
.optional-label {
  margin: 0 0 0.55rem;
  color: var(--muted-2);
  font: 0.6rem var(--font-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.presentation-steps {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
}

.presentation-steps button {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-width: 0;
  padding: 0.55rem 0.7rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text-soft);
  font-family: var(--font-body);
  font-size: 0.7rem;
  text-align: left;
  cursor: pointer;
}

.presentation-steps button:hover,
.presentation-steps button:focus-visible {
  border-color: var(--amber);
  outline: none;
}

.presentation-steps b { color: var(--amber); font: 0.68rem var(--font-mono); }
.presentation-steps span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

#por-que-aplicar,
#propriedades,
#cotidiano,
#moleculas,
#transformacoes,
#sintese-aplicacoes {
  scroll-margin-top: 170px;
}

.intro-applications {
  background: radial-gradient(circle at 15% 20%, rgba(255, 200, 87, 0.055), transparent 32%);
}

.reason-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.reason-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  height: 100%;
  padding: 1.25rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: linear-gradient(180deg, var(--surface-2), var(--surface));
}

.reason-card > span {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 200, 87, 0.1);
  color: var(--amber);
  font: 700 0.75rem var(--font-mono);
}

.reason-card h3 { margin: 0 0 0.4rem; font-size: 1.08rem; }
.reason-card p { margin: 0; font-size: 0.8rem; }
.transition-line { margin: 1.2rem 0 0; padding: 1rem 1.2rem; border-left: 2px solid var(--amber); background: rgba(255, 200, 87, 0.04); font-size: 0.88rem; }
.properties-section { border-top: 1px solid var(--line); background: var(--bg-2); }
.everyday-section { border-top: 1px solid var(--line); }
.derivatives-section { border-top: 1px solid var(--line); background: var(--bg-2); }
.comparison-block { margin-top: clamp(3rem, 7vw, 5rem); padding-top: 2.5rem; border-top: 1px solid var(--line); }
.comparison-heading { max-width: 720px; margin-bottom: 1.5rem; }
.responsible-section { border-top: 1px solid var(--line); background: var(--bg-2); }
.responsibility-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1rem; }
.responsibility-grid .card { height: 100%; }
.responsibility-grid p { margin: .45rem 0 0; font-size: .75rem; }
.optional-label { display: inline-flex; padding: 0.4rem 0.65rem; border: 1px solid var(--line); border-radius: 999px; }

.sources-compact {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 1rem;
  margin-top: 1rem;
  color: var(--muted-2);
  font-size: 0.68rem;
}

.sources-compact a { color: var(--muted); }
.sources-compact a:hover { color: var(--amber); }

.acid-filters{display:flex;flex-wrap:wrap;gap:.55rem;margin:0 0 1.5rem}.acid-filters button{padding:.55rem .9rem;border:1px solid var(--line-strong);border-radius:999px;background:var(--surface);color:var(--muted);font:600 .7rem var(--font-body);cursor:pointer}.acid-filters button:hover,.acid-filters button.active{border-color:var(--amber);background:rgba(255,200,87,.1);color:var(--amber)}.acid-filters button:focus-visible{outline:2px solid var(--amber);outline-offset:2px}

/* fichas */
.acids-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.acid-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0;
  overflow: hidden;
}

.acid-card:hover {
  transform: translateY(-3px);
}

.acid-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 1.5rem 1.5rem;
}

.acid-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.acid-title-row h3 {
  margin: 0;
}

.acid-index,
.acid-section-label,
.acid-context span {
  margin: 0 0 0.25rem;
  color: var(--muted-2);
  font: 0.64rem var(--font-mono);
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.acid-formula {
  margin: 0.15rem 0 0;
  padding: 0.35rem 0.6rem;
  border: 1px solid rgba(255, 200, 87, 0.2);
  border-radius: 999px;
  background: rgba(255, 200, 87, 0.06);
  font-size: 0.78rem;
}

.acid-iupac {
  margin: 0.35rem 0 1rem;
  color: var(--muted);
  font-size: 0.78rem;
}

.acid-context {
  padding: 0.75rem 0.9rem;
  border-left: 2px solid var(--blue);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  background: rgba(111, 178, 255, 0.055);
}

.acid-context p {
  margin: 0;
  color: var(--text-soft);
  font-size: 0.84rem;
  line-height: 1.45;
}

.acid-applications {
  margin-top: auto;
  padding-top: 1rem;
}

.acid-usos {
  margin: 0;
  padding-top: 0.25rem;
  border: 0;
}

.property-link {
  margin: .8rem 0 0;
  padding: .7rem .8rem;
  border-radius: var(--radius-sm);
  background: rgba(108, 242, 176, .045);
  color: var(--muted);
  font-size: .7rem;
}

.acid-details-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0.75rem 0.9rem;
  border: 1px solid rgba(255, 200, 87, 0.25);
  border-radius: var(--radius-sm);
  background: rgba(255, 200, 87, 0.06);
  color: var(--amber);
  font-size: 0.78rem;
  font-weight: 700;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.acid-details-link:hover,
.acid-details-link:focus-visible {
  border-color: var(--amber);
  background: rgba(255, 200, 87, 0.11);
  outline: none;
}

@media (max-width: 760px) {
  .presentation-path { position: static; }
  .presentation-steps { grid-template-columns: 1fr 1fr; }
  .reason-grid { grid-template-columns: 1fr; }
  .responsibility-grid { grid-template-columns: 1fr; }
  #por-que-aplicar,
  #propriedades,
  #cotidiano,
  #moleculas,
  #transformacoes,
  #sintese-aplicacoes { scroll-margin-top: 90px; }
  .acids-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 620px) {
  .table-wrap .tbl,
  .table-wrap .tbl tbody,
  .table-wrap .tbl tr,
  .table-wrap .tbl td { display: block; width: 100%; }
  .table-wrap .tbl thead { display: none; }
  .table-wrap .tbl tr { padding: .65rem; border-bottom: 1px solid var(--line); }
  .table-wrap .tbl td { display: grid; grid-template-columns: 7rem 1fr; gap: .6rem; padding: .4rem; border: 0; }
  .table-wrap .tbl td::before { content: attr(data-label); color: var(--muted-2); font: .56rem var(--font-mono); text-transform: uppercase; }
}

@media (max-width: 420px) {
  .presentation-steps { grid-template-columns: 1fr; }
}
</style>
