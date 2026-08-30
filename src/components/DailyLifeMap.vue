<script setup>
import { computed, ref } from 'vue'

const contexts = [
  { id:'cozinha', icon:'◉', name:'Cozinha', molecule:'Ácido acético e ácido cítrico', property:'Acidez, solubilidade e controle de pH', application:'Vinagre, bebidas, geleias, conservas e ajuste sensorial.', detail:'A acidificação modifica sabor e pode contribuir para conservação. A eficácia antimicrobiana também depende do pH, do pKa, da concentração e do microrganismo.' },
  { id:'corpo', icon:'⌁', name:'Corpo humano', molecule:'Lactato, citrato e ácidos graxos', property:'Equilíbrio ácido–base e metabolismo', application:'Transporte de energia, ciclo do ácido cítrico e formação de lipídios.', detail:'Em pH fisiológico, muitos desses compostos aparecem majoritariamente como carboxilatos, e não como ácidos neutros.' },
  { id:'industria', icon:'⚙', name:'Indústria', molecule:'Acético, fórmico e ácidos graxos', property:'Reatividade da carboxila', application:'Solventes, intermediários, couro, tensoativos e biodiesel.', detail:'Transformações da carboxila originam sais, ésteres, amidas e materiais com propriedades distintas.' },
  { id:'farmacia', icon:'✚', name:'Farmácia', molecule:'Ácidos e derivados carboxílicos', property:'Ionização e reconhecimento molecular', application:'Princípios ativos, excipientes, lactatos e intermediários de síntese.', detail:'A forma ionizada pode alterar solubilidade e absorção. Formulação, dose e via de uso são decisivas.' },
  { id:'cosmeticos', icon:'✦', name:'Cosméticos', molecule:'Ácido lático e ácidos graxos', property:'pH, polaridade e interação superficial', application:'AHAs, emulsões, ajuste de pH e agentes de consistência.', detail:'Concentração e pH da formulação determinam o efeito; o ingrediente isolado não descreve a segurança do produto.' },
  { id:'ambiente', icon:'♲', name:'Meio ambiente', molecule:'Ácido lático, PLA e ésteres graxos', property:'Origem e transformações químicas', application:'Materiais biobaseados, combustíveis e rotas biotecnológicas.', detail:'Biobaseado indica origem renovável; biodegradável descreve decomposição biológica; compostável exige condições e critérios específicos.' },
]
const activeId = ref('cozinha')
const active = computed(() => contexts.find((item) => item.id === activeId.value))
</script>

<template>
  <div class="life-map">
    <div class="context-list" role="tablist" aria-label="Ambientes do cotidiano">
      <button v-for="context in contexts" :key="context.id" type="button" role="tab" :aria-selected="activeId === context.id" :class="{active:activeId===context.id}" @click="activeId=context.id"><span>{{ context.icon }}</span>{{ context.name }}</button>
    </div>
    <Transition name="context-change" mode="out-in">
      <article :key="activeId" class="context-panel" role="tabpanel">
        <div class="context-orbit" aria-hidden="true"><span>–COOH</span><i></i><b>{{ active.icon }}</b></div>
        <div class="context-copy"><p class="panel-label">{{ active.name }}</p><h3>{{ active.molecule }}</h3><dl><div><dt>Propriedade explorada</dt><dd>{{ active.property }}</dd></div><div><dt>Aplicação</dt><dd>{{ active.application }}</dd></div></dl><p>{{ active.detail }}</p></div>
      </article>
    </Transition>
  </div>
</template>

<style scoped>
.life-map{display:grid;grid-template-columns:.38fr .62fr;gap:1rem}.context-list{display:grid;grid-template-columns:1fr 1fr;gap:.6rem}.context-list button{display:flex;align-items:center;gap:.6rem;min-height:76px;padding:.8rem;border:1px solid var(--line);border-radius:var(--radius-sm);background:var(--surface);color:var(--muted);font:600 .72rem var(--font-body);text-align:left;cursor:pointer}.context-list span{display:grid;place-items:center;width:2rem;height:2rem;border-radius:50%;background:rgba(255,200,87,.08);color:var(--amber)}.context-list button.active{border-color:var(--amber);background:rgba(255,200,87,.07);color:var(--text)}button:focus-visible{outline:2px solid var(--amber);outline-offset:2px}.context-panel{display:grid;grid-template-columns:.42fr .58fr;align-items:center;min-height:330px;padding:1.4rem;border:1px solid var(--line);border-radius:var(--radius-lg);background:radial-gradient(circle at 22% 50%,rgba(111,178,255,.12),transparent 34%),var(--bg-2)}.context-orbit{position:relative;display:grid;place-items:center;width:180px;aspect-ratio:1;margin:auto;border:1px solid rgba(111,178,255,.28);border-radius:50%}.context-orbit::before,.context-orbit::after{content:'';position:absolute;border:1px solid var(--line);border-radius:50%;inset:18px}.context-orbit::after{inset:42px}.context-orbit span{z-index:1;color:var(--amber);font:700 .85rem var(--font-mono)}.context-orbit b{position:absolute;right:5px;top:50%;display:grid;place-items:center;width:2.6rem;height:2.6rem;border-radius:50%;background:var(--blue);color:#07101d;animation:orbitPulse 2.4s ease-in-out infinite}.context-copy h3{margin:.25rem 0 1rem}.context-copy dl{display:grid;gap:.6rem;margin:0}.context-copy dl div{padding-left:.7rem;border-left:2px solid var(--blue)}.context-copy dt{color:var(--muted-2);font:.56rem var(--font-mono);text-transform:uppercase}.context-copy dd{margin:.12rem 0;color:var(--text-soft);font-size:.76rem}.context-copy>p:last-child{margin:.9rem 0 0;font-size:.75rem}.context-change-enter-active,.context-change-leave-active{transition:.2s ease}.context-change-enter-from,.context-change-leave-to{opacity:0;transform:translateY(8px)}@keyframes orbitPulse{50%{transform:scale(1.12);box-shadow:0 0 20px rgba(111,178,255,.4)}}
@media(max-width:820px){.life-map{grid-template-columns:1fr}.context-panel{grid-template-columns:.36fr .64fr}}@media(max-width:560px){.context-list{grid-template-columns:1fr 1fr}.context-list button{min-height:60px}.context-panel{grid-template-columns:1fr}.context-orbit{width:145px;margin-bottom:1rem}}@media(max-width:360px){.context-list{grid-template-columns:1fr}}@media(prefers-reduced-motion:reduce){.context-orbit b{animation:none}.context-change-enter-active,.context-change-leave-active{transition:none}}
</style>
