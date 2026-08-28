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
    range: 'até ~ século IV a.C.',
    title: 'O vinagre antes da Química',
    text: 'Culturas antigas fermentavam vinho e o deixavam azedar — obtendo vinagre por ação de bactérias acéticas. Usavam-no para conservar alimentos, temperar, produzir bebidas e limpar. Não sabiam que a acidez vinha do ácido acético: era conhecimento empírico, transmitido pela prática.',
    points: ['Conservação de alimentos', 'Condimento e bebida', 'Uso como agente de limpeza'],
    tag: 'empírico',
  },
  {
    era: 'Alquimia · Idade Média',
    range: 'séculos XII–XVII',
    title: 'Concentrar o “espírito do vinagre”',
    text: 'Alquimistas concentraram o vinagre por destilação, obtendo um líquido forte e ácido (conhecido no ocidente como “espírito de vinagre”, próximo do ácido acético glacial). Pela primeira vez o composto era isolado de forma mais pura — ainda sem compreensão de estrutura.',
    points: ['Destilação e concentração', 'Primeiro ácido carboxílico “puro” da história'],
    tag: 'técnica',
  },
  {
    era: 'Século XVIII',
    range: '1780–1784',
    title: 'Scheele isola os ácidos',
    text: 'O químico sueco Carl Wilhelm Scheele isolou uma série de ácidos orgânicos de fontes naturais: cítrico (do suco de limão, 1784), além de málico, tartárico, oxálico e lático. Isolar uma substância era o primeiro passo para entender o que ela era.',
    points: ['Ácido cítrico (limão)', 'Ácido lático (leite azedo)', 'Ácido oxálico (azedinha)'],
    tag: 'isolamento',
  },
  {
    era: 'Século XIX',
    range: '1828 · 1838 · 1845 · 1858',
    title: 'Nasce a química orgânica',
    text: 'Berzelius cunha o termo “química orgânica”. Wöhler obtém uréia aquecendo cianato de amônio — um composto “orgânico” fora de um ser vivo, golpe no vitalismo. Liebig consolida a química dos ácidos; Kolbe realiza a síntese total do ácido acético (1845) a partir de elementos, e Kekulé estrutura a teoria da ligação química.',
    points: [
      'Wöhler (1828): uréia em laboratório',
      'Liebig: teoria dos radicais e dos ácidos',
      'Kolbe (1845): síntese do ácido acético',
      'Kekulé (1858): valência e estrutura',
    ],
    tag: 'teoria',
  },
  {
    era: 'Século XX',
    range: '1897 · 1919 · 1960–70',
    title: 'Da bancada à escala industrial',
    text: 'A aspirina (ácido acetilsalicílico) entra no mercado em 1899, nascida da acetilação do ácido salicílico. A fermentação do ácido cítrico com o fungo Aspergillus niger se torna processo industrial (Pfizer, 1919). E a carbonilação do metanol — rota da Monsanto/BASF — transforma o ácido acético em commodity química mundial.',
    points: [
      'Aspirina: do ácido salicílico (1897/99)',
      'Fungo A. niger para o ácido cítrico (1919)',
      'Carbonilação do metanol (1960–1970)',
    ],
    tag: 'indústria',
  },
  {
    era: 'Século XXI',
    range: 'hoje',
    title: 'Química verde e biorrefinarias',
    text: 'Ácidos carboxílicos se tornam peças-chave de bioeconomia: fermentação microbiana de açúcares, ácido polilático (PLA) biodegradável, polímeros de origem renovável e rotas “bio” para o ácido acético — conectando química, sustentabilidade e mercado.',
    points: ['PLA e bioplásticos', 'Rota do etanol (Brasil)', 'Fermentação industrial moderna'],
    tag: 'bioeconomia',
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
  { ano: '1784', feito: 'Carl Scheele isola o ácido cítrico do limão' },
  { ano: '1828', feito: 'Wöhler sintetiza uréia em laboratório' },
  { ano: '1845', feito: 'Kolbe sintetiza o ácido acético a partir de elementos' },
  { ano: '1899', feito: 'Bayer lança a aspirina (acetilação do ácido salicílico)' },
  { ano: '1919', feito: 'Fermentação industrial do ácido cítrico (Aspergillus niger)' },
  { ano: '1960–70', feito: 'Carbonilação do metanol industrializa o ácido acético' },
]
</script>

<template>
  <div class="page">
    <PageHero
      eixo="Eixo 02 · 02/05"
      kicker="Do cotidiano antigo à indústria"
      title="História dos Ácidos Carboxílicos"
      lead="Antes de conhecerem a estrutura molecular, as pessoas já usavam vinagre e frutas ácidas no dia a dia. A história da classe é a história da Química se tornando uma ciência: isolar, nomear, estruturar e produzir."
      :chips="['Antiguidade', 'Scheele · 1784', 'Wöhler · 1828', 'Kolbe · 1845', 'Indústria moderna']"
    >
      <template #media>
        <div class="molecule-figure">
          <div class="stamp">1784</div>
          <Molecule :atoms="acetico.atoms" :bonds="acetico.bonds" view="0 0 130 100" :scale="0.95" />
          <div class="caption">
            <b>Ácido acético</b> — conhecido na prática há milênios,
            <br />entendido estruturalmente só no século XIX
          </div>
        </div>
      </template>
    </PageHero>

    <!-- INTRO -->
    <section class="section">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Ponto de partida</p>
            <h2>A prática <span class="grad-text">veio antes da teoria</span></h2>
            <p class="lead">
              A humanidade usava vários ácidos carboxílicos <strong>muito antes</strong> de saber que
              eles existiam como moléculas. O vinagre é o exemplo perfeito: ingrediente da cozinha,
              da conservação e até de remédios caseiros — sem que ninguém soubesse que o responsável
              pela acidez era, principalmente, o <strong>ácido acético</strong>.
            </p>
          </div>
        </Reveal>

        <div class="grid grid-3" style="margin-top: 1.6rem">
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
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Linha do tempo</p>
            <h2>Seis momentos que <span class="grad-text">recontam a história</span></h2>
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

    <!-- AVANÇO CIENTÍFICO -->
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
    </section>

    <!-- MARCOS -->
    <section class="section section-tight" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Para decorar e citar</p>
            <h2>Marcos em uma linha do tempo <span class="grad-text">de bolso</span></h2>
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

        <Reveal :delay="180">
          <div class="panel card-amber" style="margin-top: 2rem">
            <p style="margin: 0">
              <strong>Gancho para a apresentação:</strong> o ácido acético é um ótimo exemplo de
              trajetória completa — usado há milênios sem explicação, isolado por destilações,
              sintetizado no laboratório de Kolbe (1845) e, hoje, produzido em mais de 20 milhões de
              toneladas por ano no mundo.
            </p>
          </div>
        </Reveal>
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