<script setup>
import PageHero from '../components/PageHero.vue'
import Molecule from '../components/Molecule.vue'
import Reveal from '../components/Reveal.vue'
import Counter from '../components/Counter.vue'

const acido = {
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

const ester = {
  atoms: [
    { x: 15, y: 45, el: 'C' },
    { x: 58, y: 45, el: 'C' },
    { x: 86, y: 26, el: 'O' },
    { x: 86, y: 66, el: 'O' },
    { x: 120, y: 66, el: 'C' },
    { x: 158, y: 66, el: 'C' },
  ],
  bonds: [
    [0, 1],
    [1, 2, 2],
    [1, 3],
    [3, 4],
    [4, 5],
  ],
}

const frentes = [
  {
    titulo: 'Alimentícia',
    sigla: 'A',
    itens: ['Acidulantes (INS 330 — ácido cítrico)', 'Conservantes (INS 210 — benzóico; 200 — sórbico)', 'Reguladores de acidez e processamento', 'Vinagre: fermentação acética controlada'],
  },
  {
    titulo: 'Farmacêutica',
    sigla: 'F',
    itens: ['Aspirina — ácido acetilsalicílico', 'Ibuprofeno — AINE, ácido aril-propanóico', 'Sais carboxilatos como princípios ativos', 'Intermediários de síntese de medicamentos'],
  },
  {
    titulo: 'Polímeros',
    sigla: 'P',
    itens: ['PLA — ácido polilático, biodegradável', 'PET — a partir do ácido tereftálico', 'Acrílicos — do ácido acrílico', 'Nilons — a partir de diácidos (adípico)'],
  },
  {
    titulo: 'Cosméticos & cuidados',
    sigla: 'C',
    itens: ['AHAs: glicólico, lático e cítrico', 'Ácido salicílico (BHA) — pele oleosa', 'Controle de pH de formulações', 'Sabões = sais de ácidos graxos'],
  },
  {
    titulo: 'Química industrial',
    sigla: 'Q',
    itens: ['Ésteres como solventes e aromas', 'Acetato de vinila (VAM) para tintas e adesivos', 'PTA para poliéster e embalagens', 'Surfactantes, intermediários e anidridos'],
  },
  {
    titulo: 'Doméstica & cotidiano',
    sigla: 'D',
    itens: ['Vinagre: limpeza e desengraxante', 'Ácido cítrico: remove calcário', 'Conservas e picles', 'Antitártaro de cafeteiras e chaleiras'],
  },
]

const rotas = [
  {
    rotulo: 'Rota dos fósseis',
    texto: 'Carbonilação do metanol (derivado de gás natural/carvão) responde por ~80% do ácido acético industrial.',
    chip: 'C1 → carbonilação',
  },
  {
    rotulo: 'Rota da biomassa',
    texto: 'Fermentação microbiana de açúcares (A. niger para o cítrico; bactérias acéticas para o acético).',
    chip: 'C6H12O6 → fermentação',
  },
  {
    rotulo: 'Rota do etanol (Brasil)',
    texto: 'Oxidação do etanol de cana-de-açúcar — vantagem renovável e rota bio disponível no país.',
    chip: 'C2H5OH → oxidação',
  },
]

const numeros = [
  { to: 20, suffix: '+ Mt/ano', label: 'ácido acético produzido globalmente (capacidade)' },
  { to: 18, prefix: 'US$ ', suffix: ' bi', label: 'mercado mundial do ácido acético (2025)' },
  { to: 68, suffix: '%', label: 'das exportações de ácido cítrico vêm de produtores integrados' },
  { to: 70, suffix: '%', label: 'do ácido cítrico global vai para alimentos e bebidas' },
]
</script>

<template>
  <div class="page">
    <PageHero
      eixo="Eixo 03 · 03/05"
      kicker="Matéria-prima do que consumimos"
      title="Importância tecnológica, industrial & doméstica"
      lead="Ácidos carboxílicos não vivem só dentro de frutas: são matérias-primas centrais da indústria química — do vinagre da cozinha ao poliéster da sua camiseta, passando por fármacos e bioplásticos."
      :chips="['Alimentícia', 'Farmacêutica', 'Polímeros', 'Cosméticos', 'Limpeza doméstica']"
    >
      <template #media>
        <div class="molecule-figure">
          <div class="route">
            <div class="route-step">
              <Molecule :atoms="acido.atoms" :bonds="acido.bonds" view="0 0 130 100" :scale="0.85" />
              <span class="caption"><b>ácido acético</b><br />+ etanol (álcool)</span>
            </div>
            <div class="route-arrow">
              <span>esterificação</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </div>
            <div class="route-step">
              <Molecule :atoms="ester.atoms" :bonds="ester.bonds" view="0 0 190 95" :scale="0.85" />
              <span class="caption"><b>acetato de etila</b><br />éster: solvente e aroma</span>
            </div>
          </div>
          <div class="caption">
            <b>De reagente a produto</b> — a esterificação é a ponte entre a classe e os ésteres da indústria.
          </div>
        </div>
      </template>
    </PageHero>

    <!-- NÚMEROS -->
    <section class="section section-tight">
      <div class="container">
        <div class="grid grid-4">
          <Reveal v-for="(s, i) in numeros" :key="i" :delay="i * 80">
            <div class="card" style="text-align: center">
              <div class="stat-num">
                <Counter :to="s.to" :prefix="s.prefix || ''" :suffix="s.suffix || ''" />
              </div>
              <p class="small" style="margin: 0.5rem 0 0">{{ s.label }}</p>
            </div>
          </Reveal>
        </div>
        <Reveal :delay="160">
          <p class="small" style="text-align: center; margin-top: 1rem">
            Agregados de Fortune Business Insights, Mordor Intelligence e Business Research Insights (2024–2026).
          </p>
        </Reveal>
      </div>
    </section>

    <!-- FRENTES -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Seis frentes de uso</p>
            <h2>Onde a carboxila <span class="grad-text">trabalha</span></h2>
          </div>
        </Reveal>

        <div class="grid grid-3">
          <Reveal v-for="(f, i) in frentes" :key="f.titulo" :delay="(i % 3) * 90">
            <div class="card frente-card">
              <div class="frente-head">
                <span class="frente-icone">{{ f.sigla }}</span>
                <h3 style="margin: 0">{{ f.titulo }}</h3>
              </div>
              <ul class="clean tick">
                <li v-for="it in f.itens" :key="it">{{ it }}</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ROTAS -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">de onde vem</p>
            <h2>Três rotas de produção</h2>
            <p class="lead">
              O ponto de partida muda o perfil ambiental e econômico. Na prática, a indústria
              combina rotas fósseis e renováveis — e o Brasil tem um trunfo na rota do etanol.
            </p>
          </div>
        </Reveal>

        <div class="grid grid-3">
          <Reveal v-for="(r, i) in rotas" :key="r.rotulo" :delay="i * 100">
            <div class="card rota-card">
              <span class="chip chip-amber">{{ r.chip }}</span>
              <h3 style="margin: 0.9rem 0 0.5rem">{{ r.rotulo }}</h3>
              <p style="margin: 0; font-size: 0.95rem">{{ r.texto }}</p>
            </div>
          </Reveal>
        </div>

        <Reveal :delay="140">
          <div class="panel card-amber" style="margin-top: 2rem">
            <p style="margin: 0">
              <strong>Derivados diretos:</strong> a carboxila não é só a molécula-final — ela vira
              <span class="chem">ésteres</span> (aromas, solventes, poliésteres),
              <span class="chem">sais / carboxilatos</span> (sabões, conservantes),
              <span class="chem">anidridos</span> (aspirina, acetato de celulose) e
              <span class="chem">amidas</span> (polímeros e fármacos). É uma <em>plataforma</em> de
              transformação química.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- DOMÉSTICA -->
    <section class="section section-tight" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="split" style="align-items: center">
            <div>
              <p class="kicker">Na sua casa</p>
              <h2>Química doméstica <span class="grad-text">sem surpresa</span></h2>
              <p class="lead">
                Guarde o “Q.D.” da próxima apresentação: quase todo armário de cozinha e banheiro
                guarda um ácido carboxílico trabalhando.
              </p>
              <ul class="clean tick">
                <li><strong>Vinagre (4–8% de ácido acético):</strong> desengraxante, remove calcário, conserva alimentos.</li>
                <li><strong>Ácido cítrico em pó:</strong> desincrustante de chaleiras, cafeteiras e banheiros.</li>
                <li><strong>Sais benzóicos/sórbicos:</strong> aumentam a validade de refrigerantes, molhos e doces.</li>
                <li><strong>Sabões:</strong> sais de ácidos graxos — a carboxila “esconde” sua versatilidade na espuma.</li>
              </ul>
            </div>
            <div class="panel casa-panel">
              <div class="casa-grid">
                <div class="casa-item">Limão — ácido cítrico</div>
                <div class="casa-item">Vinagre — ácido acético</div>
                <div class="casa-item">Cleaners — ácido cítrico</div>
                <div class="casa-item">Conservas — sórbico / benzóico</div>
                <div class="casa-item">Sabão — sais de ácidos graxos</div>
                <div class="casa-item">Cosmético — AHAs</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.route {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.route-step {
  width: min(220px, 42%);
  text-align: center;
}

.route-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  color: var(--amber);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.1em;
  text-align: center;
}

@media (max-width: 620px) {
  .route-step {
    width: 100%;
  }
  .route-arrow {
    transform: rotate(90deg);
  }
}

.stat-num {
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  font-weight: 600;
  line-height: 1;
  background: linear-gradient(135deg, var(--amber), var(--amber-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.frente-card ul {
  margin-top: 0.8rem;
}

.frente-head {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.4rem;
}

.frente-icone {
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(255, 200, 87, 0.08);
  border: 1px solid rgba(255, 200, 87, 0.2);
  color: var(--amber);
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 1rem;
}

.rota-card p {
  font-size: 0.95rem;
}

.casa-panel {
  width: 100%;
}

.casa-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}

.casa-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--surface-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 0.8rem 1rem;
  font-size: 0.88rem;
  color: var(--text-soft);
}

.casa-item::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--amber);
  flex: 0 0 8px;
  box-shadow: 0 0 10px rgba(255, 200, 87, 0.6);
}
</style>