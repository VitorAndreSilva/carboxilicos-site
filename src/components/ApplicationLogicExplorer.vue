<script setup>
import { computed, ref } from 'vue'

const properties = [
  {
    id: 'acidez', icon: 'H⁺', title: 'Acidez e pH',
    principle: 'A carboxila pode doar H⁺ e formar um carboxilato. A proporção entre as duas formas depende do pH e do pKa.',
    effect: 'Permite acidificar, tamponar e influenciar o crescimento de microrganismos.',
    examples: ['Conservação de alimentos', 'Reguladores de acidez', 'Fermentações'],
  },
  {
    id: 'polaridade', icon: 'δ', title: 'Polaridade',
    principle: 'Os dois oxigênios criam uma região polar capaz de interagir com água e outras moléculas por ligações de hidrogênio.',
    effect: 'Afeta solubilidade, ponto de ebulição, formulação e transporte em meios biológicos.',
    examples: ['Solventes e formulações', 'Metabolismo celular', 'Separações químicas'],
  },
  {
    id: 'cadeia', icon: 'R', title: 'Cadeia carbônica',
    principle: 'A parte R pode ser curta, longa, aromática, saturada ou insaturada. Ela modifica profundamente o comportamento da carboxila.',
    effect: 'Cadeias curtas favorecem interação com água; cadeias longas criam regiões apolares úteis em lipídios e tensoativos.',
    examples: ['Sabões', 'Membranas celulares', 'Biodiesel'],
  },
  {
    id: 'reatividade', icon: '⇄', title: 'Reatividade',
    principle: 'A carboxila pode formar sais, ésteres, amidas e polímeros por transformações químicas controladas.',
    effect: 'Uma mesma família molecular origina aromas, fármacos, materiais e intermediários industriais.',
    examples: ['Ésteres aromáticos', 'Polímero PLA', 'Síntese de fármacos'],
  },
]

const activeId = ref('acidez')
const active = computed(() => properties.find((property) => property.id === activeId.value))
</script>

<template>
  <div class="logic-explorer">
    <div class="logic-tabs" role="tablist" aria-label="Propriedades ligadas às aplicações">
      <button v-for="property in properties" :key="property.id" type="button" role="tab"
        :aria-selected="activeId === property.id" :class="{ active: activeId === property.id }" @click="activeId = property.id">
        <span>{{ property.icon }}</span>{{ property.title }}
      </button>
    </div>
    <div class="logic-panel" role="tabpanel">
      <div class="logic-step"><small>01 · Propriedade</small><h3>{{ active.title }}</h3><p>{{ active.principle }}</p></div>
      <span class="logic-arrow" aria-hidden="true">→</span>
      <div class="logic-step"><small>02 · Consequência</small><h3>O que ela permite</h3><p>{{ active.effect }}</p></div>
      <span class="logic-arrow" aria-hidden="true">→</span>
      <div class="logic-step logic-step--result"><small>03 · Aplicações</small><h3>Onde percebemos</h3><ul><li v-for="example in active.examples" :key="example">{{ example }}</li></ul></div>
    </div>
  </div>
</template>

<style scoped>
.logic-explorer{border:1px solid var(--line);border-radius:var(--radius-lg);background:var(--surface);overflow:hidden}.logic-tabs{display:grid;grid-template-columns:repeat(4,1fr);padding:.55rem;border-bottom:1px solid var(--line);background:var(--bg-2)}.logic-tabs button{display:flex;align-items:center;justify-content:center;gap:.45rem;min-height:46px;padding:.55rem;border:0;border-radius:var(--radius-sm);background:transparent;color:var(--muted);font:600 .74rem var(--font-body);cursor:pointer}.logic-tabs button span{color:var(--amber);font:700 .72rem var(--font-mono)}.logic-tabs button.active{background:rgba(255,200,87,.1);color:var(--text)}.logic-tabs button:focus-visible{outline:2px solid var(--amber);outline-offset:-2px}.logic-panel{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:1rem;align-items:center;padding:1.35rem}.logic-step{min-height:190px;padding:1.2rem;border:1px solid var(--line);border-radius:var(--radius);background:linear-gradient(180deg,var(--surface-2),var(--surface))}.logic-step small{color:var(--amber);font:.62rem var(--font-mono);letter-spacing:.08em;text-transform:uppercase}.logic-step h3{margin:.6rem 0;font-size:1.1rem}.logic-step p,.logic-step li{font-size:.8rem}.logic-step p{margin:0}.logic-step ul{margin:.2rem 0 0;padding-left:1.1rem;color:var(--text-soft)}.logic-step--result{border-color:rgba(108,242,176,.26)}.logic-arrow{color:var(--amber);font-size:1.25rem}
@media(max-width:760px){.logic-tabs{grid-template-columns:1fr 1fr}.logic-tabs button{justify-content:flex-start;padding-inline:.75rem}.logic-panel{grid-template-columns:1fr}.logic-step{min-height:0}.logic-arrow{transform:rotate(90deg);justify-self:center;line-height:1}}
@media(max-width:390px){.logic-tabs{grid-template-columns:1fr}.logic-tabs button{min-height:40px}.logic-panel{padding:.8rem}.logic-step{padding:1rem}}
</style>
