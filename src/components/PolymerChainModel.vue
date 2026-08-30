<script setup>
import { computed, ref } from 'vue'

const units = ref(5)
const massEstimate = computed(() => units.value * 72.06)
</script>

<template>
  <div class="polymer-model">
    <div class="polymer-model__head">
      <div>
        <p class="panel-label">Modelo simplificado</p>
        <h3>Construa uma cadeia de PLA</h3>
      </div>
      <output for="polymer-units">{{ units }} unidades</output>
    </div>

    <div class="polymer-chain" aria-live="polite">
      <span class="chain-start">H—</span>
      <span v-for="unit in units" :key="unit" class="repeat-unit">
        <small>{{ unit }}</small>
        [—O—CH(CH₃)—CO—]
      </span>
      <span class="chain-end">—OH</span>
    </div>

    <label for="polymer-units">Comprimento ilustrativo da cadeia</label>
    <input id="polymer-units" v-model.number="units" type="range" min="2" max="10" step="1" />
    <p>
      Massa aproximada apenas das unidades repetitivas exibidas:
      <strong>{{ massEstimate.toFixed(1).replace('.', ',') }} g/mol</strong>. Polímeros reais possuem muito mais unidades.
    </p>
  </div>
</template>

<style scoped>
.polymer-model {
  grid-column: 1 / -1;
  padding: 1.25rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--control-bg-soft);
}
.polymer-model__head { display: flex; justify-content: space-between; gap: 1rem; }
.polymer-model__head h3 { margin: 0; font-size: 1.15rem; }
.polymer-model__head output {
  align-self: flex-start;
  padding: 0.4rem 0.65rem;
  border-radius: 999px;
  background: rgba(108, 242, 176, 0.12);
  color: var(--mint);
  font: 700 0.68rem var(--font-mono);
}
.polymer-chain {
  display: flex;
  align-items: center;
  min-height: 100px;
  margin: 1rem 0;
  padding: 1rem;
  overflow-x: auto;
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: var(--text-soft);
  font: 0.7rem var(--font-mono);
}
.repeat-unit {
  position: relative;
  flex: 0 0 auto;
  padding: 0.6rem 0.2rem;
  border-top: 1px solid rgba(108, 242, 176, 0.35);
  border-bottom: 1px solid rgba(108, 242, 176, 0.35);
  color: var(--mint);
}
.repeat-unit small { position: absolute; top: -1.1rem; left: 50%; color: var(--muted-2); }
.polymer-model label { display: block; color: var(--text-soft); font-size: 0.7rem; font-weight: 700; }
.polymer-model input { width: 100%; accent-color: var(--mint); cursor: pointer; }
.polymer-model > p { margin: 0.7rem 0 0; color: var(--muted); font-size: 0.7rem; }
</style>
