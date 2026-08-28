<script setup>
import PageHero from '../components/PageHero.vue'
import Molecule from '../components/Molecule.vue'
import Reveal from '../components/Reveal.vue'

const acids = [
  {
    nome: 'Ácido fórmico',
    iupac: 'ácido metanoico',
    formula: 'HCOOH',
    onde: 'Defesa química de formigas e urtigas; indústria',
    usos: ['Tanagem de couro', 'Conservante de ração', 'Desincrustante industrial'],
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
    iupac: 'ácido etanoico',
    formula: 'CH₃COOH',
    onde: 'O ácido do vinagre (4–8% em solução)',
    usos: ['Condimento e conservante', 'Produção de acetato de vinila', 'Solvente e reagente'],
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
    iupac: '2-hidroxipropano-1,2,3-tricarboxílico',
    formula: 'C₆H₈O₇',
    onde: 'Frutas cítricas: limão, laranja, tangerina',
    usos: ['Acidulante INS 330 (bebidas, balas)', 'Agente quelante (detergentes)', 'Comprimidos efervescentes'],
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
  {
    nome: 'Ácido lático',
    iupac: 'ácido 2-hidroxipropanoico',
    formula: 'C₃H₆O₃',
    onde: 'Fermentação láctica; músculo em esforço',
    usos: ['Polímero PLA (bioplástico)', 'Alimentos fermentados', 'Fármacos e cosméticos'],
    view: '0 0 145 95',
    scale: 0.95,
    atoms: [
      { x: 4, y: 45, el: 'H' },
      { x: 20, y: 45, el: 'C' },
      { x: 20, y: 20, el: 'H' },
      { x: 20, y: 70, el: 'H' },
      { x: 60, y: 45, el: 'C' },
      { x: 54, y: 20, el: 'O' },
      { x: 60, y: 6, el: 'H' },
      { x: 60, y: 66, el: 'H' },
      { x: 100, y: 45, el: 'C' },
      { x: 127, y: 26, el: 'O' },
      { x: 124, y: 70, el: 'O' },
      { x: 140, y: 82, el: 'H' },
    ],
    bonds: [
      [0, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [4, 5],
      [5, 6],
      [4, 7],
      [4, 8],
      [8, 9, 2],
      [8, 10],
      [10, 11],
    ],
  },
  {
    nome: 'Ácido benzóico',
    iupac: 'ácido benzênicocarboxílico',
    formula: 'C₆H₅COOH',
    onde: 'Aromático; conservante de alimentos',
    usos: ['Conservante INS 210 (refrigerantes, molhos)', 'Síntese de fármacos e aromas', 'Intermediário químico'],
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
    iupac: 'cadeias longas R-COOH',
    formula: 'CH₃(CH₂)ₙCOOH',
    onde: 'Lipídios, óleos, gorduras, membranas',
    usos: ['Sabões (saponificação)', 'Biodiesel (ésteres)', 'Membranas celulares'],
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
      lead="Da defesa química das formigas ao aroma de banana que você sente em uma bala: ácidos carboxílicos viram ésteres, sabões, medicamentos e biocombustíveis. É aqui que a química encontra o mundo."
      :chips="['Natureza', 'Alimentos', 'Fármacos', 'Cosméticos', 'Ésteres', 'Biocombustíveis']"
    >
      <template #media>
        <div class="palette">
          <div class="palette-row">
            <span class="chip">Formigas → fórmico</span>
            <span class="chip">Vinagre → acético</span>
          </div>
          <div class="palette-row">
            <span class="chip">Limão → cítrico</span>
            <span class="chip">Banana → isoamila</span>
          </div>
          <div class="palette-row">
            <span class="chip">Sabão → graxos</span>
            <span class="chip">Biodiesel → ésteres</span>
          </div>
        </div>
      </template>
    </PageHero>

    <!-- PERFIL DOS ÁCIDOS -->
    <section class="section">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Ficha dos protagonistas</p>
            <h2>Seis ácidos, <span class="grad-text">seis histórias</span></h2>
            <p class="lead">
              Um mesmo grupo funcional, várias personalidades. Passe por cada “ficha” — fórmula,
              onde aparece e para que serve.
            </p>
          </div>
        </Reveal>

        <div class="grid grid-2 acids-grid">
          <Reveal v-for="(a, i) in acids" :key="a.nome" :delay="(i % 2) * 90">
            <article class="acid-card card">
              <div class="acid-head">
                <div class="molecule-figure acid-fig">
                  <Molecule :atoms="a.atoms" :bonds="a.bonds" :view="a.view" :scale="a.scale" />
                </div>
                <div class="acid-meta">
                  <h3 style="margin: 0">{{ a.nome }}</h3>
                  <p class="chem" style="margin: 0.15rem 0 0.4rem">{{ a.formula }}</p>
                  <p class="small" style="margin: 0 0 0.5rem"><strong>{{ a.iupac }}</strong></p>
                  <p class="small" style="margin: 0"><em>{{ a.onde }}</em></p>
                </div>
              </div>
              <ul class="clean tick acid-usos">
                <li v-for="u in a.usos" :key="u">{{ u }}</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ESTERIFICAÇÃO -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Química que a gente cheira</p>
            <h2>Ácido + álcool → <span class="grad-text">éster + água</span></h2>
            <p class="lead">
              A <strong>esterificação</strong> é a reação que dá origem aos aromas e sabores do
              cotidiano. O ácido contribui com a carboxila; o álcool, com o hidrogênio — e o
              resultado são ésteres nos perfumes, nas balas e em solventes industriais.
            </p>
          </div>
        </Reveal>

        <Reveal :delay="100">
          <div class="eq" style="font-size: clamp(0.95rem, 2.4vw, 1.15rem)">
            R–COOH + R′–OH ⇌ <b>R–COO–R′</b> + H₂O
          </div>
        </Reveal>

        <div class="table-wrap" style="margin-top: 1.4rem">
          <Reveal :delay="120">
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
                  <td><span class="chem">{{ e.ester }}</span></td>
                  <td>{{ e.scent }}</td>
                  <td>{{ e.base }}</td>
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
            <div class="molecule-figure">
              <Molecule :atoms="acids[5].atoms" :bonds="acids[5].bonds" :view="acids[5].view" :scale="acids[5].scale" />
              <div class="caption">
                <b>Cadeia longa + carboxila</b><br />a “cabeça” polar se associa à água; a cauda apolar se afasta
              </div>
            </div>
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
              <p class="small" style="margin: 0">O ciclo de Krebs começa com o citrato; o ácido lático sinaliza esforço muscular.</p>
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

    <!-- FECHO -->
    <section class="section section-tight">
      <div class="container">
        <Reveal>
          <div class="panel card-amber">
            <p style="margin: 0">
              <strong>Resumo em uma frase:</strong> os ácidos carboxílicos são, ao mesmo tempo,
              <em>um produto natural</em> (frutas, formigas, metabolismo),
              <em>um ingrediente</em> (vinagre, conservantes, fármacos) e
              <em>uma matéria-prima industrial</em> (ésteres, polímeros, solventes) — a mesma
              carboxila conectando química, biologia, alimentação e indústria.
            </p>
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

/* fichas */
.acid-card {
  display: flex;
  flex-direction: column;
}

.acid-head {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  align-items: center;
}

.acid-fig {
  flex: 0 0 auto;
  width: min(240px, 100%);
  margin-bottom: 0.6rem;
}

.acid-meta {
  flex: 1;
  min-width: 200px;
}

.acid-usos {
  margin-top: 0.9rem;
  border-top: 1px dashed var(--line);
  padding-top: 0.9rem;
}
</style>