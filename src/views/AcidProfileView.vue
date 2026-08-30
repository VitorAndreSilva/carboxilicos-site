<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MoleculeShowcase from '../components/MoleculeShowcase.vue'
import PageHero from '../components/PageHero.vue'
import Reveal from '../components/Reveal.vue'
import profiles, { acidProfileList } from '../data/acidProfiles'

const route = useRoute()
const profile = computed(() => profiles[route.params.slug])
const related = computed(() => acidProfileList.filter((item) => item.slug !== profile.value?.slug).slice(0, 3))
</script>

<template>
  <div v-if="profile" class="page profile-page">
    <div class="container detail-nav"><RouterLink to="/aplicacoes" class="back-link">← Voltar para aplicações</RouterLink></div>
    <PageHero eixo="Perfil molecular" kicker="Estrutura, contexto e aplicação" :title="profile.name" :lead="profile.lead" :chips="profile.chips">
      <template #media>
        <MoleculeShowcase :atoms="[]" :bonds="[]" view="0 0 1 1" :name="profile.name" has3d
          :molecule-path="profile.moleculePath" :formula="profile.formula" :model-name="profile.name" :atom-counts="profile.atomCounts" initial-mode="3d" :show2d="false" />
      </template>
    </PageHero>

    <section class="section section-tight"><div class="container facts-grid">
      <article><small>Fórmula</small><strong>{{ profile.formula }}</strong></article>
      <article><small>Estrutura condensada</small><strong>{{ profile.structuralFormula }}</strong></article>
      <article><small>Massa molar</small><strong>{{ profile.molarMass }}</strong></article>
      <article><small>Acidez</small><strong>pKa {{ profile.pKa }}</strong></article>
    </div></section>

    <section class="section bordered"><div class="container profile-layout">
      <Reveal><div class="profile-heading"><p class="kicker">Identidade molecular</p><h2>Como ler sua <span class="grad-text">estrutura</span></h2><p class="lead">Nome IUPAC: {{ profile.iupac }}. Observe no 3D como a geometria aproxima — ou separa — as regiões polares e apolares.</p></div></Reveal>
      <div class="profile-points"><Reveal v-for="(point, index) in profile.identity" :key="point" :delay="index * 60"><article class="card"><span>0{{ index + 1 }}</span><p>{{ point }}</p></article></Reveal></div>
    </div></section>

    <section class="section journey-section"><div class="container"><Reveal><div class="section-head"><p class="kicker">Do contexto ao uso</p><h2>Uma molécula em <span class="grad-text">três escalas</span></h2></div></Reveal>
      <div class="journey-grid"><Reveal v-for="(stage, index) in profile.journey" :key="stage.title" :delay="index * 70"><article class="card"><small>Etapa 0{{ index + 1 }}</small><h3>{{ stage.title }}</h3><p>{{ stage.text }}</p></article></Reveal></div>
    </div></section>

    <section class="section bordered"><div class="container use-layout"><Reveal><div><p class="kicker">Aplicações principais</p><h2>Onde ela se torna <span class="grad-text">útil</span></h2><ul class="clean tick"><li v-for="item in profile.applications" :key="item">{{ item }}</li></ul></div></Reveal><Reveal :delay="100"><aside class="safety card"><b>Uso com contexto</b><p>{{ profile.safety }}</p></aside></Reveal></div></section>

    <section class="section section-tight"><div class="container source-row"><div><p class="kicker">Referência molecular</p><h2>Dados e continuidade</h2><p class="small">Propriedades apresentadas em valores aproximados; condições experimentais podem alterar resultados.</p></div><a class="btn btn-ghost" :href="`https://pubchem.ncbi.nlm.nih.gov/compound/${profile.cid}`" target="_blank" rel="noreferrer">Consultar PubChem CID {{ profile.cid }} ↗</a></div>
      <div class="container related"><p class="panel-label">Explore outros perfis</p><div><RouterLink v-for="item in related" :key="item.slug" :to="`/aplicacoes/${item.slug}`">{{ item.name }} <span>→</span></RouterLink><RouterLink to="/aplicacoes/acido-latico">Ácido lático <span>→</span></RouterLink></div></div>
    </section>
  </div>
  <div v-else class="page"><section class="section"><div class="container"><h1>Molécula não encontrada</h1><RouterLink class="btn btn-primary" to="/aplicacoes">Voltar para aplicações</RouterLink></div></section></div>
</template>

<style scoped>
.profile-page{overflow:hidden}.detail-nav{padding-top:1.25rem;margin-bottom:-1.25rem;position:relative;z-index:2}.back-link{color:var(--muted);font-size:.8rem}.back-link:hover{color:var(--amber)}
:deep(.page-hero__media .molecule-showcase__viewport){height:330px}.facts-grid{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden}.facts-grid article{display:flex;flex-direction:column;padding:1.2rem;border-right:1px solid var(--line);background:var(--surface)}.facts-grid article:last-child{border:0}.facts-grid small,.journey-grid small{color:var(--muted);font: .62rem var(--font-mono);text-transform:uppercase}.facts-grid strong{font:600 .86rem var(--font-mono);margin-top:.3rem}.bordered{border-top:1px solid var(--line)}
.profile-layout,.use-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(2rem,6vw,5rem);align-items:start}.profile-heading{position:sticky;top:130px}.profile-points{display:grid;gap:1rem}.profile-points article{display:grid;grid-template-columns:auto 1fr;gap:1rem}.profile-points span{color:var(--amber);font:.7rem var(--font-mono)}.profile-points p{margin:0}.journey-section{background:var(--bg-2)}.journey-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.journey-grid article{height:100%}.journey-grid p{margin:0;font-size:.88rem}.use-layout{grid-template-columns:1.1fr .9fr;align-items:center}.safety{border-color:rgba(255,200,87,.3)}.safety p{margin:.5rem 0 0}.source-row{display:flex;justify-content:space-between;gap:2rem;align-items:center}.related{margin-top:2rem}.related>div{display:grid;grid-template-columns:repeat(4,1fr);gap:.7rem}.related a{display:flex;justify-content:space-between;padding:.8rem;border:1px solid var(--line);border-radius:var(--radius-sm);font-size:.75rem}.related a:hover{border-color:var(--amber);color:var(--amber)}
@media(max-width:800px){.facts-grid{grid-template-columns:1fr 1fr}.facts-grid article{border-bottom:1px solid var(--line)}.profile-layout,.use-layout{grid-template-columns:1fr}.profile-heading{position:static}.journey-grid{grid-template-columns:1fr}.source-row{align-items:flex-start;flex-direction:column}.related>div{grid-template-columns:1fr 1fr}}
</style>
