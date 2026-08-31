<script setup>
import PageHero from '../components/PageHero.vue'
import Molecule from '../components/Molecule.vue'
import Reveal from '../components/Reveal.vue'

const acetico = {
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
}

const eras = [
  {
    era: 'Antiguidade',
    range: '5.000 a.C.',
    title: 'O ERRO, O VINHO, O USOS:',
    text: 'Não há clareza em relação ao descobrimento do vinagre, porém, conta-se que a descoberta por fermentação foi feita pelos judeus quando transportavam vinho da Mesopotâmia para Israel, mas que os babilônios já usavam o vinagre feito do sumo da tamareira, e que esses, foram fortemente influenciados pelos sumérios que acredita-se que também já utilizavam-o. ',
    points: ['Conservação de alimentos', 'Bebida', 'Produto de limpeza'],
    tag: 'empírico',
  },
  {
    era: 'Alquimia',
    range: 'século VIII',
    title: 'Concentração',
    text: 'O alquimista islâmico Jabir ibne Haine (nome latino: Geber),conhecido também como pai da química árabe, descobriu o ácido cítrico',
    points: ['Descoberta do ácido cítrico'],
    tag: 'técnica',
  },
  {
    era: 'Século XVIII',
    range: '1784',
    title: 'Cristalização',
    text: 'O químico sueco Carl Wilhelm Scheele isolou - pela primeira vez - o ácido cítrico por meio do suco de limão',
    points: ['Ácido cítrico (limão)'],
    tag: 'isolamento',
  },
  {
    era: 'Século XVIII e XIX',
    range: '1776 · 1777 · 1845',
    title: 'Avanços',
    text: 'No ano de 1776, Antoine-Laurent de Lavoisier, foi o primeiro a tentar explicar propriedades ácidas de forma mais concreta. O termo química orgânica foi usado em 1777 pela primeira vez pelo químico sueco Torbern Olof Bergman. Depois, em 1845, o químico alemão Hermann Kolbe sintetizou o ácido acético, o que mostrou ser possível sintetizar compostos orgânicos complexos por meio de compostos mais simples .',
    points: [
      'Lavoisier (1776) tentou explicar os ácidos',
      'Bergman (1777): Termo "química orgânica"',
      'Kolbe (1845): síntese do ácido acético',
    ],
    tag: 'teoria',
  },
  {
    era: 'Século XIX e XX',
    title: 'Voltando as origens',
    text: 'O primeiro ácido orgânico a ser industrializado foi o ácido acético - o famoso vinagre -. Sendo fabricado industrialmente por meio fermentação do etanol, sendo uma fermentação bacteriana. Com o avanço tecnológico, o processo começou a ser sintético, sendo realizado por meio da carbonilação do metanol.', 
    points: [
      'Ácido acético',
      'Fermentação',
      'Vinagre',
      'Carbonilação do metanol',
    ],
    tag: 'indústria',
  },
  ]

const avanco = [
  { n: '1', t: 'Identificar', d: 'reconhecer a substância' }, 
  { n: '2', t: 'Determinar composição', d: 'quais elementos e quantos' },
  { n: '3', t: 'Compreender estrutura', d: 'como os átomos se ligam' },
  { n: '4', t: 'Estudar propriedades', d: 'comportamento químico e físico' },
  { n: '5', t: 'Sintetizar', d: 'fabricar em laboratório' },
  { n: '6', t: 'Produzir em escala', d: 'indústria e comércio' },
]

const marcos = [
  { ano: '5000 a.C.', feito: 'Comunidades antigas já usavam o ácido acético, o vinagre.' },
  { ano: 'Século VIII', feito: 'Geber descobriu o ácido cítrico.' },
  { ano: '1784', feito: 'Scheele isolou o ácido cítrico.' },
  { ano: '1776', feito: 'Lavoisier estuda profundamente os ácidos.' },
  { ano: '1777', feito: 'Bergman usa o termo "química orgânica".' },
  { ano: '1845', feito: 'Kolbe sintetiza o ácido acético.' },
  { ano: 'Século XVIII e XIX', feito: 'Ácido acético (vinagre) é o primeiro ácido a ser industrializado.' },

]
</script>

<template>
  <div class="page">
    <PageHero
      eixo="Eixo 02 · 02/05"
      kicker="Da antiguidade à atualidade"
      title="História dos Ácidos Carboxílicos"
      lead="Os ácidos carboxílicos já eram usados pelos povos ágrafos, mesmo sem eles terem 
      conhecimentos sobre suas estruturas."
      :chips="['Antiguidade','Geber · séc. VIII', 'Scheele · 1784', 'Lavoisier  · 1776', 'Bergman · 1777', 'Kolbe · 1845', 'Indústria moderna']"
    >
      <template #media>
        <div class="molecule-figure">
          <div class="stamp">1784</div>
          <Molecule :atoms="acetico.atoms" :bonds="acetico.bonds" view="0 0 130 100" :scale="0.95" />
          <div class="caption">
            <b>Ácido acético</b>
            <br/>
            <b>Imagem ilustrativa gerada por IA · OpenAI, 2026</b>
          </div>
        </div>
      </template>
    </PageHero>

    <!-- INTRO -->
    <section class="section">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Início</p>
            <h2>A prática <span class="grad-text">veio antes da teoria</span></h2>
            <p class="lead">
              O utilização de ácidos carboxílicos começou bem <strong>antes da descoberta</strong> de suas estruturas.
              Os sumérios - <strong>uma das primeiras civilizações </strong>- usavam o vinagre como condimento, conservante, antibiótico e produto de limpeza (detergente). 
            </p>
          </div>
        </Reveal>

        <!-- <div class="grid grid-3" style="margin-top: 1.6rem">
          <Reveal :delay="60">
            <div class="card">
              <p class="panel-label">Conservar</p>
              <p style="margin: 0">
                O meio ácido inibe microrganismos: picles, conservas e temperos ácidos duravam mais.
              </p>
            </div>
          </Reveal>
          <Reveal :delay="140">
            <div class="card">
              <p class="panel-label">Preparar</p>
              <p style="margin: 0">
                Legumes “cozinham” na acidez (cebichés e vinagretes) e bebidas fermentadas ganham novos
                sabores.
              </p>
            </div>
          </Reveal>
          <Reveal :delay="220">
            <div class="card">
              <p class="panel-label">Condimentar</p>
              <p style="margin: 0">
                O sabor ácido atravessa cozinhas do mundo — antes mesmo do termo “ácido acético” existir.
              </p>
            </div>
          </Reveal>
        </div> -->
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Linha do tempo</p>
            <h2>Momentos que <span class="grad-text">marcaram a história </span>dos Ácidos Carboxílados</h2>
          </div>
        </Reveal>

        <div class="timeline">
          <Reveal
            v-for="(e, i) in eras"
            :key="e.era"
            :delay="60"
            class="tl-item"
            :class="{ 'tl-left': i % 2 === 0, 'tl-right': i % 2 === 1 }"
          >
            <div class="tl-dot">
              <span></span>
            </div>
            <article class="tl-card card">
              <div class="tl-head">
                <h3>{{ e.title }}</h3>
                <span class="chip chip-amber">{{ e.tag }}</span>
              </div>
              <p class="tl-epoch">
                <strong>{{ e.era }}</strong> · {{ e.range }}
              </p>
              <p class="tl-text">{{ e.text }}</p>
              <ul class="clean tick">
                <li v-for="p in e.points" :key="p">{{ p }}</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- AVANÇO CIENTÍFICO
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">O que precisa acontecer</p>
            <h2>Como uma substância “vira” ciência</h2>
            <p class="lead">
              Com o desenvolvimento da Química, tornou-se possível percorrer, para cada ácido
              carboxílico, esta sequência — a mesma que transformou o vinagre empírico em ácido
              acético puro e industrial:
            </p>
          </div>
        </Reveal>

        <div class="chain">
          <Reveal
            v-for="(m, i) in avanco"
            :key="m.t"
            :delay="i * 70"
            class="chain-step"
          >
            <small>{{ m.n }}</small>
            {{ m.t }}
            <span class="chip" style="display: block; margin-top: 0.5rem">{{ m.d }}</span>
          </Reveal>
        </div>
      </div>
    </section> -->

    <!-- MARCOS -->
    <section class="section section-tight" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Para não errar</p>
            <h2>Recapitulando <span class="grad-text">a história</span></h2>
          </div>
        </Reveal>

        <div class="grid grid-3">
          <Reveal v-for="(mk, i) in marcos" :key="mk.ano" :delay="i * 70">
            <div class="card marco-card">
              <span class="marco-ano">{{ mk.ano }}</span>
              <p>{{ mk.feito }}</p>
            </div>
          </Reveal>
        </div>

        <!-- <Reveal :delay="180">
          <div class="panel card-amber" style="margin-top: 2rem">
            <p style="margin: 0">
              <strong>Gancho para a apresentação:</strong> o ácido acético é um ótimo exemplo de
              trajetória completa — usado há milênios sem explicação, isolado por destilações,
              sintetizado no laboratório de Kolbe (1845) e, hoje, produzido em mais de 20 milhões de
              toneladas por ano no mundo.
            </p>
          </div>
        </Reveal> -->
      </div>
    </section>
  </div>
</template>

<style scoped>
.stamp {
  display: inline-block;
  padding: 0.35rem 0.9rem;
  border: 1.5px solid var(--amber);
  color: var(--amber);
  border-radius: 8px;
  font-family: var(--font-mono);
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  transform: rotate(-4deg);
  box-shadow: 0 6px 20px -8px rgba(255, 200, 87, 0.5);
}

/* ---------- timeline ---------- */
.timeline {
  position: relative;
  max-width: 940px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, transparent, rgba(255, 200, 87, 0.5) 12%, rgba(255, 200, 87, 0.5) 88%, transparent);
}

.tl-item {
  position: relative;
  width: 50%;
  padding-right: 2.6rem;
  margin-bottom: 2rem;
}

.tl-item.tl-right {
  margin-left: 50%;
  padding-right: 0;
  padding-left: 2.6rem;
}

.tl-dot {
  position: absolute;
  right: -9px;
  top: 22px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--bg-2);
  border: 2px solid var(--amber);
  display: grid;
  place-items: center;
}

.tl-dot span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--amber);
  box-shadow: 0 0 10px var(--amber);
}

.tl-right .tl-dot {
  right: auto;
  left: -9px;
}

.tl-card {
  padding: 1.4rem 1.5rem;
}

.tl-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 0.4rem;
}

.tl-head h3 {
  margin: 0;
  font-size: 1.25rem;
}

.tl-epoch {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--amber);
  margin: 0 0 0.7rem;
}

.tl-epoch strong {
  color: var(--text);
}

.tl-text {
  font-size: 0.94rem;
  margin-bottom: 0.8rem;
}

@media (max-width: 820px) {
  .timeline::before {
    left: 12px;
  }
  .tl-item,
  .tl-item.tl-right {
    width: 100%;
    margin-left: 0;
    padding: 0 0 0 2.4rem;
  }
  .tl-dot,
  .tl-right .tl-dot {
    left: 4px;
    right: auto;
  }
}

/* ---------- marcos ---------- */
.marco-card {
  text-align: center;
}

.marco-ano {
  display: inline-block;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 1.4rem;
  background: linear-gradient(135deg, var(--amber), var(--amber-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.4rem;
}

.marco-card p {
  margin: 0;
  font-size: 0.92rem;
}
</style>