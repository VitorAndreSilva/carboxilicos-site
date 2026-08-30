<script setup>
import { computed, ref, watch } from 'vue'

const processes = [
  {
    id: 'esterification', name: 'Esterificação', tag: 'Aromas e solventes', reversible: true,
    equation: 'R–COOH + R′–OH ⇌ R–COO–R′ + H₂O',
    steps: [
      { label: 'Reagentes', title: 'Ácido carboxílico + álcool', text: 'A carboxila fornece a parte acila; o álcool fornece o grupo que ficará ligado ao oxigênio.', items: [{symbol:'COOH',name:'Ácido carboxílico',tone:'acid'},{symbol:'OH',name:'Álcool',tone:'alcohol'}] },
      { label: 'Condição', title: 'Catálise ácida e aquecimento', text: 'O catalisador facilita as transferências de prótons. Como é um equilíbrio, as condições influenciam o rendimento.', items: [{symbol:'H⁺',name:'Catalisador',tone:'energy'},{symbol:'Δ',name:'Aquecimento',tone:'energy'}] },
      { label: 'Produtos', title: 'Éster + água', text: 'Muitos ésteres têm odores característicos e também são empregados como solventes e intermediários.', items: [{symbol:'COO',name:'Éster',tone:'product'},{symbol:'H₂O',name:'Água',tone:'water'}] },
    ],
    example: 'Ácido acético + álcool isoamílico → acetato de isoamila, associado ao aroma de banana.',
  },
  {
    id: 'saponification', name: 'Saponificação', tag: 'Sabões', reversible: false,
    equation: 'Triglicerídeo + 3 NaOH → glicerol + 3 R–COO⁻Na⁺',
    steps: [
      { label: 'Reagentes', title: 'Gordura ou óleo + base forte', text: 'Triglicerídeos são triésteres formados por glicerol e três ácidos graxos. A base ataca suas ligações éster.', items: [{symbol:'≋',name:'Triglicerídeo',tone:'fat'},{symbol:'NaOH',name:'Base',tone:'base'}] },
      { label: 'Transformação', title: 'Hidrólise básica dos ésteres', text: 'As três ligações éster são rompidas. Formam-se glicerol e íons carboxilato associados ao sódio.', items: [{symbol:'3×',name:'Ligações rompidas',tone:'energy'},{symbol:'OH⁻',name:'Hidrólise',tone:'base'}] },
      { label: 'Produtos', title: 'Sabão + glicerol', text: 'Cada carboxilato possui cabeça iônica e cauda apolar, combinação que permite envolver gordura em micelas.', items: [{symbol:'RCOO⁻',name:'Sabão',tone:'product'},{symbol:'C₃H₈O₃',name:'Glicerol',tone:'water'}] },
    ],
    example: 'A cauda do sabão interage com a gordura; a cabeça carboxilato interage com a água e ajuda a removê-la.',
  },
  {
    id: 'biodiesel', name: 'Transesterificação', tag: 'Biodiesel', reversible: true,
    equation: 'Triglicerídeo + 3 CH₃OH ⇌ glicerol + 3 R–COOCH₃',
    steps: [
      { label: 'Reagentes', title: 'Óleo + álcool de cadeia curta', text: 'O processo parte de triglicerídeos e, frequentemente, metanol. Um catalisador acelera a troca dos grupos do éster.', items: [{symbol:'≋',name:'Óleo',tone:'fat'},{symbol:'CH₃OH',name:'Metanol',tone:'alcohol'}] },
      { label: 'Transformação', title: 'Troca do grupo alcoólico', text: 'As cadeias de ácidos graxos deixam o glicerol e passam a formar ésteres metílicos.', items: [{symbol:'⇄',name:'Transesterificação',tone:'energy'},{symbol:'cat.',name:'Catalisador',tone:'base'}] },
      { label: 'Produtos', title: 'Biodiesel + glicerol', text: 'A mistura de ésteres de ácidos graxos constitui o biodiesel; o glicerol aparece como coproduto.', items: [{symbol:'RCOOCH₃',name:'Biodiesel',tone:'product'},{symbol:'C₃H₈O₃',name:'Glicerol',tone:'water'}] },
    ],
    example: 'A composição do óleo determina as cadeias presentes nos ésteres e influencia propriedades do combustível.',
  },
]

const activeId = ref('esterification')
const step = ref(0)
const active = computed(() => processes.find((process) => process.id === activeId.value))
const current = computed(() => active.value.steps[step.value])
watch(activeId, () => { step.value = 0 })
</script>

<template>
  <div class="process-explorer">
    <div class="process-tabs" role="tablist" aria-label="Processos envolvendo ácidos carboxílicos">
      <button v-for="process in processes" :key="process.id" type="button" role="tab" :aria-selected="activeId === process.id"
        :class="{ active: activeId === process.id }" @click="activeId = process.id">
        {{ process.name }} <small>{{ process.tag }}</small>
      </button>
    </div>

    <div class="process-stage" role="tabpanel">
      <div class="process-topline"><span>{{ active.reversible ? 'Processo reversível' : 'Hidrólise em meio básico' }}</span><code>{{ active.equation }}</code></div>
      <div class="step-track">
        <button v-for="(item, index) in active.steps" :key="item.label" type="button" :class="{ active: step === index, done: step > index }" @click="step = index">
          <b>{{ index + 1 }}</b><span>{{ item.label }}</span>
        </button>
      </div>

      <Transition name="process-change" mode="out-in">
        <div :key="`${activeId}-${step}`" class="process-content">
          <div class="process-copy"><small>Etapa {{ step + 1 }} de 3</small><h3>{{ current.title }}</h3><p>{{ current.text }}</p></div>
          <div class="molecule-pair" aria-label="Representação simbólica da etapa">
            <template v-for="(item, index) in current.items" :key="item.name">
              <span v-if="index" class="plus">{{ step === 1 ? '→' : '+' }}</span>
              <div class="process-token" :class="`process-token--${item.tone}`"><b>{{ item.symbol }}</b><small>{{ item.name }}</small></div>
            </template>
          </div>
        </div>
      </Transition>

      <div v-if="activeId === 'saponification' && step === 2" class="process-illustration micelle-illustration" role="img" aria-label="Micela de sabão envolvendo uma gotícula de gordura">
        <div class="micelle-core">gordura</div>
        <i v-for="index in 12" :key="index" :style="{ '--rotation': `${index * 30}deg` }"><b></b></i>
        <p>Caudas apolares voltadas para a gordura · cabeças carboxilato voltadas para a água</p>
      </div>
      <div v-else-if="activeId === 'biodiesel' && step === 2" class="process-illustration phase-illustration" role="img" aria-label="Recipiente com fase superior de biodiesel e fase inferior de glicerol">
        <div class="phase-vessel"><span class="phase-biodiesel">Biodiesel <small>fase menos densa</small></span><span class="phase-glycerol">Glicerol <small>fase mais densa</small></span></div>
        <p>Após decantação, as fases podem ser separadas; etapas de purificação ainda são necessárias.</p>
      </div>
      <p v-else-if="activeId === 'esterification' && step === 2" class="ester-safety"><b>Atenção:</b> odor característico não torna um éster automaticamente próprio para ingestão. Pureza, dose e regulamentação importam.</p>

      <div class="process-footer"><p><b>No cotidiano:</b> {{ active.example }}</p><div><button type="button" :disabled="step === 0" @click="step--">← Anterior</button><button type="button" :disabled="step === 2" @click="step++">Próxima →</button></div></div>
    </div>
  </div>
</template>

<style scoped>
.process-explorer{overflow:hidden;border:1px solid var(--line);border-radius:var(--radius-lg);background:var(--surface)}.process-tabs{display:grid;grid-template-columns:repeat(3,1fr);padding:.55rem;background:var(--bg-2);border-bottom:1px solid var(--line)}.process-tabs button{display:flex;flex-direction:column;align-items:flex-start;gap:.1rem;padding:.7rem .85rem;border:0;border-radius:var(--radius-sm);background:transparent;color:var(--muted);font:700 .75rem var(--font-body);cursor:pointer}.process-tabs small{color:var(--muted-2);font:500 .56rem var(--font-mono)}.process-tabs button.active{background:rgba(255,200,87,.1);color:var(--amber)}.process-tabs button:focus-visible,.step-track button:focus-visible,.process-footer button:focus-visible{outline:2px solid var(--amber);outline-offset:-2px}.process-stage{padding:1.25rem}.process-topline{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding-bottom:1rem}.process-topline>span{color:var(--muted);font:.6rem var(--font-mono);text-transform:uppercase}.process-topline code{color:var(--amber);font:.74rem var(--font-mono);text-align:right}.step-track{display:grid;grid-template-columns:repeat(3,1fr);position:relative;margin-bottom:1rem}.step-track::before{content:'';position:absolute;top:1rem;right:16%;left:16%;height:1px;background:var(--line-strong)}.step-track button{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:.25rem;border:0;background:transparent;color:var(--muted);font:.6rem var(--font-mono);cursor:pointer}.step-track b{display:grid;place-items:center;width:2rem;height:2rem;border:1px solid var(--line-strong);border-radius:50%;background:var(--surface);color:var(--muted)}.step-track button.active b,.step-track button.done b{border-color:var(--amber);background:var(--amber);color:var(--on-accent)}.process-content{display:grid;grid-template-columns:.85fr 1.15fr;gap:1.5rem;align-items:center;min-height:230px;padding:1.4rem;border:1px solid var(--line);border-radius:var(--radius);background:radial-gradient(circle at 75% 50%,rgba(111,178,255,.08),transparent 42%),var(--bg-2)}.process-copy>small{color:var(--amber);font:.6rem var(--font-mono);text-transform:uppercase}.process-copy h3{margin:.4rem 0}.process-copy p{margin:0;font-size:.84rem}.molecule-pair{display:flex;align-items:center;justify-content:center;gap:.7rem}.process-token{display:flex;flex-direction:column;align-items:center;justify-content:center;width:125px;aspect-ratio:1;border:1px solid var(--line-strong);border-radius:50%;background:var(--surface);box-shadow:inset -12px -14px 25px rgba(0,0,0,.2),0 14px 30px -20px rgba(0,0,0,.5);text-align:center}.process-token b{font:.76rem var(--font-mono)}.process-token small{margin-top:.3rem;color:var(--muted);font-size:.58rem}.process-token--acid{border-color:rgba(255,107,94,.5)}.process-token--alcohol,.process-token--water{border-color:rgba(111,178,255,.5)}.process-token--energy{border-color:rgba(255,200,87,.55)}.process-token--base{border-color:rgba(108,242,176,.5)}.process-token--product{border-color:rgba(108,242,176,.55);background:rgba(108,242,176,.06)}.process-token--fat{border-color:rgba(255,168,46,.5)}.plus{color:var(--amber);font-size:1.2rem}.process-footer{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding-top:1rem}.process-footer p{max-width:68ch;margin:0;font-size:.72rem}.process-footer>div{display:flex;gap:.4rem}.process-footer button{padding:.45rem .65rem;border:1px solid var(--line-strong);border-radius:999px;background:var(--surface-2);color:var(--text-soft);font:600 .62rem var(--font-body);cursor:pointer}.process-footer button:disabled{opacity:.35;cursor:not-allowed}.process-change-enter-active,.process-change-leave-active{transition:opacity .2s ease,transform .2s ease}.process-change-enter-from{opacity:0;transform:translateX(12px)}.process-change-leave-to{opacity:0;transform:translateX(-12px)}
.process-illustration,.ester-safety{position:relative;min-height:170px;margin-top:1rem;padding:1rem;border:1px solid var(--line);border-radius:var(--radius);background:var(--bg-2)}.process-illustration>p,.ester-safety{color:var(--text-soft);font-size:.68rem}.process-illustration>p{position:absolute;right:1rem;bottom:.7rem;left:1rem;margin:0;text-align:center}.micelle-illustration{display:grid;place-items:center}.micelle-core{display:grid;place-items:center;width:74px;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffd27a,#a85f18);color:#251302;font:700 .62rem var(--font-mono)}.micelle-illustration i{position:absolute;width:116px;height:4px;transform:rotate(var(--rotation));animation:micelleIn .7s ease both}.micelle-illustration i b{position:absolute;right:0;width:11px;height:11px;border-radius:50%;background:var(--blue);transform:translateY(-4px)}.micelle-illustration i::before{content:'';position:absolute;right:8px;width:35px;height:3px;border-radius:2px;background:var(--amber)}.phase-illustration{display:grid;place-items:center}.phase-vessel{display:flex;flex-direction:column;width:190px;height:120px;overflow:hidden;border:2px solid var(--line-strong);border-top:0;border-radius:0 0 24px 24px}.phase-vessel>span{display:flex;flex-direction:column;align-items:center;justify-content:center}.phase-biodiesel{flex:1.25;background:rgba(255,200,87,.45);color:#fff0c7}.phase-glycerol{flex:.75;background:rgba(111,178,255,.5);color:#e5f3ff}.phase-vessel small{font-size:.52rem}.ester-safety{min-height:0;margin-bottom:0;border-color:rgba(255,200,87,.26);background:rgba(255,200,87,.04)}@keyframes micelleIn{from{opacity:0;transform:rotate(var(--rotation)) scale(.65)}}
@media(max-width:760px){.process-tabs{grid-template-columns:1fr}.process-tabs button{align-items:center;flex-direction:row;justify-content:space-between}.process-topline{align-items:flex-start;flex-direction:column}.process-topline code{text-align:left}.process-content{grid-template-columns:1fr}.process-token{width:min(29vw,110px)}.process-footer{align-items:flex-start;flex-direction:column}.process-footer>div{align-self:stretch}.process-footer button{flex:1}}
@media(max-width:390px){.process-stage{padding:.8rem}.process-content{padding:1rem}.molecule-pair{gap:.35rem}.process-token{width:95px}.process-token b{font-size:.66rem}.plus{font-size:.9rem}}
@media(prefers-reduced-motion:reduce){.process-change-enter-active,.process-change-leave-active{transition:none}.micelle-illustration i{animation:none}}
</style>
