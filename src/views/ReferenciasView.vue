<script setup>
import PageHero from '../components/PageHero.vue'
import Reveal from '../components/Reveal.vue'

const grupos = [
  {
    id: 'estrutura',
    titulo: 'Estrutura',
    icone: 'est',
    descricao: 'Fontes sobre a estrutura, propriedades físico-químicas, ligações de hidrogênio e ácidos graxos da classe.',
    refs: [
      { url: 'https://cesad.ufs.br/ORBI/public/uploadCatalago/10043808042014Quimica_dos_Compostos_Organicos_II_Aula_3.pdf', titulo: 'Química dos Compostos Orgânicos II — Aula 3' },
      { url: 'https://brasilescola.uol.com.br/quimica/ligacoes-hidrogenio.htm', titulo: 'Ligações de hidrogênio' },
      { url: 'https://brasilescola.uol.com.br/quimica/forcas-dipolo-induzido-dipolo-induzido-ou-dispersao-london.htm', titulo: 'Forças de dispersão de London' },
      { url: 'https://brasilescola.uol.com.br/quimica/forca-intermolecular-dipolo-dipolo.htm', titulo: 'Força intermolecular dipolo-dipolo' },
      { url: 'https://pt.scienceaq.com/Physics/100418568.html', titulo: 'Propriedades físico-químicas' },
      { url: 'https://binatural.com.br/acidos-graxos/', titulo: 'Ácidos graxos' },
      { url: 'https://querobolsa.com.br/enem/quimica/acidos-carboxilicos', titulo: 'Ácidos carboxílicos' },
      { url: 'https://mundoeducacao.uol.com.br/quimica/os-acidos-carboxilicos.htm', titulo: 'Os ácidos carboxílicos' },
    ],
  },
  {
    id: 'importancia',
    titulo: 'Importância',
    icone: 'imp',
    descricao: 'Fontes sobre a importância tecnológica, industrial e doméstica dos ácidos carboxílicos.',
    refs: [
      { url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1127036/analise-evolutiva-dos-acidos-carboxilicos-de-base-biologica-na-industria-internacional', titulo: 'Análise evolutiva dos ácidos carboxílicos de base biológica na indústria internacional' },
      { url: 'https://brasilescola.uol.com.br/quimica/quimica-dos-saboes-detergentes.htm', titulo: 'Química dos sabões e detergentes' },
      { url: 'https://www.trillquimica.com.br/blog/acidos-graxos/voce-sabe-mesmo-o-que-sao-acidos-graxos/', titulo: 'Você sabe mesmo o que são ácidos graxos?' },
      { url: 'https://www.boticario.com.br/dicas-de-beleza/acido-salicilico-beneficios-do-ativo-para-a-pele/', titulo: 'Ácido salicílico — benefícios do ativo para a pele' },
      { url: 'https://www.products.pcc.eu/pt/blog/acido-acetico-propriedades-e-aplicacoes-unicas/', titulo: 'Ácido acético — propriedades e aplicações únicas' },
    ],
  },
  {
    id: 'historico',
    titulo: 'Histórico',
    icone: 'his',
    descricao: 'Fontes sobre o contexto histórico e a trajetória da classe dos ácidos carboxílicos.',
    refs: [
      { url: 'https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_(Morsch_et_al.)/20%3A_Carboxylic_Acids_and_Nitriles/20.00%3A_Chapter_Objectives_and_Introduction_to_Carboxylic_Acids', titulo: 'Organic Chemistry — Introduction to Carboxylic Acids (LibreTexts)' },
      { url: 'https://brasilescola.uol.com.br/quimica/Acido-acetico.htm', titulo: 'Ácido acético' },
    ],
  },
]
</script>

<template>
  <div class="page">
    <PageHero
      eixo="Referências"
      kicker="Fontes consultadas · por assunto"
      title="Referências do Guia"
      lead="Todas as fontes que embasaram o conteúdo deste site, organizadas pelos três grandes temas: estrutura, importância e histórico."
      :chips="['Estrutura', 'Importância', 'Histórico', 'Fontes confiáveis']"
    />

    <section class="section">
      <div class="container">
        <Reveal>
          <div class="section-head">
            <p class="kicker">Organização</p>
            <h2>Referências <span class="grad-text">separadas por assunto</span></h2>
            <p class="lead">
              Cada grupo reúne os links consultados sobre aquele tema. Clique em um título para
              abrir a fonte em uma nova aba.
            </p>
          </div>
        </Reveal>

        <div class="ref-groups">
          <Reveal v-for="(g, gi) in grupos" :key="g.id" :delay="gi * 90">
            <section class="panel ref-group">
              <div class="ref-head">
                <span class="ref-badge" :class="`ref-badge--${g.icone}`">{{ g.icone }}</span>
                <div>
                  <h3>{{ g.titulo }}</h3>
                  <p class="small" style="margin: 0.2rem 0 0">{{ g.descricao }}</p>
                </div>
              </div>
              <ul class="ref-list">
                <li v-for="r in g.refs" :key="r.url">
                  <a :href="r.url" target="_blank" rel="noopener noreferrer" class="ref-link">
                    <span class="ref-url" aria-hidden="true">{{ r.url.replace('https://', '').split('/')[0] }}</span>
                    <span class="ref-title">{{ r.titulo }}</span>
                    <svg class="ref-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                    </svg>
                  </a>
                </li>
              </ul>
            </section>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="section section-tight" style="border-top: 1px solid var(--line)">
      <div class="container">
        <Reveal>
          <div class="panel card-amber">
            <div class="ref-foot">
              <p style="margin: 0">
                <strong>Nota:</strong> os endereços foram verificados durante a elaboração do material.
                Alguns links podem sofrer alterações de URL pelas instituições mantenedoras.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ref-groups {
  display: grid;
  gap: 1.4rem;
  margin-top: 2rem;
}

.ref-group {
  padding: 1.4rem 1.5rem;
}

.ref-head {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.ref-head h3 {
  margin: 0;
  font-size: 1.3rem;
}

.ref-badge {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  flex-shrink: 0;
}

.ref-badge--est {
  background: rgba(111, 178, 255, 0.14);
  color: #6fb2ff;
  border: 1px solid rgba(111, 178, 255, 0.35);
}

.ref-badge--imp {
  background: rgba(255, 168, 46, 0.14);
  color: var(--amber);
  border: 1px solid rgba(255, 168, 46, 0.35);
}

.ref-badge--his {
  background: rgba(126, 217, 168, 0.14);
  color: var(--mint);
  border: 1px solid rgba(126, 217, 168, 0.35);
}

.ref-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.7rem;
}

.ref-list li {
  margin: 0;
}

.ref-link {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.9rem;
  padding: 0.85rem 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--bg-2);
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s var(--ease-out), background 0.2s ease;
}

.ref-link:hover {
  border-color: rgba(255, 200, 87, 0.5);
  background: var(--surface-2);
  transform: translateX(4px);
}

.ref-url {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--muted);
  background: var(--surface-3);
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  white-space: nowrap;
}

.ref-title {
  font-size: 0.95rem;
  color: var(--text);
  line-height: 1.3;
}

.ref-arrow {
  color: var(--amber);
  flex-shrink: 0;
  opacity: 0.6;
  transition: opacity 0.2s ease, transform 0.2s var(--ease-out);
}

.ref-link:hover .ref-arrow {
  opacity: 1;
  transform: translate(2px, -2px);
}

.ref-foot {
  max-width: 72ch;
}

@media (max-width: 520px) {
  .ref-link {
    grid-template-columns: 1fr auto;
  }
  .ref-url {
    grid-column: 1 / -1;
    justify-self: start;
  }
}
</style>
