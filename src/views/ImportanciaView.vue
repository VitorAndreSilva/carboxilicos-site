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

const oleico = {
  atoms: [
    { x: 6, y: 50, el: 'R' },
    { x: 52, y: 50, el: 'C' },
    { x: 92, y: 50, el: 'C' },
    { x: 132, y: 50, el: 'R' },
    { x: 170, y: 30, el: 'O' },
    { x: 170, y: 68, el: 'O' },
    { x: 190, y: 80, el: 'H' },
  ],
  bonds: [
    [0, 1],
    [1, 2, 2],
    [2, 3],
    [3, 4, 2],
    [3, 5],
    [5, 6],
  ],
}

const acidos = [
  {
    icone: 'Ac',
    nome: 'Ácido Acético (Ácido Etanóico)',
    sub: 'Conhecido principalmente por ser o principal componente do vinagre',
    domestica: 'Ele é utilizado diluído em água em diversas casas brasileiras para temperar os alimentos, sendo chamado de vinagre; nessa forma também é muito utilizado na limpeza para remover manchas, gordura e até mofo.',
    industrial: 'É utilizado na produção de plásticos, essências artificiais e no tingimento de tecidos.',
    tecnologica: 'É utilizado para regular o pH de diversos medicamentos e suplementos que ajudam na estabilização da pressão arterial e redução do açúcar no sangue, pois são muito sensíveis.',
  },
  {
    icone: 'Ci',
    nome: 'Ácido Cítrico',
    sub: 'É encontrado naturalmente em frutas cítricas como laranja e limão',
    domestica: 'Esse ácido pode ser utilizado em conservas caseiras, geleias e doces, para controlar a gelificação e realçar o sabor frutado.',
    industrial: 'É utilizado como acidulante, aumentando o sabor azedo ou ácido e controlando o pH do alimento ou bebida; também usado como antioxidante, prevenindo a oxidação do alimento, preservando por mais tempo a cor do alimento e aumentando sua validade.',
    tecnologica: 'Na medicina, é utilizado para evitar a coagulação do sangue e, na indústria de laticínios, é usado como emulsificante na fabricação de iogurtes e queijos.',
  },
  {
    icone: 'Gr',
    nome: 'Ácidos Graxos',
    sub: 'São encontrados em gorduras e óleos, possuem cadeias longas, podendo ser saturadas ou insaturadas',
    domestica: 'São a base de sabões e detergentes, pois suas moléculas interagem com a gordura e a água, facilitando a limpeza.',
    industrial: 'Na indústria são utilizados na produção de lubrificantes, tintas, plastificantes e biocombustíveis.',
    tecnologica: 'São utilizados na criação de cremes para a pele para aumentar a absorção dos ativos presentes no creme; além disso, são usados em medicamentos para controlar a liberação dos fármacos.',
    mostraOleico: true,
  },
  {
    icone: 'Sa',
    nome: 'Ácido Salicílico',
    sub: 'Tem afinidade natural por óleos, permitindo a penetração nos poros',
    domestica: 'É utilizado em géis de limpeza fácil, shampoos e hidratantes para pele oleosa.',
    industrial: 'É usado em maquiagens tecnológicas, como bases líquidas que controlam a oleosidade da pele.',
    tecnologica: 'É essencial para tratamentos de acne, pois age dissolvendo o óleo da pele e ajudando a renovação celular.',
  },
  {
    icone: 'Bz',
    nome: 'Ácido Benzóico',
    sub: 'É usado por suas propriedades conservantes e antimicrobianas',
    domestica: 'Está presente em produtos de higiene pessoal como loções e cremes.',
    industrial: 'É utilizado como conservante em bebidas gaseificadas, molhos, entre outros, pois impede o crescimento de fungos e bactérias.',
    tecnologica: 'É utilizado na fabricação de resinas, perfumes e plastificantes.',
  },
  {
    icone: 'Me',
    nome: 'Ácido Metanóico (Ácido Fórmico)',
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

        <div class="grid grid-3">
          <Reveal v-for="(a, i) in acidos" :key="a.nome" :delay="(i % 3) * 90">
            <div class="card acido-card">
              <div class="frente-head">
                <span class="frente-icone">{{ a.icone }}</span>
                <h3 style="margin: 0">{{ a.nome }}</h3>
              </div>
              <p class="acido-sub">{{ a.sub }}</p>

              <div v-if="a.mostraOleico" class="oleico-fig">
                <Molecule :atoms="oleico.atoms" :bonds="oleico.bonds" view="0 0 205 95" :scale="0.9" />
                <span class="oleico-caption">
                  Na imagem acima está o ácido oleico, também conhecido como ômega 9, um ácido
                  graxo, ele é monoinsaturado.
                </span>
              </div>

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
}

.acido-sub {
  margin: 0.5rem 0 0.9rem;
  font-size: 0.92rem;
  color: var(--muted);
}

.oleico-fig {
  margin-bottom: 0.9rem;
}

.oleico-caption {
  display: block;
  margin-top: 0.2rem;
  font-size: 0.78rem;
  color: var(--muted);
  line-height: 1.4;
  text-align: center;
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
  ul.tag-list li {
    grid-template-columns: 1fr;
    gap: 0.25rem;
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