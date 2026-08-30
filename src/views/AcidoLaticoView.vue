<script setup>
import AcidBaseSimulator from '../components/AcidBaseSimulator.vue'
import MoleculeShowcase from '../components/MoleculeShowcase.vue'
import PageHero from '../components/PageHero.vue'
import PolymerChainModel from '../components/PolymerChainModel.vue'
import Reveal from '../components/Reveal.vue'
import lacticAcid from '../data/lacticAcid'

const baseUrl = import.meta.env.BASE_URL

const facts = [
  { label: 'Fórmula molecular', value: lacticAcid.formula },
  { label: 'Massa molar', value: lacticAcid.molarMass },
  { label: 'Acidez', value: `pKa ≈ ${lacticAcid.pKa}` },
  { label: 'Identificador', value: `PubChem CID ${lacticAcid.pubchemCid}` },
]

const applications = [
  {
    number: '01',
    title: 'Alimentos',
    text: 'Atua como acidulante e regulador de acidez. Também aparece naturalmente em produtos fermentados, nos quais a queda de pH altera sabor, textura e conservação.',
    tag: 'INS / E 270',
  },
  {
    number: '02',
    title: 'Cosméticos',
    text: 'É um alfa-hidroxiácido (AHA). Em formulações adequadas, favorece a esfoliação superficial e pode ser usado para ajustar o pH do produto.',
    tag: 'AHA',
  },
  {
    number: '03',
    title: 'Materiais',
    text: 'É a matéria-prima do PLA, um poliéster de origem renovável empregado em embalagens, filamentos de impressão 3D e aplicações biomédicas.',
    tag: 'PLA',
  },
  {
    number: '04',
    title: 'Farmácia e indústria',
    text: 'Lactatos podem integrar formulações, soluções e processos industriais. O ácido também é usado como intermediário químico e regulador de acidez.',
    tag: 'Lactatos',
  },
]

const sources = [
  {
    label: 'PubChem · Lactic Acid CID 612',
    href: 'https://pubchem.ncbi.nlm.nih.gov/compound/612',
  },
  {
    label: 'NCBI · Gluconeogênese e ciclo de Cori',
    href: 'https://www.ncbi.nlm.nih.gov/books/NBK544346/',
  },
  {
    label: 'FDA · Alpha Hydroxy Acids',
    href: 'https://www.fda.gov/cosmetics/cosmetic-ingredients/alpha-hydroxy-acids',
  },
  {
    label: 'Revisão científica · Síntese e aplicações do PLA',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9229942/',
  },
]
</script>

<template>
  <div class="page lactic-page">
    <div class="container detail-nav">
      <RouterLink to="/aplicacoes" class="back-link">
        <span aria-hidden="true">←</span>
        Voltar para aplicações
      </RouterLink>
    </div>

    <PageHero
      eixo="Perfil molecular · 01"
      kicker="Uma molécula, vários contextos"
      title="Ácido lático"
      lead="Um alfa-hidroxiácido que conecta fermentação, metabolismo, alimentos, cosméticos e materiais biodegradáveis. A mesma estrutura química assume papéis muito diferentes conforme o meio em que está."
      :chips="['C₃H₆O₃', 'AHA', 'Fermentação', 'Metabolismo', 'PLA']"
    >
      <template #media>
        <MoleculeShowcase
          :atoms="lacticAcid.atoms"
          :bonds="lacticAcid.bonds"
          :view="lacticAcid.view"
          :scale="lacticAcid.scale"
          :name="lacticAcid.nome"
          :molecule-path="lacticAcid.moleculePath"
          :formula="lacticAcid.formula"
          :model-name="lacticAcid.nome"
          :atom-counts="lacticAcid.atomCounts"
          has3d
        />
      </template>
    </PageHero>

    <section class="section section-tight">
      <div class="container">
        <Reveal>
          <div class="facts-grid">
            <article v-for="fact in facts" :key="fact.label" class="fact-card">
              <p>{{ fact.label }}</p>
              <strong>{{ fact.value }}</strong>
            </article>
          </div>
        </Reveal>
      </div>
    </section>

    <section class="section detail-section">
      <div class="container detail-grid">
        <Reveal>
          <div class="sticky-heading">
            <p class="kicker">Leitura da estrutura</p>
            <h2>O que torna essa molécula <span class="grad-text">especial?</span></h2>
            <p class="lead">
              O ácido lático reúne uma carboxila e uma hidroxila em carbonos vizinhos. Por isso,
              pertence à família dos alfa-hidroxiácidos.
            </p>
          </div>
        </Reveal>

        <div class="detail-content">
          <Reveal :delay="80">
            <div class="formula-breakdown" aria-label="Fórmula estrutural dividida em três partes">
              <div>
                <span>CH₃</span>
                <small>grupo metila</small>
              </div>
              <b>—</b>
              <div class="formula-focus">
                <span>CH(OH)</span>
                <small>carbono alfa + hidroxila</small>
              </div>
              <b>—</b>
              <div class="formula-acid">
                <span>COOH</span>
                <small>carboxila</small>
              </div>
            </div>
          </Reveal>

          <Reveal :delay="120">
            <article class="explanation-card">
              <span class="explanation-number">01</span>
              <div>
                <h3>É ácido porque pode doar H⁺</h3>
                <p>
                  A carboxila <span class="chem">–COOH</span> pode perder um próton e formar o
                  íon lactato <span class="chem">–COO⁻</span>. Como seu pKa é aproximadamente
                  3,86, em meios próximos do pH fisiológico a forma lactato predomina amplamente.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal :delay="160">
            <article class="explanation-card">
              <span class="explanation-number">02</span>
              <div>
                <h3>O carbono central é assimétrico</h3>
                <p>
                  O carbono 2 está ligado a quatro grupos diferentes. Isso permite duas formas
                  espaciais, os enantiômeros L e D, que são imagens especulares. A estereoquímica
                  influencia como enzimas e microrganismos reconhecem a molécula.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal :delay="200">
            <article class="explanation-card">
              <span class="explanation-number">03</span>
              <div>
                <h3>A hidroxila amplia suas interações</h3>
                <p>
                  Além da carboxila, o grupo <span class="chem">–OH</span> participa de ligações de
                  hidrogênio. Essa combinação contribui para sua afinidade com água e para sua
                  reatividade em processos biológicos e industriais.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="section acid-base-section">
      <div class="container acid-base-layout">
        <Reveal>
          <div>
            <p class="kicker">Modelo interativo</p>
            <h2>Ácido lático ou <span class="grad-text">lactato?</span></h2>
            <p class="lead">
              As duas formas fazem parte do mesmo equilíbrio. Mova o controle de pH para observar
              como a proporção estimada muda em torno do pKa da molécula.
            </p>
          </div>
        </Reveal>
        <Reveal :delay="100">
          <AcidBaseSimulator />
        </Reveal>
      </div>
    </section>

    <section class="section metabolism-section">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">No organismo</p>
            <h2>De glicose a lactato — e <span class="grad-text">de volta à energia</span></h2>
            <p class="lead">
              Lactato não é apenas descarte metabólico. Ele participa do equilíbrio energético e
              pode circular entre tecidos para ser oxidado ou convertido novamente em glicose.
            </p>
          </div>
        </Reveal>

        <Reveal :delay="80">
          <div class="metabolic-flow">
            <div class="flow-node">
              <small>Glicólise</small>
              <strong>Glicose</strong>
              <span>energia química disponível</span>
            </div>
            <span class="flow-arrow" aria-hidden="true">→</span>
            <div class="flow-node flow-node--active">
              <small>Intermediário</small>
              <strong>Piruvato</strong>
              <span>recebe elétrons do NADH</span>
            </div>
            <span class="flow-arrow" aria-hidden="true">⇄</span>
            <div class="flow-node flow-node--accent">
              <small>LDH · regenera NAD⁺</small>
              <strong>Lactato</strong>
              <span>pode sair da célula e ser reutilizado</span>
            </div>
          </div>
        </Reveal>

        <div class="metabolism-notes">
          <Reveal :delay="120">
            <article class="card misconception-card">
              <p class="panel-label">Mito comum</p>
              <h3>“Lactato é o responsável direto pela fadiga.”</h3>
              <p>
                A produção de lactato acompanha o esforço intenso, mas não explica sozinha a queda
                de desempenho. Ela ajuda a regenerar NAD⁺ e permite que a glicólise continue.
                Alterações de pH, disponibilidade de energia e equilíbrio de íons também participam
                da fadiga.
              </p>
            </article>
          </Reveal>

          <Reveal :delay="180">
            <article class="card cori-card">
              <p class="panel-label">Ciclo de Cori</p>
              <h3>Um caminho entre músculo e fígado</h3>
              <p>
                Parte do lactato transportado pelo sangue chega ao fígado, onde pode voltar a formar
                glicose por gliconeogênese. Outros tecidos também conseguem oxidá-lo como combustível.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="section detail-section">
      <div class="container detail-grid">
        <Reveal>
          <div class="sticky-heading">
            <p class="kicker">Produção biotecnológica</p>
            <h2>Fermentação <span class="grad-text">láctica</span></h2>
            <p class="lead">
              Microrganismos transformam carboidratos em lactato, reduzindo o pH do meio e criando
              características sensoriais e de conservação.
            </p>
          </div>
        </Reveal>

        <div class="detail-content">
          <Reveal :delay="60">
            <figure class="context-image">
              <img
                :src="`${baseUrl}images/lactic-acid/fermentation-ai.webp`"
                alt="Iogurte, vegetais fermentados em conserva e pão de fermentação natural sobre uma bancada escura"
                width="1400"
                height="933"
                loading="lazy"
              />
              <figcaption>
                <span class="image-category">Contexto visual</span>
                <strong>Fermentação no cotidiano</strong>
                <p>Iogurte, vegetais fermentados e pão de fermentação natural.</p>
                <small>Imagem ilustrativa gerada por IA · OpenAI, 2026</small>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal :delay="80">
            <div class="fermentation-equation">
              <span>Glicose</span>
              <b>→</b>
              <span>2 piruvatos</span>
              <b>→</b>
              <span class="fermentation-product">2 lactatos</span>
            </div>
          </Reveal>

          <Reveal :delay="130">
            <div class="fermentation-grid">
              <article>
                <strong>1. Substrato</strong>
                <p>Açúcares de leite, vegetais ou outras matérias-primas alimentam o processo.</p>
              </article>
              <article>
                <strong>2. Microrganismos</strong>
                <p>Bactérias lácticas possuem enzimas que direcionam o piruvato para lactato.</p>
              </article>
              <article>
                <strong>3. Acidificação</strong>
                <p>A redução do pH modifica sabor, textura e o crescimento de outros organismos.</p>
              </article>
              <article>
                <strong>4. Produto</strong>
                <p>Iogurtes, queijos, vegetais fermentados e ácido lático para uso industrial.</p>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="section applications-section">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Do alimento ao material</p>
            <h2>Quatro frentes de <span class="grad-text">aplicação</span></h2>
          </div>
        </Reveal>

        <div class="applications-grid">
          <Reveal v-for="(application, index) in applications" :key="application.title" :delay="(index % 2) * 80">
            <article class="application-card card">
              <div class="application-head">
                <span>{{ application.number }}</span>
                <b>{{ application.tag }}</b>
              </div>
              <h3>{{ application.title }}</h3>
              <p>{{ application.text }}</p>
            </article>
          </Reveal>
        </div>

        <Reveal :delay="120">
          <div class="safety-note">
            <div class="safety-icon" aria-hidden="true">!</div>
            <div>
              <strong>Atenção ao contexto cosmético</strong>
              <p>
                Produtos com AHAs podem aumentar temporariamente a sensibilidade da pele ao sol.
                Concentração, pH da formulação e instruções de uso são determinantes; produtos de uso
                profissional não devem ser tratados como equivalentes aos cosméticos domésticos.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section class="section pla-section">
      <div class="container">
        <Reveal>
          <div class="pla-panel">
            <div class="pla-copy">
              <p class="kicker">Química dos polímeros</p>
              <h2>Do ácido lático ao <span class="grad-text">PLA</span></h2>
              <p>
                Uma rota industrial importante converte ácido lático em lactídeo, um dímero cíclico.
                A abertura desse anel forma cadeias longas de poli(ácido lático), ou PLA.
              </p>
              <p class="small">
                Ser produzido a partir de matéria-prima renovável não significa que todo objeto de
                PLA se decomponha rapidamente em qualquer ambiente: temperatura, umidade, espessura
                e condições de compostagem fazem diferença.
              </p>
            </div>
            <figure class="context-image context-image--pla">
              <img
                :src="`${baseUrl}images/lactic-acid/pla-ai.webp`"
                alt="Grânulos translúcidos de PLA, filamento enrolado e pequena peça produzida por impressão 3D"
                width="1400"
                height="933"
                loading="lazy"
              />
              <figcaption>
                <span class="image-category">Ciência dos materiais</span>
                <strong>Do grânulo ao objeto</strong>
                <p>Grânulos, filamento e peça impressa representam formas de uso do PLA.</p>
                <small>Imagem ilustrativa gerada por IA · OpenAI, 2026</small>
              </figcaption>
            </figure>
            <PolymerChainModel />
          </div>
        </Reveal>
      </div>
    </section>

    <section class="section section-tight sources-section">
      <div class="container sources-panel">
        <div>
          <p class="kicker">Para continuar</p>
          <h2>Fontes e leituras técnicas</h2>
        </div>
        <div class="source-links">
          <div class="visual-credit">
            <strong>Créditos visuais</strong>
            <p>
              “Alimentos fermentados” e “Formas de uso do PLA”: imagens ilustrativas geradas por IA
              com a ferramenta de geração de imagens da OpenAI, em agosto de 2026. Não representam
              resultados experimentais nem substituem as fontes científicas desta página.
            </p>
          </div>
          <a v-for="source in sources" :key="source.href" :href="source.href" target="_blank" rel="noreferrer">
            {{ source.label }}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.lactic-page {
  overflow: hidden;
}

.detail-nav {
  padding-top: 1.25rem;
  margin-bottom: -1.25rem;
  position: relative;
  z-index: 2;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 600;
}

.back-link:hover,
.back-link:focus-visible {
  color: var(--amber);
  outline: none;
}

:deep(.page-hero__media .molecule-showcase) {
  box-shadow: var(--shadow);
}

:deep(.page-hero__media .molecule-showcase__viewport) {
  height: 330px;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
  overflow: hidden;
}

.fact-card {
  padding: 1.25rem 1.4rem;
  border-right: 1px solid var(--line);
}

.fact-card:last-child { border-right: 0; }
.fact-card p {
  margin: 0 0 0.25rem;
  color: var(--muted);
  font: 0.66rem var(--font-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.fact-card strong { font-family: var(--font-mono); }

.detail-section {
  border-top: 1px solid var(--line);
}

.detail-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
}

.sticky-heading {
  position: sticky;
  top: 130px;
}

.detail-content {
  display: grid;
  gap: 1rem;
}

.formula-breakdown {
  display: grid;
  grid-template-columns: 1fr auto 1.4fr auto 1fr;
  align-items: stretch;
  gap: 0.55rem;
  margin-bottom: 1rem;
}

.formula-breakdown > div {
  display: grid;
  place-items: center;
  min-height: 110px;
  padding: 0.8rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--surface);
  text-align: center;
}

.formula-breakdown > b { align-self: center; color: var(--muted-2); }
.formula-breakdown span { color: var(--text); font: 700 1rem var(--font-mono); }
.formula-breakdown small { color: var(--muted); font-size: 0.65rem; }
.formula-breakdown .formula-focus { border-color: rgba(111, 178, 255, 0.35); }
.formula-breakdown .formula-acid { border-color: rgba(255, 107, 94, 0.38); }
.formula-breakdown .formula-acid span { color: #ff9289; }

.explanation-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: 1.25rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: linear-gradient(135deg, var(--surface-2), var(--surface));
}

.explanation-number {
  display: grid;
  place-items: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 50%;
  background: rgba(255, 200, 87, 0.1);
  color: var(--amber);
  font: 0.7rem var(--font-mono);
}

.explanation-card h3 { margin: 0 0 0.4rem; font-size: 1.15rem; }
.explanation-card p { margin: 0; font-size: 0.9rem; }

.metabolism-section {
  border-top: 1px solid var(--line);
  background:
    radial-gradient(circle at 50% 30%, rgba(108, 242, 176, 0.06), transparent 35%),
    var(--bg-2);
}

.acid-base-section {
  border-top: 1px solid var(--line);
  background: var(--bg-2);
}

.acid-base-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}

.metabolic-flow {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 1rem;
  align-items: center;
}

.flow-node {
  display: flex;
  flex-direction: column;
  min-height: 150px;
  justify-content: center;
  padding: 1.2rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
}

.flow-node small { color: var(--muted); font: 0.65rem var(--font-mono); text-transform: uppercase; }
.flow-node strong { margin: 0.35rem 0; font-size: 1.2rem; }
.flow-node span { color: var(--muted); font-size: 0.78rem; }
.flow-node--active { border-color: rgba(111, 178, 255, 0.35); }
.flow-node--accent { border-color: rgba(108, 242, 176, 0.35); }
.flow-node--accent strong { color: var(--mint); }
.flow-arrow { color: var(--amber); font-size: 1.5rem; }

.metabolism-notes,
.applications-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin-top: 1.4rem;
}

.metabolism-notes .card { height: 100%; }
.metabolism-notes h3 { font-size: 1.2rem; }
.metabolism-notes p:last-child { margin: 0; font-size: 0.88rem; }
.misconception-card { border-color: rgba(255, 200, 87, 0.26); }
.cori-card { border-color: rgba(108, 242, 176, 0.22); }

.fermentation-equation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.4rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
  font: 700 0.9rem var(--font-mono);
}

.context-image {
  display: grid;
  grid-template-columns: minmax(150px, 0.85fr) minmax(190px, 1.15fr);
  max-width: 620px;
  min-height: 176px;
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: linear-gradient(145deg, var(--surface-2), var(--surface));
  transition: border-color 0.25s ease, transform 0.25s var(--ease-out);
}

.context-image:hover {
  border-color: rgba(255, 200, 87, 0.3);
  transform: translateY(-2px);
}

.context-image img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 176px;
  object-fit: cover;
}

.context-image figcaption {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}

.context-image .image-category {
  margin-bottom: 0.4rem;
  color: var(--amber);
  font: 0.6rem var(--font-mono);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.context-image figcaption strong {
  font-family: var(--font-display);
  font-size: 1.08rem;
  font-weight: 500;
}

.context-image figcaption p {
  margin: 0.35rem 0 0.65rem;
  color: var(--muted);
  font-size: 0.72rem;
  line-height: 1.45;
}

.context-image figcaption small {
  margin-top: auto;
  color: var(--muted-2);
  font: 0.55rem var(--font-mono);
  line-height: 1.35;
}

.fermentation-equation b { color: var(--muted-2); }
.fermentation-product { color: var(--mint); }

.fermentation-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.fermentation-grid article {
  padding: 1.1rem;
  border-left: 2px solid var(--mint);
  background: rgba(108, 242, 176, 0.035);
}

.fermentation-grid strong { font-size: 0.85rem; }
.fermentation-grid p { margin: 0.35rem 0 0; font-size: 0.8rem; }

.applications-section { border-top: 1px solid var(--line); }
.application-card { height: 100%; }
.application-head { display: flex; justify-content: space-between; margin-bottom: 1rem; }
.application-head span { color: var(--muted-2); font: 0.7rem var(--font-mono); }
.application-head b {
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  background: rgba(255, 200, 87, 0.1);
  color: var(--amber);
  font: 0.65rem var(--font-mono);
}
.application-card p { margin: 0; font-size: 0.88rem; }

.safety-note {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  margin-top: 1.4rem;
  padding: 1.2rem;
  border: 1px solid rgba(255, 200, 87, 0.26);
  border-radius: var(--radius);
  background: rgba(255, 200, 87, 0.05);
}

.safety-icon {
  display: grid;
  place-items: center;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  background: var(--amber);
  color: var(--on-accent);
  font-weight: 800;
}
.safety-note p { margin: 0.3rem 0 0; font-size: 0.84rem; }

.pla-section {
  border-top: 1px solid var(--line);
  background: var(--bg-2);
}

.pla-panel {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 1px solid rgba(111, 178, 255, 0.25);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(111, 178, 255, 0.08), var(--surface));
}
.pla-copy p { font-size: 0.9rem; }

.context-image--pla { max-width: none; }

.sources-section { border-top: 1px solid var(--line); }
.sources-panel { display: grid; grid-template-columns: 0.7fr 1.3fr; gap: 2rem; }
.source-links { display: grid; gap: 0.6rem; }
.visual-credit {
  padding: 0.9rem 1rem;
  border: 1px solid rgba(255, 200, 87, 0.25);
  border-radius: var(--radius-sm);
  background: rgba(255, 200, 87, 0.05);
}
.visual-credit strong { color: var(--amber); font-size: 0.78rem; }
.visual-credit p { margin: 0.25rem 0 0; color: var(--muted); font-size: 0.7rem; }
.source-links a {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  color: var(--text-soft);
  font-size: 0.8rem;
}
.source-links a:hover,
.source-links a:focus-visible { border-color: var(--amber); color: var(--amber); outline: none; }

@media (max-width: 900px) {
  .facts-grid { grid-template-columns: repeat(2, 1fr); }
  .fact-card:nth-child(2) { border-right: 0; }
  .fact-card:nth-child(-n + 2) { border-bottom: 1px solid var(--line); }
  .detail-grid,
  .pla-panel,
  .acid-base-layout,
  .sources-panel { grid-template-columns: 1fr; }
  .sticky-heading { position: static; }
}

@media (max-width: 680px) {
  .metabolic-flow { grid-template-columns: 1fr; }
  .flow-arrow { transform: rotate(90deg); text-align: center; }
  .metabolism-notes,
  .applications-grid,
  .fermentation-grid { grid-template-columns: 1fr; }
  .formula-breakdown { grid-template-columns: 1fr; }
  .formula-breakdown > b { transform: rotate(90deg); justify-self: center; }
  .fermentation-equation { align-items: stretch; flex-direction: column; text-align: center; }
  .fermentation-equation b { transform: rotate(90deg); }

  .context-image {
    grid-template-columns: 1fr;
    max-width: 430px;
  }

  .context-image img {
    height: auto;
    min-height: 0;
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 460px) {
  .facts-grid { grid-template-columns: 1fr; }
  .fact-card,
  .fact-card:nth-child(2) { border-right: 0; border-bottom: 1px solid var(--line); }
  .fact-card:last-child { border-bottom: 0; }
}
</style>
