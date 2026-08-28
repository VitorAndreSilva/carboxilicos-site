<script setup>
import Molecule from '../components/Molecule.vue'
import Reveal from '../components/Reveal.vue'
import Counter from '../components/Counter.vue'
import EixoIcon from '../components/EixoIcon.vue'

const cooh = {
  atoms: [
    { x: 40, y: 80, el: 'R' },
    { x: 92, y: 80, el: 'C' },
    { x: 130, y: 52, el: 'O', pulse: true },
    { x: 128, y: 110, el: 'O', pulse: true },
    { x: 150, y: 126, el: 'H' },
  ],
  bonds: [
    [0, 1],
    [1, 2, 2],
    [1, 3],
    [3, 4],
  ],
}

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

const eixos = [
  {
    to: '/estrutura',
    n: '01',
    title: 'Estrutura & Propriedades',
    lead: 'A carboxila explica polaridade, acidez, solubilidade e ponto de ebulição.',
    tags: ['–COOH', 'Ressonância', 'Forças intermoleculares'],
    icon: 'flask',
  },
  {
    to: '/historia',
    n: '02',
    title: 'História',
    lead: 'Do vinagre ancestral à síntese industrial controlada.',
    tags: ['Scheele', 'Wöhler', 'Kolbe'],
    icon: 'history',
  },
  {
    to: '/importancia',
    n: '03',
    title: 'Importância tecnológica, industrial e doméstica',
    lead: 'Matéria-prima da indústria química e protagonista do cotidiano.',
    tags: ['Alimentos', 'Fármacos', 'Polímeros'],
    icon: 'gear',
  },
  {
    to: '/aplicacoes',
    n: '04',
    title: 'Aplicações & Usos',
    lead: 'Vinagre, frutas, sabões, biodiesel, aromas — química em todo lugar.',
    tags: ['Ésteres', 'Ácidos graxos', 'Biocombustíveis'],
    icon: 'leaf',
  },
  {
    to: '/sociedade',
    n: '05',
    title: 'Sociedade · Ambiente · Comércio',
    lead: 'Impactos ambientais, cadeias produtivas, leis e mercado Brasil–mundo.',
    tags: ['ANVISA', 'GHS', 'Convenções'],
    icon: 'globe',
  },
]

const stats = [
  { to: 21, suffix: '+ Mt', label: 'de ácido acético produzidas por ano no mundo' },
  { to: 18, prefix: 'US$ ', suffix: ' bi', label: 'é o tamanho do mercado global de ácido acético (2025)' },
  { to: 55, suffix: '%', label: 'da capacidade mundial de ácido cítrico está na China' },
  { to: 70, suffix: '%', label: 'do ácido cítrico consumido vai para alimentos e bebidas' },
]

const marqueeItems = [
  { q: 'CH₃COOH', x: false },
  { q: 'ácido acético', x: true },
  { q: 'HCOOH', x: false },
  { q: 'ácido fórmico', x: true },
  { q: 'C₆H₈O₇', x: false },
  { q: 'ácido cítrico', x: true },
  { q: 'C₃H₆O₃', x: false },
  { q: 'ácido lático', x: true },
  { q: 'C₆H₅COOH', x: false },
  { q: 'ácido benzóico', x: true },
  { q: 'C₁₇H₃₅COOH', x: false },
  { q: 'ácidos graxos', x: true },
  { q: 'R–COOH', x: false },
  { q: 'esterificação', x: true },
  { q: 'biodiesel', x: true },
  { q: 'sabões', x: true },
]
</script>

<template>
  <div class="home">
    <!-- ================= HERO ================= -->
    <section class="hero bg-grid">
      <span class="hero-glow glow-a" aria-hidden="true"></span>
      <span class="hero-glow glow-b" aria-hidden="true"></span>
      <span class="hero-glow glow-c" aria-hidden="true"></span>

      <div class="float-atom fa-1" aria-hidden="true"></div>
      <div class="float-atom fa-2" aria-hidden="true"></div>
      <div class="float-atom fa-3" aria-hidden="true"></div>
      <div class="float-atom fa-4" aria-hidden="true"></div>

      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="kicker">Química Orgânica · 3º Ano do Ensino Médio · Apresentação</p>
          <h1 class="hero-title">
            Ácidos<br />
            <span class="grad-text">Carboxílicos</span>
          </h1>
          <p class="hero-lead">
            Uma única função química — o grupo <span class="chem">–COOH</span> — está no
            <strong>vinagre</strong> da sua mesa, nas <strong>frutas</strong>, no
            <strong>metabolismo</strong>, nos <strong>medicamentos</strong> e nos
            <strong>polímeros</strong>. Este guia conecta estrutura, propriedades e o mundo real.
          </p>
          <div class="hero-cta">
            <RouterLink to="/estrutura" class="btn btn-primary">
              Explorar os 5 eixos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </RouterLink>
            <RouterLink to="/estrutura" class="btn btn-ghost">Começar pela estrutura</RouterLink>
          </div>
          <div class="hero-hints">
            <span class="chip">R–COOH</span>
            <span class="chip">H<sub>3</sub>C–COOH</span>
            <span class="chip">C<sub>6</sub>H<sub>8</sub>O<sub>7</sub></span>
            <span class="chip">C<sub>3</sub>H<sub>6</sub>O<sub>3</sub></span>
          </div>
        </div>

        <div class="hero-stage">
          <div class="hero-molecule">
            <Molecule :atoms="cooh.atoms" :bonds="cooh.bonds" view="0 0 220 170" :scale="1.25" />
          </div>
          <div class="hero-molecule-caption">
            <span class="dot"></span> Carboxila &nbsp;·&nbsp;
            <span class="chem">C=O</span> + <span class="chem">O–H</span>
          </div>
          <div class="hero-acetato">
            <Molecule :atoms="acetico.atoms" :bonds="acetico.bonds" view="0 0 130 100" :scale="0.9" />
          </div>
        </div>
      </div>

      <div class="hero-scroll" aria-hidden="true">
        <span></span>
      </div>
    </section>

    <!-- ================= MARQUEE ================= -->
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <template v-for="n in 2" :key="n">
          <template v-for="item in marqueeItems" :key="item.q">
            <span class="q" :class="{ x: item.x }">{{ item.q }}</span>
            <span class="a">·</span>
          </template>
        </template>
      </div>
    </div>

    <!-- ================= STATS ================= -->
    <section class="section-tight stats-section">
      <div class="container">
        <Reveal>
          <div class="section-head" style="text-align: center; margin-inline: auto">
            <p class="kicker" style="justify-content: center">Escala real</p>
            <h2 style="font-size: clamp(1.6rem, 3vw, 2.2rem)">
              Não é só matéria de apostila: <span class="grad-text">é indústria</span>
            </h2>
          </div>
        </Reveal>

        <div class="grid grid-4">
          <Reveal v-for="(s, i) in stats" :key="i" :delay="i * 90">
            <div class="card stat-card">
              <div class="stat-number">
                <Counter :to="s.to" :prefix="s.prefix || ''" :suffix="s.suffix || ''" />
              </div>
              <p class="stat-label">{{ s.label }}</p>
            </div>
          </Reveal>
        </div>
        <Reveal :delay="200">
          <p class="small" style="text-align: center; margin-top: 1rem">
            Dados de mercado: Fortune Business Insights (2025) · Mordor Intelligence · Business Research Insights.
          </p>
        </Reveal>
      </div>
    </section>

    <!-- ================= THE CHAIN ================= -->
    <section class="section">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">A ideia-chave de todo o guia</p>
            <h2>Uma cadeia de raciocínio, <span class="grad-text">não um decorador</span></h2>
            <p class="lead">
              Em vez de memorizar “todo ácido carboxílico tem alto ponto de ebulição”, este guia
              pergunta <strong>por quê</strong>. A resposta atravessa a estrutura — e dela derivam
              quase todas as propriedades e aplicações.
            </p>
          </div>
        </Reveal>

        <Reveal :delay="120">
          <div class="chain panel">
            <div class="chain-step"><small>nível 3</small>Estrutura molecular</div>
            <span class="chain-arrow">→</span>
            <div class="chain-step"><small>por quê</small>Polaridade &amp; interações</div>
            <span class="chain-arrow">→</span>
            <div class="chain-step"><small>resultado</small>Propriedades físicas</div>
            <span class="chain-arrow">→</span>
            <div class="chain-step"><small>consequência</small>Comportamento &amp; aplicações</div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- ================= THE 5 EIXOS ================= -->
    <section class="section" style="padding-top: 0">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Navegue pelo guia</p>
            <h2>Cinco eixos, <span class="grad-text">uma só função química</span></h2>
            <p class="lead">
              Cada página sustenta a sua parte da apresentação — siga a ordem sugerida ou salte
              direto para o tópico da sua fala.
            </p>
          </div>
        </Reveal>

        <div class="eixo-list">
          <Reveal v-for="(e, i) in eixos" :key="e.to" :delay="i * 80">
            <RouterLink :to="e.to" class="eixo-card card">
              <div class="eixo-top">
                <span class="eixo-num">{{ e.n }}</span>
                <span class="eixo-icon"><EixoIcon :kind="e.icon" /></span>
              </div>
              <h3>{{ e.title }}</h3>
              <p>{{ e.lead }}</p>
              <div class="eixo-tags">
                <span v-for="t in e.tags" :key="t" class="chip">{{ t }}</span>
              </div>
              <span class="eixo-go">
                Abrir eixo
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </RouterLink>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ================= QUOTE ================= -->
    <section class="section section-tight">
      <div class="container">
        <Reveal>
          <figure class="quote-panel panel card-amber">
            <blockquote>
              “Eles estão muito mais presentes no nosso cotidiano do que parece. Não são apenas
              'ácidos encontrados em alimentos' — são também <strong>matérias-primas da indústria
              química</strong>, pontes entre química, biologia, alimentação, saúde e economia.”
            </blockquote>
            <figcaption>Síntese “Ácidos carboxílicos” — ideia central do trabalho</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>

    <!-- ================= FINAL CTA ================= -->
    <section class="section section-tight">
      <div class="container">
        <Reveal>
          <div class="cta-band">
            <div>
              <p class="kicker" style="color: #1b1206">Pronto para apresentar?</p>
              <h2 style="color: #1b1206">Comece pelo porquê: a estrutura.</h2>
              <p style="color: rgba(27, 18, 6, 0.75); max-width: 54ch">
                Entender a carboxila é a chave para deduzir — e não decorar — o comportamento de
                qualquer ácido carboxílico que você encontrar.
              </p>
            </div>
            <div class="cta-actions">
              <RouterLink to="/estrutura" class="btn btn-dark">Eixo 01 · Estrutura</RouterLink>
              <RouterLink to="/sociedade" class="btn btn-dark btn-outline">Eixo 05 · Sociedade</RouterLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ============ HERO ============ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 110px 0 70px;
}

.glow-a {
  width: 520px;
  height: 520px;
  background: rgba(255, 168, 46, 0.16);
  top: -180px;
  right: -120px;
}

.glow-b {
  width: 460px;
  height: 460px;
  background: rgba(111, 178, 255, 0.1);
  bottom: -200px;
  left: -140px;
}

.glow-c {
  width: 320px;
  height: 320px;
  background: rgba(108, 242, 176, 0.08);
  top: 40%;
  left: 40%;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

@media (max-width: 940px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2.6rem;
  }
  .hero-stage {
    display: none;
  }
}

.hero-title {
  font-size: clamp(3rem, 8.4vw, 5.6rem);
  line-height: 0.98;
  margin-bottom: 0.55em;
  animation: homeRise 0.9s var(--ease-out) both;
}

.hero-lead {
  font-size: 1.14rem;
  max-width: 56ch;
  color: var(--text-soft);
  animation: homeRise 0.9s var(--ease-out) 0.12s both;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.7rem;
  animation: homeRise 0.9s var(--ease-out) 0.22s both;
}

.hero-hints {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  animation: homeRise 0.9s var(--ease-out) 0.3s both;
}

/* stage molecule */
.hero-stage {
  position: relative;
  animation: homeRise 1.1s var(--ease-out) 0.15s both;
}

.hero-molecule {
  width: min(430px, 100%);
  margin-inline: auto;
  animation: floaty 7s ease-in-out infinite;
  filter: drop-shadow(0 30px 60px rgba(255, 168, 46, 0.12));
}

.hero-molecule-caption {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  margin-top: 0.4rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--amber);
  box-shadow: 0 0 12px var(--amber);
}

.hero-acetato {
  position: absolute;
  width: 150px;
  right: -6px;
  bottom: -30px;
  opacity: 0.85;
  animation: floaty 6s ease-in-out 1s infinite reverse;
  filter: drop-shadow(0 20px 40px rgba(111, 178, 255, 0.15));
}

.hero-scroll {
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 40px;
  border: 2px solid rgba(150, 165, 190, 0.35);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  padding-top: 7px;
}

.hero-scroll span {
  width: 3px;
  height: 9px;
  border-radius: 3px;
  background: var(--amber);
  animation: scrollDot 1.8s ease-in-out infinite;
}

@keyframes scrollDot {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(12px);
  }
}

@keyframes homeRise {
  from {
    opacity: 0;
    transform: translateY(26px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes floaty {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-16px) rotate(1.2deg);
  }
}

/* floating atoms */
.float-atom {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  pointer-events: none;
}

.fa-1 {
  width: 18px;
  height: 18px;
  background: radial-gradient(circle at 35% 35%, #fff, #ff6b5e 62%);
  top: 20%;
  left: 62%;
  animation: floaty 9s ease-in-out infinite;
  box-shadow: 0 0 24px rgba(255, 107, 94, 0.5);
}

.fa-2 {
  width: 12px;
  height: 12px;
  background: radial-gradient(circle at 35% 35%, #fff, #a9bdd6 62%);
  top: 64%;
  left: 68%;
  animation: floaty 11s ease-in-out 1.4s infinite;
  box-shadow: 0 0 20px rgba(169, 189, 214, 0.5);
}

.fa-3 {
  width: 9px;
  height: 9px;
  background: radial-gradient(circle at 35% 35%, #fff, #eef4ff 62%);
  top: 30%;
  left: 78%;
  animation: floaty 8s ease-in-out 0.6s infinite;
  box-shadow: 0 0 16px rgba(238, 244, 255, 0.5);
}

.fa-4 {
  width: 14px;
  height: 14px;
  background: radial-gradient(circle at 35% 35%, #fff, #ff6b5e 62%);
  top: 74%;
  left: 50%;
  animation: floaty 10s ease-in-out 2.2s infinite;
  box-shadow: 0 0 22px rgba(255, 107, 94, 0.45);
}

/* ============ MARQUEE ============ */
.marquee {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(255, 200, 87, 0.04);
  overflow: hidden;
  padding: 0.9rem 0;
  position: relative;
}

.marquee-track {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: max-content;
  animation: marquee 34s linear infinite;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

.marquee .q {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--amber);
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.marquee .q.x {
  color: var(--text-soft);
}

.marquee .a {
  color: var(--muted-2);
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* ============ STATS ============ */
.stat-card {
  text-align: center;
  padding: 1.6rem 1.2rem;
}

.stat-number {
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 3.6vw, 2.7rem);
  font-weight: 600;
  line-height: 1;
  background: linear-gradient(135deg, var(--amber), var(--amber-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.6rem;
}

.stat-label {
  font-size: 0.88rem;
  color: var(--muted);
  margin: 0;
}

/* ============ EIXOS ============ */
.eixo-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 330px), 1fr));
  gap: 1.4rem;
}

.eixo-card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  height: 100%;
  position: relative;
}

.eixo-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
}

.eixo-num {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--amber);
}

.eixo-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(255, 200, 87, 0.08);
  border: 1px solid rgba(255, 200, 87, 0.18);
  color: var(--amber);
}

.eixo-icon svg {
  width: 20px;
  height: 20px;
}

.eixo-card p {
  flex: 1;
  margin: 0;
  font-size: 0.95rem;
}

.eixo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.eixo-go {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--amber);
  margin-top: 0.4rem;
}

.eixo-go svg {
  transition: transform 0.25s var(--ease-out);
}

.eixo-card:hover .eixo-go svg {
  transform: translateX(4px);
}

/* ============ QUOTE ============ */
.quote-panel {
  padding: clamp(1.8rem, 4vw, 3rem);
}

.quote-panel blockquote {
  margin: 0 0 0.8rem;
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 3vw, 1.85rem);
  line-height: 1.4;
  color: var(--text);
}

.quote-panel figcaption {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  color: var(--muted);
}

/* ============ FINAL CTA ============ */
.cta-band {
  background: linear-gradient(120deg, var(--amber), var(--amber-2));
  border-radius: var(--radius-lg);
  padding: clamp(2rem, 5vw, 3.2rem);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  box-shadow: 0 30px 70px -30px rgba(255, 168, 46, 0.5);
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.btn-dark {
  background: #1b1206;
  color: var(--amber);
  border-color: #1b1206;
  box-shadow: 0 12px 30px -14px rgba(0, 0, 0, 0.6);
}

.btn-dark:hover {
  transform: translateY(-2px);
}

.btn-dark.btn-outline {
  background: transparent;
  color: #1b1206;
  border-color: rgba(27, 18, 6, 0.4);
}
</style>