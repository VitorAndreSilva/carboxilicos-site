<script setup>
import { ref, computed } from 'vue'
import PageHero from '../components/PageHero.vue'
import Molecule from '../components/Molecule.vue'
import MoleculeShowcase from '../components/MoleculeShowcase.vue'
import Reveal from '../components/Reveal.vue'

/* ---------- figuras moleculares ---------- */

const estruturaCooh = {
  atoms: [
    { x: 40, y: 80, el: 'R' },
    { x: 92, y: 80, el: 'C' },
    { x: 130, y: 52, el: 'O', pulse: true },
    { x: 128, y: 110, el: 'O', pulse: true },
    { x: 150, y: 128, el: 'H' },
  ],
  bonds: [
    [0, 1],
    [1, 2, 2],
    [1, 3],
    [3, 4],
  ],
}

const carbonila = {
  atoms: [
    { x: 25, y: 55, el: 'C' },
    { x: 70, y: 34, el: 'O', pulse: true },
  ],
  bonds: [[0, 1, 2]],
}

const hidroxila = {
  atoms: [
    { x: 18, y: 50, el: 'R' },
    { x: 52, y: 50, el: 'O' },
    { x: 76, y: 68, el: 'H', pulse: true },
  ],
  bonds: [
    [0, 1],
    [1, 2],
  ],
}

const ionAcetato1 = {
  atoms: [
    { x: 25, y: 48, el: 'C' },
    { x: 58, y: 48, el: 'C' },
    { x: 82, y: 28, el: 'O', pulse: false },
    { x: 82, y: 68, el: 'O', pulse: true },
  ],
  bonds: [
    [0, 1],
    [1, 2, 2],
    [1, 3],
  ],
}

const ionAcetato2 = {
  atoms: [
    { x: 25, y: 48, el: 'C' },
    { x: 58, y: 48, el: 'C' },
    { x: 82, y: 28, el: 'O', pulse: true },
    { x: 82, y: 68, el: 'O', pulse: false },
  ],
  bonds: [
    [0, 1],
    [1, 2],
    [1, 3, 2],
  ],
}

const serial = [
  { nome: 'Fórmico', formula: 'HCOOH', c: 1, bp: 100.8, sol: 'Muito solúvel', solN: 4, obs: 'A carboxila domina: interage fortemente com a água.' },
  { nome: 'Acético', formula: 'CH₃COOH', c: 2, bp: 117.9, sol: 'Muito solúvel', solN: 4, obs: 'Ácido do vinagre; totalmente miscível em água.' },
  { nome: 'Propanóico', formula: 'CH₃CH₂COOH', c: 3, bp: 141.2, sol: 'Muito solúvel', solN: 3, obs: 'Cadeia ainda curta: solubilidade alta.' },
  { nome: 'Butanóico', formula: 'CH₃(CH₂)₂COOH', c: 4, bp: 163.5, sol: 'Parcial', solN: 2, obs: 'Ponto de inflexão: a porção apolar começa a competir.' },
  { nome: 'Pentanóico', formula: 'CH₃(CH₂)₃COOH', c: 5, bp: 186.2, sol: 'Pouco solúvel', solN: 1, obs: 'A cauda carbônica passa a dominar a interação.' },
  { nome: 'Hexanóico', formula: 'CH₃(CH₂)₄COOH', c: 6, bp: 205.4, sol: 'Quase insolúvel', solN: 0, obs: 'Solúvel em água apenas em traços.' },
  { nome: 'Decanóico', formula: 'CH₃(CH₂)₈COOH', c: 10, bp: 269, sol: 'Insolúvel na prática', solN: 0, obs: 'Um ácido graxo curto: comportamento apolar predomina.' },
]

const slider = ref(1)
const atual = computed(() => serial[slider.value])

const bpMax = 270
function barHeight(bp) {
  return Math.max(14, (bp / bpMax) * 100)
}

const pkaTable = [
  { acido: 'Ácido clorídrico (HCl)', tipo: 'ácido mineral forte', pka: '≈ –7', forca: 'Forte' },
  { acido: 'Ácido oxálico (HOOC–COOH)', tipo: 'dicarboxílico', pka: '1,25', forca: 'Fortíssimo (orgânico)' },
  { acido: 'Ácido fórmico (HCOOH)', tipo: 'monocarboxílico', pka: '3,75', forca: 'Fraco' },
  { acido: 'Ácido cítrico', tipo: 'tricarboxílico', pka: '3,13 / 4,76 / 6,40', forca: 'Fraco' },
  { acido: 'Ácido benzóico (C₆H₅COOH)', tipo: 'aromático', pka: '4,20', forca: 'Fraco' },
  { acido: 'Ácido acético (CH₃COOH)', tipo: 'monocarboxílico', pka: '4,76', forca: 'Fraco' },
]

const peBars = serial.map((s) => ({ nome: s.nome, c: s.c, bp: s.bp }))
</script>

<template>
  <div class="page">
    <PageHero
      eixo="Eixo 01 · 01/05"
      kicker="Núcleo do trabalho · nível 3"
      title="Estrutura & Propriedades Físico-Químicas"
      lead="Nada de decorar tabelas. Entenda como a carboxila — uma região pequena e polar da molécula — comanda acidez, solubilidade, ponto de ebulição e reatividade."
      :chips="['Polaridade', 'Ligação de hidrogênio', 'Equilíbrio ácido-base', 'Ressonância']"
    >
      <template #media>
        <div class="molecule-figure">
          <Molecule :atoms="estruturaCooh.atoms" :bonds="estruturaCooh.bonds" view="0 0 220 170" :scale="1.25" />
          <div class="caption">
            <b>A carboxila</b> — o coração funcional de toda a classe
          </div>
        </div>
      </template>
    </PageHero>

    <!-- 1 · O QUE É A CARBOXILA -->
    <section class="section">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Antes de tudo</p>
            <h2>A carboxila é a soma de <span class="grad-text">duas funções</span></h2>
            <p class="lead">
              Um ácido carboxílico é um composto orgânico que contém o grupo funcional
              <span class="chem">–COOH</span>. A carboxila não é um átomo isolado — é a
              combinação de uma <strong>carbonila</strong> (C=O) e de uma
              <strong>hidroxila</strong> (O–H) ligadas ao mesmo carbono.
            </p>
          </div>
        </Reveal>

        <div class="decomp">
          <Reveal :delay="60">
            <div class="molecule-figure">
              <Molecule :atoms="carbonila.atoms" :bonds="carbonila.bonds" view="0 0 110 90" :scale="1.05" />
              <div class="caption"><b>Carbonila</b><br />C=O — polar e rica em elétrons</div>
            </div>
          </Reveal>
          <Reveal :delay="140">
            <div class="decomp-op">+</div>
          </Reveal>
          <Reveal :delay="220">
            <div class="molecule-figure">
              <Molecule :atoms="hidroxila.atoms" :bonds="hidroxila.bonds" view="0 0 105 90" :scale="1.05" />
              <div class="caption"><b>Hidroxila</b><br />O–H — origem do hidrogênio ácido</div>
            </div>
          </Reveal>
          <Reveal :delay="300">
            <div class="decomp-op">=</div>
          </Reveal>
          <Reveal :delay="380">
            <div class="molecule-figure decomp-result">
              <Molecule :atoms="estruturaCooh.atoms" :bonds="estruturaCooh.bonds" view="0 0 220 170" :scale="1.15" />
              <div class="caption"><b>Carboxila –COOH</b><br />O grupo que define a função</div>
            </div>
          </Reveal>
        </div>

        <Reveal :delay="200">
          <div class="panel grid grid-2" style="margin-top: 2rem; align-items: start">
            <div>
              <p class="panel-label">Genealogia do nome</p>
              <p style="margin: 0">
                <strong>carbo</strong> (o carbono da carbonila) +
                <strong>oxi</strong> (oxigênio) + <strong>‑ico</strong> (relativo à função).
                Não é preciso decorar a origem — mas reconhecer
                <span class="chem">–COOH</span> num composto deve disparar, imediatamente:
                <em style="color: var(--amber)">ácido carboxílico</em>.
              </p>
            </div>
            <div>
              <p class="panel-label">O que NÃO é a função</p>
              <p style="margin: 0">
                Ter apenas oxigênio e hidrogênio na molécula não basta. É a
                <strong>carboxila em si</strong> — o arranjo <span class="chem">–C(=O)–OH</span> —
                que caracteriza a classe e explica o caráter ácido e as propriedades físicas.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container split" style="align-items: center">
        <Reveal>
          <div>
            <p class="kicker">Da fórmula ao espaço</p>
            <h2>Compare a carboxila em <span class="grad-text">2D e 3D</span></h2>
            <p class="lead">A fórmula 2D evidencia as ligações; o modelo 3D revela geometria, volume e orientação. Use as duas leituras juntas para entender o ácido acético.</p>
            <ul class="clean tick"><li>No 2D, localize C=O e O–H.</li><li>No 3D, gire o modelo e identifique os dois oxigênios.</li><li>Alterne entre bastões e modelo espacial para comparar ligação e volume.</li></ul>
          </div>
        </Reveal>
        <Reveal :delay="100">
          <MoleculeShowcase :atoms="[{x:8,y:45,el:'H'},{x:28,y:45,el:'C'},{x:28,y:22,el:'H'},{x:28,y:68,el:'H'},{x:72,y:45,el:'C'},{x:100,y:26,el:'O'},{x:96,y:70,el:'O'},{x:112,y:82,el:'H'}]" :bonds="[[0,1],[1,2],[1,3],[1,4],[4,5,2],[4,6],[6,7]]" view="0 0 130 95" :scale=".95" name="Ácido acético" has3d molecule-path="molecules/acetic-acid.sdf" formula="C₂H₄O₂" :atom-counts="{C:2,O:2,H:4}" />
        </Reveal>
      </div>
    </section>

    <!-- 2 · CARÁTER ÁCIDO -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Por que “ácido”?</p>
            <h2>A carboxila <span class="grad-text">doa um próton</span></h2>
            <p class="lead">
              O hidrogênio da hidroxila pode sair na forma de <span class="chem">H⁺</span>,
              gerando o ion carboxilato. A seta dupla (⇌) é a estrela do parágrafo:
              ela indica um <strong>equilíbrio</strong>, não uma ionização completa.
            </p>
          </div>
        </Reveal>

        <Reveal :delay="100">
          <div class="grid grid-3" style="margin-top: 1.6rem">
            <div class="card">
              <p class="panel-label">Ionização genérica</p>
              <div class="eq">
                R–COOH ⇌ <b>R–COO⁻</b> + H⁺
              </div>
              <p class="small" style="margin: 0">
                A seta dupla mostra que parte do ácido permanece na forma molecular.
              </p>
            </div>
            <div class="card">
              <p class="panel-label">No vinagre (em água)</p>
              <div class="eq">
                CH₃COOH + H₂O ⇌ <b>CH₃COO⁻</b> + H₃O⁺
              </div>
              <p class="small" style="margin: 0">
                Em água convém representar o próton solvatado como íon hidrônio (H₃O⁺).
              </p>
            </div>
            <div class="card">
              <p class="panel-label">Então são fortes?</p>
              <p style="margin: 0">
                <strong>Não.</strong> Ácidos carboxílicos são, em geral,
                <strong>ácidos fracos em água</strong>: ionizam-se apenas parcialmente, porque o
                equilíbrio favorece a forma neutra.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal :delay="140">
          <div class="panel" style="margin-top: 1.6rem">
            <p class="panel-label">Qualitativamente, quanto mais forte?</p>
            <p>
              A força é medida pelo <strong>pKa</strong>: quanto <strong>menor</strong> o pKa,
              maior a tendência de doar o próton. Os ácidos carboxílicos típicos ficam na faixa
              <span class="chem">pKa ≈ 3–5</span> — fracos, mas muito mais ácidos que a água (pKa ≈ 14).
            </p>
            <div class="table-wrap" style="margin-top: 1rem">
              <table class="tbl">
                <thead>
                  <tr>
                    <th>Espécie</th>
                    <th>Tipo</th>
                    <th>pKa (≈)</th>
                    <th>Caráter</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="p in pkaTable" :key="p.acido">
                    <td>{{ p.acido }}</td>
                    <td>{{ p.tipo }}</td>
                    <td class="chem">{{ p.pka }}</td>
                    <td>{{ p.forca }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="small" style="margin-top: 0.9rem">
              Valores aproximados (25 °C). Substituintes atraem elétrons (ex.: cloro, grupos –OH)
              e efeitos de ressonância podem deslocar a acidez — um bom gancho para discussão em sala.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- 3 · RESONÂNCIA -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">O segredo da acidez</p>
            <h2>Ressonância: a carga <span class="grad-text">não fica parada</span></h2>
            <p class="lead">
              Quando o ácido doa o próton, a carga negativa do íon carboxilato fica
              <strong>deslocalizada entre os dois oxigênios</strong>. A molécula real é um
              “meio-termo” entre as duas estruturas de ressonância — e esse espalhamento de carga
              <strong>estabiliza o ânion</strong>.
            </p>
          </div>
        </Reveal>

        <Reveal :delay="120">
          <div class="resonance">
            <div class="molecule-figure">
              <Molecule :atoms="ionAcetato1.atoms" :bonds="ionAcetato1.bonds" view="0 0 110 98" :scale="1" />
              <div class="caption"><b>Estrutura 1</b><br />íon acetato</div>
            </div>
            <div class="res-arrow" aria-hidden="true">
              <span>⇌</span>
            </div>
            <div class="molecule-figure">
              <Molecule :atoms="ionAcetato2.atoms" :bonds="ionAcetato2.bonds" view="0 0 110 98" :scale="1" />
              <div class="caption"><b>Estrutura 2</b><br />íon acetato</div>
            </div>
          </div>
        </Reveal>

        <div class="grid grid-3" style="margin-top: 1.6rem">
          <Reveal :delay="60">
            <div class="card">
              <p class="panel-label">Por quê isso importa</p>
              <p style="margin: 0">
                Quanto mais estável a espécie formada após a saída de H⁺, mais fácil é a ionização.
                A estabilização por ressonância é uma das razões centrais do caráter ácido.
              </p>
            </div>
          </Reveal>
          <Reveal :delay="140">
            <div class="card">
              <p class="panel-label">Cuidado com a ideia</p>
              <p style="margin: 0">
                A molécula <strong>não alterna</strong> entre duas estruturas. Ela é uma híbrida,
                com a carga espalhada de uma vez só pelos dois oxigênios — daí falarmos em
                <strong>deslocalização</strong>.
              </p>
            </div>
          </Reveal>
          <Reveal :delay="220">
            <div class="card card-amber">
              <p class="panel-label">Para dizer na apresentação</p>
              <p style="margin: 0">
                “Antes de o ácido ‘largar’ o próton, vale a pena perguntar: quão confortável fica a
                carga negativa depois que ele vai embora? Na carboxila, ela se reparte entre dois
                oxigênios.”
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- 4 · POLARIDADE -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Eletronegatividade em ação</p>
            <h2>A molécula tem <span class="grad-text">dois “lados”</span></h2>
            <p class="lead">
              O oxigênio é bem mais eletronegativo que carbono e hidrogênio: a carboxila concentra
              elétrons e forma uma <strong>região polar</strong>. Mas, se a cadeia carbônica é
              longa, existe também uma <strong>cauda apolar</strong> — e essa dupla personalidade
              governa a solubilidade.
            </p>
          </div>
        </Reveal>

        <Reveal :delay="120">
          <div class="panel split split-reverse" style="align-items: center">
            <div style="text-align: left">
              <p class="panel-label">Dipolo da carboxila</p>
              <ul class="clean tick">
                <li>Carga parcial negativa concentrada nos oxigênios.</li>
                <li>Carga parcial positiva no hidrogênio da hidroxila.</li>
                <li>Cadeia carbônica “gorda” = região essencialmente apolar.</li>
              </ul>
              <div class="chain" style="margin-top: 1.2rem">
                <div class="chain-step"><small>estrutura</small>Carboxila polar</div>
                <span class="chain-arrow">→</span>
                <div class="chain-step"><small>consequência</small>Interação com a água</div>
              </div>
            </div>
            <div class="dipole">
              <div class="dipole-polo">cauda apolar <span>–(CH₂)ₙ–</span></div>
              <div class="dipole-fade"></div>
              <div class="dipole-cabeça">
                <Molecule :atoms="estruturaCooh.atoms" :bonds="estruturaCooh.bonds" view="0 0 220 170" :scale="1.1" />
              </div>
              <div class="dipole-charge">δ<sup>–</sup></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- 5 · INTERATIVO: SOLUBILIDADE x CADEIA -->
    <section class="section" style="border-top: 1px solid var(--line)" id="simulador">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Simulador · interativo</p>
            <h2>Arraste a cadeia e veja a <span class="grad-text">disputa</span></h2>
            <p class="lead">
              Água é polar; a carboxila também. Mas a cauda carbônica é apolar. Quem ganha depende
              do tamanho da cadeia. Mova o controle e observe a solubilidade e o ponto de ebulição.
            </p>
          </div>
        </Reveal>

        <Reveal :delay="120">
          <div class="sim panel">
            <div class="sim-top">
              <div>
                <p class="panel-label">Comprimento da cadeia</p>
                <h3 style="margin: 0">
                  <span class="chem">{{ atual.formula }}</span>
                  &nbsp;·&nbsp; {{ atual.nome }} ({{ atual.c }} C)
                </h3>
              </div>
              <div class="chip chip-amber">P.E. ≈ {{ atual.bp.toLocaleString('pt-BR') }} °C</div>
            </div>

            <input
              v-model.number="slider"
              type="range"
              min="0"
              :max="serial.length - 1"
              step="1"
              class="slider"
              :style="{ '--pct': (slider / (serial.length - 1)) * 100 + '%' }"
              aria-label="Comprimento da cadeia carbônica"
            />

            <div class="sim-labels">
              <span>HCOOH</span>
              <span>CH₃COOH</span>
              <span>CH₃(CH₂)₂COOH</span>
              <span>CH₃(CH₂)₈COOH</span>
            </div>

            <div class="sim-body">
              <div class="sim-meter">
                <div class="sim-meter-head">
                  <span>Solubilidade em água</span>
                  <span><strong>{{ atual.sol }}</strong></span>
                </div>
                <div class="meter-track">
                  <div class="meter-fill" :style="{ width: atual.solN * 25 + '%' }"></div>
                </div>
                <p class="small" style="margin: 0.6rem 0 0">{{ atual.obs }}</p>
              </div>

              <div class="sim-bars">
                <div class="sim-bars-title">Ponto de ebulição cresce com a cadeia</div>
                <div class="bars">
                  <div v-for="(b, i) in peBars" :key="b.nome" class="bar-col" :class="{ active: i === slider }">
                    <span class="bar-val">{{ b.bp.toLocaleString('pt-BR') }}</span>
                    <div class="bar" :style="{ height: barHeight(b.bp) + '%' }"></div>
                    <span class="bar-label">{{ b.nome }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div class="grid grid-2" style="margin-top: 1.6rem">
          <Reveal :delay="100">
            <div class="card">
              <p class="panel-label">Regra da cadeia curta (1–4 C)</p>
              <p style="margin: 0">
                A parte polar tem grande peso → os ácidos menores são
                <strong>muito solúveis em água</strong>. É por isso que vinagre e sucos de fruta se
                misturam tão bem.
              </p>
            </div>
          </Reveal>
          <Reveal :delay="180">
            <div class="card">
              <p class="panel-label">Regra da cadeia longa</p>
              <p style="margin: 0">
                A porção apolar passa a dominar → os ácidos graxos (12–20 C) são
                <strong>quase insolúveis em água</strong> e se organizam em gorduras e membranas.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- 6 · PONTO DE EBULIÇÃO -->
    <section class="section" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Forças intermoleculares</p>
            <h2>Pontos de ebulição relativamente <span class="grad-text">altos</span></h2>
            <p class="lead">
              Ácidos carboxílicos formam <strong>ligações de hidrogênio</strong> muito fortes entre
              as próprias moléculas — inclusive <strong>dímeros</strong>, associações em anel que
              exigem muita energia para se romper.
            </p>
          </div>
        </Reveal>

        <Reveal :delay="120">
          <div class="panel split" style="align-items: center">
            <div>
              <section class="dimer" aria-label="Dímero de ácido acético">
                <svg viewBox="0 0 320 150" role="img" aria-hidden="true">
                  <defs>
                    <radialGradient id="dimGlow" cx="50%" cy="40%" r="70%">
                      <stop offset="0%" stop-color="rgba(255,255,255,0.45)" />
                      <stop offset="45%" stop-color="rgba(255,255,255,0)" />
                      <stop offset="100%" stop-color="rgba(0,0,0,0.22)" />
                    </radialGradient>
                  </defs>

                  <line x1="118" y1="88" x2="228" y2="52" stroke="var(--amber)" stroke-width="1.6" stroke-dasharray="5 5" />
                  <line x1="202" y1="88" x2="92" y2="50" stroke="var(--amber)" stroke-width="1.6" stroke-dasharray="5 5" />

                  <g font-size="12" font-family="'IBM Plex Mono', monospace" fill="var(--text)" font-weight="600">
                    <text x="80" y="42" text-anchor="middle">C=O</text>
                    <text x="240" y="42" text-anchor="middle">C=O</text>
                    <text x="108" y="112" text-anchor="middle">O–H</text>
                    <text x="212" y="112" text-anchor="middle">O–H</text>
                  </g>

                  <circle cx="60" cy="70" r="20" fill="none" stroke="var(--carbon)" stroke-width="1.6" stroke-dasharray="5 4" opacity="0.9" />
                  <text x="60" y="75" text-anchor="middle" font-size="14" font-style="italic" font-family="'IBM Plex Mono', monospace" fill="#c9b6ff" font-weight="600">R</text>
                  <circle cx="260" cy="70" r="20" fill="none" stroke="var(--carbon)" stroke-width="1.6" stroke-dasharray="5 4" opacity="0.9" />
                  <text x="260" y="75" text-anchor="middle" font-size="14" font-style="italic" font-family="'IBM Plex Mono', monospace" fill="#c9b6ff" font-weight="600">R</text>

                  <circle cx="92" cy="32" r="9" fill="var(--red)" />
                  <circle cx="86" cy="26" r="3.4" fill="url(#dimGlow)" />
                  <circle cx="228" cy="32" r="9" fill="var(--red)" />
                  <circle cx="222" cy="26" r="3.4" fill="url(#dimGlow)" />
                  <circle cx="88" cy="102" r="9" fill="var(--red)" />
                  <circle cx="82" cy="96" r="3.4" fill="url(#dimGlow)" />
                  <circle cx="232" cy="102" r="9" fill="var(--red)" />
                  <circle cx="226" cy="96" r="3.4" fill="url(#dimGlow)" />
                  <circle cx="104" cy="110" r="5" fill="#eef4ff" />
                  <circle cx="216" cy="110" r="5" fill="#eef4ff" />

                  <g font-size="9.5" font-family="'IBM Plex Mono', monospace" fill="#ffb8b1">
                    <text x="92" y="18" text-anchor="middle">δ⁻</text>
                    <text x="228" y="18" text-anchor="middle">δ⁻</text>
                    <text x="104" y="122" text-anchor="middle">δ⁺</text>
                    <text x="216" y="122" text-anchor="middle">δ⁺</text>
                  </g>
                </svg>
                <div class="caption">
                  <b>Dímero</b> — duas moléculas de ácido acético unidas por duas ligações de hidrogênio (tracejadas).
                </div>
              </section>
            </div>
            <div>
              <p class="panel-label">Por que ebulição alta?</p>
              <ul class="clean tick">
                <li>Ligações de hidrogênio O–H · · · O são intensas e direcionais.</li>
                <li>O dímero aproxima duas moléculas e “prende” a unidade.</li>
                <li>Quanto maior a cadeia, maiores também as forças de London → P.E. sobe.</li>
                <li>Moléculas <strong>ramificadas</strong> empacotam pior e tendem a ferver mais baixo.</li>
              </ul>
              <p class="small" style="margin-top: 0.8rem">
                Compare: ácido fórmico (HCOOH, 1 C) ferve a ≈ 100,8 °C — enquanto o etanol
                (C₂H₅OH, que também tem O–H) ferve a ≈ 78 °C. A carboxila faz diferença.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- 7 · RECAP -->
    <section class="section section-tight" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Fecha-chave</p>
            <h2>Deduzir, <span class="grad-text">não decorar</span></h2>
          </div>
        </Reveal>

        <div class="chain" style="margin-bottom: 2.4rem">
          <div class="chain-step"><small>estrutura</small>Carboxila &amp; cadeia</div>
          <span class="chain-arrow">→</span>
          <div class="chain-step"><small>polaridade</small>Regiões polar / apolar</div>
          <span class="chain-arrow">→</span>
          <div class="chain-step"><small>interações</small>Ligação de H &amp; London</div>
          <span class="chain-arrow">→</span>
          <div class="chain-step"><small>propriedades</small>Solub. · P.E. · acidez</div>
          <span class="chain-arrow">→</span>
          <div class="chain-step"><small>reação</small>Esterificação e derivados</div>
        </div>

        <div class="grid grid-3">
          <Reveal :delay="60">
            <div class="card">
              <p class="panel-label">Maior cadeia carbônica</p>
              <p style="margin: 0">↓ solubilidade em água &nbsp;·&nbsp; ↑ ponto de ebulição (em geral).</p>
            </div>
          </Reveal>
          <Reveal :delay="140">
            <div class="card">
              <p class="panel-label">Mais ramificações</p>
              <p style="margin: 0">Menor área de contato → interações mais fracas → P.E. menor.</p>
            </div>
          </Reveal>
          <Reveal :delay="220">
            <div class="card">
              <p class="panel-label">Vários grupos –COOH</p>
              <p style="margin: 0">Mais ligações de H e acidez acentuada (ex.: ácido cítrico, triácido).</p>
            </div>
          </Reveal>
        </div>

        <div class="panel card-amber" style="margin-top: 2rem">
          <p style="margin: 0">
            <strong>Frase para a apresentação:</strong> “Se eu entender como a estrutura da carboxila
            controla polaridade, interações e equilíbrio ácido-base, eu consigo <em>deduzir</em> o
            comportamento de qualquer ácido carboxílico — mesmo de uma molécula que eu nunca vi.”
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---------- decomposição ---------- */
.decomp {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.1rem;
}

.decomp .molecule-figure {
  width: min(270px, 100%);
}

.decomp-op {
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: var(--amber);
  padding: 0 0.2rem;
}

@media (max-width: 700px) {
  .decomp-op {
    transform: rotate(90deg);
    font-size: 1.6rem;
  }
}

/* ---------- ressonância ---------- */
.resonance {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
}

.resonance .molecule-figure {
  width: min(230px, 100%);
}

.res-arrow {
  font-family: var(--font-mono);
  font-size: 2.4rem;
  color: var(--amber);
  animation: arrowPulse 2.4s ease-in-out infinite;
}

@keyframes arrowPulse {
  0%,
  100% {
    transform: translateX(0);
    opacity: 0.6;
  }
  50% {
    transform: translateX(6px);
    opacity: 1;
  }
}

/* ---------- dipolo ---------- */
.dipole {
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.4rem 1.2rem 1.2rem;
  text-align: center;
  overflow: hidden;
  max-width: 360px;
  margin: 0 auto;
  width: 100%;
}

.dipole-polo {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--muted);
}

.dipole-polo span {
  display: block;
  font-size: 1rem;
  color: var(--text-soft);
  letter-spacing: 0.3em;
}

.dipole-fade {
  height: 4px;
  background: linear-gradient(90deg, var(--surface-3), rgba(255, 107, 94, 0.35));
  border-radius: 4px;
  margin: 0.9rem 0;
}

.dipole-cabeça {
  width: 150px;
  margin: 0 auto;
}

.dipole-charge {
  position: absolute;
  top: 1.2rem;
  right: 1.4rem;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 107, 94, 0.16);
  border: 1px solid rgba(255, 107, 94, 0.5);
  color: var(--red);
  font-family: var(--font-mono);
  font-weight: 600;
  animation: arrowPulse 3s ease-in-out infinite;
}

/* ---------- simulador ---------- */
.sim {
  display: grid;
  gap: 1.5rem;
}

.sim-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    var(--amber) 0%,
    var(--amber) var(--pct),
    var(--surface-3) var(--pct),
    var(--surface-3) 100%
  );
  outline: none;
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--amber), var(--amber-2));
  border: 3px solid var(--bg-2);
  box-shadow: 0 4px 14px rgba(255, 168, 46, 0.6);
}

.slider::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--amber);
  border: 3px solid var(--bg-2);
  box-shadow: 0 4px 14px rgba(255, 168, 46, 0.6);
}

.sim-labels {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--muted);
}

.sim-body {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 2rem;
  align-items: end;
}

@media (max-width: 860px) {
  .sim-body {
    grid-template-columns: 1fr;
  }
}

.sim-meter-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.6rem;
  font-size: 0.92rem;
  color: var(--text-soft);
}

.sim-meter-head strong {
  color: var(--amber);
  font-family: var(--font-mono);
  font-size: 0.86rem;
}

.meter-track {
  height: 14px;
  border-radius: 10px;
  background: var(--surface-3);
  overflow: hidden;
  border: 1px solid var(--line);
}

.meter-fill {
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--mint), var(--amber));
  transition: width 0.45s var(--ease-out);
}

.sim-bars-title {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.7rem;
}

.bars {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  height: 170px;
}

.bar-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.3rem;
  height: 100%;
}

.bar-val {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  color: var(--muted);
}

.bar {
  width: 100%;
  max-width: 46px;
  border-radius: 7px 7px 3px 3px;
  background: linear-gradient(180deg, var(--surface-3), var(--surface-3));
  border: 1px solid var(--line);
  transition: background 0.3s ease, box-shadow 0.3s ease, height 0.5s var(--ease-out);
  min-height: 4px;
}

.bar-col.active .bar {
  background: linear-gradient(180deg, var(--amber), var(--amber-2));
  box-shadow: 0 8px 22px -6px rgba(255, 168, 46, 0.55);
}

.bar-label {
  font-size: 0.66rem;
  color: var(--muted);
  text-align: center;
}

/* ---------- dímero ---------- */
.dimer {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--bg-2);
  padding: 1rem;
  text-align: center;
}

.dimer svg {
  width: 100%;
  max-width: 380px;
  height: auto;
}

.dimer .caption {
  margin-top: 0.6rem;
}
</style>
