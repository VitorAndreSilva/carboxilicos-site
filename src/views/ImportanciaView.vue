<script setup>
import PageHero from '../components/PageHero.vue'
import Molecule from '../components/Molecule.vue'
import MoleculeShowcase from '../components/MoleculeShowcase.vue'
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

const acidoCitrico = {
  atoms: [
    { x: 18, y: 52, el: 'O' }, { x: 42, y: 52, el: 'C' }, { x: 66, y: 52, el: 'C' },
    { x: 94, y: 52, el: 'C' }, { x: 122, y: 52, el: 'C' }, { x: 146, y: 52, el: 'C' },
    { x: 170, y: 52, el: 'O' }, { x: 42, y: 24, el: 'O' }, { x: 146, y: 24, el: 'O' },
    { x: 94, y: 20, el: 'C' }, { x: 72, y: 7, el: 'O' }, { x: 116, y: 7, el: 'O' },
    { x: 94, y: 82, el: 'O' }, { x: 190, y: 52, el: 'H' }, { x: 94, y: 98, el: 'H' },
    { x: 132, y: 7, el: 'H' }, { x: 5, y: 52, el: 'H' },
  ],
  bonds: [
    [0, 1], [1, 2], [1, 7, 2], [2, 3], [3, 4], [3, 9], [3, 12], [4, 5],
    [5, 6], [5, 8, 2], [9, 10, 2], [9, 11], [6, 13], [12, 14], [11, 15], [0, 16],
  ],
}

const acidoBenzoico = {
  atoms: [
    { x: 48, y: 18, el: 'C' }, { x: 76, y: 34, el: 'C' }, { x: 76, y: 66, el: 'C' },
    { x: 48, y: 82, el: 'C' }, { x: 20, y: 66, el: 'C' }, { x: 20, y: 34, el: 'C' },
    { x: 108, y: 50, el: 'C' }, { x: 136, y: 30, el: 'O' }, { x: 136, y: 70, el: 'O' },
    { x: 158, y: 82, el: 'H' },
  ],
  bonds: [[0, 1, 2], [1, 2], [2, 3, 2], [3, 4], [4, 5, 2], [5, 0], [1, 6], [6, 7, 2], [6, 8], [8, 9]],
}

const acidoSalicilico = {
  atoms: [
    ...acidoBenzoico.atoms,
    { x: 4, y: 8, el: 'O' }, { x: 4, y: -8, el: 'H' },
  ],
  bonds: [...acidoBenzoico.bonds, [5, 10], [10, 11]],
}

const acidoFormico = {
  atoms: [
    { x: 58, y: 50, el: 'C' }, { x: 92, y: 28, el: 'O' }, { x: 92, y: 72, el: 'O' },
    { x: 118, y: 84, el: 'H' }, { x: 24, y: 50, el: 'H' },
  ],
  bonds: [[0, 1, 2], [0, 2], [2, 3], [0, 4]],
}

const acidoOleico = {
  atoms: [
    { x: 12, y: 52, el: 'C' }, { x: 27, y: 39, el: 'C' }, { x: 42, y: 52, el: 'C' },
    { x: 57, y: 39, el: 'C' }, { x: 72, y: 52, el: 'C' }, { x: 87, y: 39, el: 'C' },
    { x: 102, y: 52, el: 'C' }, { x: 117, y: 39, el: 'C' }, { x: 132, y: 52, el: 'C' },
    { x: 147, y: 68, el: 'C' }, { x: 164, y: 68, el: 'C' }, { x: 179, y: 52, el: 'C' },
    { x: 194, y: 39, el: 'C' }, { x: 209, y: 52, el: 'C' }, { x: 224, y: 39, el: 'C' },
    { x: 239, y: 52, el: 'C' }, { x: 254, y: 39, el: 'C' }, { x: 271, y: 52, el: 'C' },
    { x: 292, y: 34, el: 'O' }, { x: 292, y: 70, el: 'O' }, { x: 310, y: 82, el: 'H' },
  ],
  bonds: [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9, 2],
    [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17],
    [17, 18, 2], [17, 19], [19, 20],
  ],
}

const acidos = [
  {
    icone: 'Ac',
    nome: 'Ácido Acético (Ácido Etanóico)',
    molecula: acido,
    formula: 'CH₃COOH',
    nomeSistematico: 'ácido etanoico',
    moleculePath: 'molecules/acetic-acid.sdf',
    atomCounts: { C: 2, O: 2, H: 4 },
    sub: 'Conhecido principalmente por ser o principal componente do vinagre',
    domestica: 'Ele é utilizado diluído em água em diversas casas brasileiras para temperar os alimentos, sendo chamado de vinagre; nessa forma também é muito utilizado na limpeza para remover manchas, gordura e até mofo.',
    industrial: 'É utilizado na produção de plásticos, essências artificiais e no tingimento de tecidos.',
    tecnologica: 'É utilizado para regular o pH de diversos medicamentos e suplementos que ajudam na estabilização da pressão arterial e redução do açúcar no sangue, pois são muito sensíveis.',
  },
  {
    icone: 'Ci',
    nome: 'Ácido Cítrico',
    molecula: acidoCitrico,
    formula: 'C₆H₈O₇',
    nomeSistematico: 'ácido 2-hidroxipropano-1,2,3-tricarboxílico',
    view: '-10 -15 220 130',
    escala: 0.68,
    moleculePath: 'molecules/citric-acid.sdf',
    atomCounts: { C: 6, O: 7, H: 8 },
    sub: 'É encontrado naturalmente em frutas cítricas como laranja e limão',
    domestica: 'Esse ácido pode ser utilizado em conservas caseiras, geleias e doces, para controlar a gelificação e realçar o sabor frutado.',
    industrial: 'É utilizado como acidulante, aumentando o sabor azedo ou ácido e controlando o pH do alimento ou bebida; também usado como antioxidante, prevenindo a oxidação do alimento, preservando por mais tempo a cor do alimento e aumentando sua validade.',
    tecnologica: 'Na medicina, é utilizado para evitar a coagulação do sangue e, na indústria de laticínios, é usado como emulsificante na fabricação de iogurtes e queijos.',
  },
  {
    icone: 'Gr',
    nome: 'Ácido Graxo',
    molecula: acidoOleico,
    formula: 'C₁₈H₃₄O₂',
    nomeSistematico: 'ácido (9Z)-octadec-9-enoico',
    view: '0 0 325 100',
    escala: 0.55,
    moleculePath: 'molecules/oleic-acid.sdf',
    atomCounts: { C: 18, O: 2, H: 34 },
    sub: 'Encontrado em óleos vegetais',
    domestica: 'O ácido oleico e seus derivados aparecem em óleos, sabões e formulações de limpeza; seus sais ajudam a dispersar gorduras em água.',
    industrial: 'É empregado na produção de tensoativos, lubrificantes, tintas, plastificantes e derivados oleoquímicos.',
    tecnologica: 'Seus derivados podem integrar emulsões cosméticas, sistemas farmacêuticos e matérias-primas para transformações químicas.',
  },
  {
    icone: 'Sa',
    nome: 'Ácido Salicílico',
    molecula: acidoSalicilico,
    formula: 'C₇H₆O₃',
    nomeSistematico: 'ácido 2-hidroxibenzoico',
    view: '-15 -20 195 125',
    escala: 0.76,
    moleculePath: 'molecules/salicylic-acid.sdf',
    atomCounts: { C: 7, O: 3, H: 6 },
    sub: 'Tem afinidade natural por óleos, permitindo a penetração nos poros',
    domestica: 'É utilizado em géis de limpeza fácil, shampoos e hidratantes para pele oleosa.',
    industrial: 'É usado em maquiagens tecnológicas, como bases líquidas que controlam a oleosidade da pele.',
    tecnologica: 'É essencial para tratamentos de acne, pois age dissolvendo o óleo da pele e ajudando a renovação celular.',
  },
  {
    icone: 'Bz',
    nome: 'Ácido Benzóico',
    molecula: acidoBenzoico,
    formula: 'C₇H₆O₂',
    nomeSistematico: 'ácido benzoico',
    view: '0 0 180 105',
    escala: 0.76,
    moleculePath: 'molecules/benzoic-acid.sdf',
    atomCounts: { C: 7, O: 2, H: 6 },
    sub: 'É usado por suas propriedades conservantes e antimicrobianas',
    domestica: 'Está presente em produtos de higiene pessoal como loções e cremes.',
    industrial: 'É utilizado como conservante em bebidas gaseificadas, molhos, entre outros, pois impede o crescimento de fungos e bactérias.',
    tecnologica: 'É utilizado na fabricação de resinas, perfumes e plastificantes.',
  },
  {
    icone: 'Me',
    nome: 'Ácido Metanóico (Ácido Fórmico)',
    molecula: acidoFormico,
    formula: 'HCOOH',
    nomeSistematico: 'ácido metanoico',
    view: '0 0 145 105',
    escala: 0.85,
    moleculePath: 'molecules/formic-acid.sdf',
    atomCounts: { C: 1, O: 2, H: 2 },
    sub: 'É produzido naturalmente por formigas, por isso é chamado de ácido fórmico; entretanto, também é encontrado em abelhas e plantas como urtigas',
    domestica: 'É utilizado na limpeza pesada, pois está presente em produtos com funções desincrustantes.',
    industrial: 'É utilizado no curtimento de couros para preservá-los, no acabamento de tecidos, para coagular o látex e para controle de pH em diversos produtos.',
    tecnologica: 'É usado como bactericida e fungicida na alimentação de animais e também para a preservação de forragens e silagens.',
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

    <!-- ÁCIDOS -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Os seis mais conhecidos</p>
            <h2>Os ácidos carboxílicos e sua <span class="grad-text">importância</span></h2>
          </div>
        </Reveal>

        <div class="acid-grid">
          <Reveal v-for="(a, i) in acidos" :key="a.nome" :delay="(i % 2) * 90">
            <div class="card acido-card">
              <div class="frente-head">
                <span class="frente-icone">{{ a.icone }}</span>
                <h3 style="margin: 0">{{ a.nome }}</h3>
              </div>
              <p class="acido-sub">{{ a.sub }}</p>

              <figure class="molecule-card-fig">
                <MoleculeShowcase
                  :atoms="a.molecula.atoms"
                  :bonds="a.molecula.bonds"
                  :view="a.view || '0 0 130 100'"
                  :scale="a.escala || 0.85"
                  :name="a.nome"
                  has3d
                  :molecule-path="a.moleculePath"
                  :formula="a.formula"
                  :model-name="a.nome"
                  :atom-counts="a.atomCounts"
                />
                <figcaption class="molecule-card-caption">
                  <strong>{{ a.formula }}</strong>
                  <span>{{ a.nomeSistematico }}</span>
                </figcaption>
              </figure>

              <p v-if="a.icone === 'Gr'" class="molecule-note">
                Ácido graxo monoinsaturado: a dupla ligação cis está no carbono 9 contado a partir
                da carboxila; “ômega 9” indica sua posição a partir da outra extremidade da cadeia.
              </p>

              <ul class="clean tag-list">
                <li>
                  <span class="tag tag-dom">Doméstica</span>
                  <span>{{ a.domestica }}</span>
                </li>
                <li>
                  <span class="tag tag-ind">Industrial</span>
                  <span>{{ a.industrial }}</span>
                </li>
                <li>
                  <span class="tag tag-tec">Tecnológica</span>
                  <span>{{ a.tecnologica }}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
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
                Quase todo armário de cozinha e banheiro guarda um ácido carboxílico trabalhando.
              </p>
              <ul class="clean tick">
                <li><strong>Ácido Acético (Ácido Etanóico):</strong> presente no vinagre, ele tempera alimentos, remove manchas difíceis, gordura e ferrugem.</li>
                <li><strong>Ácido Cítrico:</strong> presente em conservas caseiras, geleias e doces para controlar a gelificação e realçar o sabor frutal.</li>
                <li><strong>Ácidos Graxos:</strong> presente em sabões e detergentes, pois interagem com a gordura e a água para remover a sujeira.</li>
                <li><strong>Ácido Salicílico:</strong> presente em géis de limpeza facial, shampoos e hidratantes para pele oleosa; trata acne e cravos.</li>
                <li><strong>Ácido Benzóico:</strong> presente em produtos de higiene pessoal, como loções e cremes tópicos, além de conservar bebidas e molhos.</li>
                <li><strong>Ácido Metanóico (Ácido Fórmico):</strong> agente acidificante controlado para ajustes de pH e reações de conservantes de uso diário.</li>
              </ul>
            </div>
            <div class="panel casa-panel">
              <div class="casa-grid">
                <div class="casa-item">Limão / Laranja — Ácido cítrico</div>
                <div class="casa-item">Vinagre — Ácido acético (etanoico)</div>
                <div class="casa-item">Cosméticos para Pele Oleosa — Ácido salicílico</div>
                <div class="casa-item">Conservas e Molhos — Ácido benzoico</div>
                <div class="casa-item">Sabão / Detergente — Ácidos graxos</div>
                <div class="casa-item">Desincrustantes — Ácido metanoico (fórmico)</div>
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

.frente-head {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.4rem;
}

.frente-head h3 {
  font-size: 1.05rem;
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

.acido-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.acid-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  align-items: stretch;
}

.acid-grid > :deep(.reveal) {
  min-width: 0;
  height: 100%;
}

.acido-sub {
  margin: 0.5rem 0 0.9rem;
  font-size: 0.92rem;
  color: var(--muted);
}

.molecule-card-fig {
  margin: 0 0 0.9rem;
  overflow: hidden;
  border-radius: var(--radius);
}

.molecule-card-fig :deep(.molecule-showcase__viewport) {
  height: clamp(260px, 28vw, 300px);
}

.molecule-card-fig :deep(.molecule-showcase__viewport--3d) {
  height: clamp(290px, 31vw, 330px);
}

.molecule-card-caption {
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.3rem 0.6rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--line);
  font-size: 0.78rem;
  color: var(--muted);
  line-height: 1.4;
  text-align: center;
}

.molecule-card-caption strong {
  color: var(--amber);
  font-family: var(--font-mono);
}

.molecule-note {
  margin: -0.25rem 0 0.9rem;
  color: var(--muted);
  font-size: 0.72rem;
  line-height: 1.45;
}

ul.tag-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

ul.tag-list li {
  display: grid;
  grid-template-columns: 108px 1fr;
  gap: 0.7rem;
  align-items: start;
  font-size: 0.86rem;
  color: var(--text-soft);
}

.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.18rem 0.5rem;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
  line-height: 1.3;
}

.tag-dom {
  background: rgba(126, 217, 170, 0.1);
  border: 1px solid rgba(126, 217, 170, 0.3);
  color: var(--mint);
}

.tag-ind {
  background: rgba(111, 178, 255, 0.1);
  border: 1px solid rgba(111, 178, 255, 0.3);
  color: #8fc0ff;
}

.tag-tec {
  background: rgba(201, 182, 255, 0.1);
  border: 1px solid rgba(201, 182, 255, 0.3);
  color: #c9b6ff;
}

@media (max-width: 480px) {
  .acido-card {
    padding: 1.15rem;
  }

  .molecule-card-fig {
    margin-inline: -0.2rem;
  }

  ul.tag-list li {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}

@media (max-width: 780px) {
  .acid-grid {
    grid-template-columns: minmax(0, 1fr);
  }
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
