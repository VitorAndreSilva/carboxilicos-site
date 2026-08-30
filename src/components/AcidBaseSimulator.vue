<script setup>
import { computed, ref } from 'vue'

const pKa = 3.86
const pH = ref(3.86)

const lactatePercentage = computed(() => {
  const ratio = 10 ** (pH.value - pKa)
  return (ratio / (1 + ratio)) * 100
})

const acidPercentage = computed(() => 100 - lactatePercentage.value)

function formatPercentage(value) {
  if (value < 0.1) return '< 0,1%'
  if (value > 99.9) return '> 99,9%'
  return `${value.toFixed(1).replace('.', ',')}%`
}
</script>

<template>
  <div class="acid-base-model">
    <div class="acid-base-model__head">
      <div>
        <p class="panel-label">Modelo ácido–base</p>
        <h3>Qual forma predomina?</h3>
      </div>
      <output :for="'ph-control'">pH {{ pH.toFixed(2).replace('.', ',') }}</output>
    </div>

    <div class="species-row">
      <div class="species species--acid" :class="{ dominant: acidPercentage >= lactatePercentage }">
        <span>CH₃–CH(OH)–COOH</span>
        <strong>Ácido lático</strong>
        <small>{{ formatPercentage(acidPercentage) }}</small>
      </div>
      <div class="equilibrium-mark">
        <span>⇌</span>
        <small>+ H⁺</small>
      </div>
      <div class="species species--lactate" :class="{ dominant: lactatePercentage > acidPercentage }">
        <span>CH₃–CH(OH)–COO⁻</span>
        <strong>Lactato</strong>
        <small>{{ formatPercentage(lactatePercentage) }}</small>
      </div>
    </div>

    <div class="distribution-bar" aria-label="Distribuição estimada entre ácido lático e lactato">
      <span class="distribution-bar__acid" :style="{ width: `${acidPercentage}%` }"></span>
      <span class="distribution-bar__lactate" :style="{ width: `${lactatePercentage}%` }"></span>
    </div>

    <label for="ph-control">Explore o pH</label>
    <input id="ph-control" v-model.number="pH" type="range" min="1" max="8" step="0.01" />
    <div class="ph-scale" aria-hidden="true"><span>1 · ácido</span><span>pKa 3,86</span><span>8 · básico</span></div>

    <p class="model-note">
      Estimativa pela relação de Henderson–Hasselbalch. Quando pH = pKa, as duas formas aparecem em proporções iguais.
    </p>
  </div>
</template>

<style scoped>
.acid-base-model {
  padding: clamp(1.2rem, 3vw, 2rem);
  border: 1px solid rgba(111, 178, 255, 0.28);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at 85% 10%, rgba(111, 178, 255, 0.1), transparent 36%),
    linear-gradient(145deg, var(--surface-2), var(--surface));
}

.acid-base-model__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}
.acid-base-model__head h3 { margin: 0; }
.acid-base-model__head output {
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: var(--blue);
  color: #07111d;
  font: 700 0.72rem var(--font-mono);
}

.species-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0.8rem;
  align-items: center;
  margin: 1.4rem 0;
}
.species {
  display: flex;
  flex-direction: column;
  min-height: 125px;
  justify-content: center;
  padding: 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  opacity: 0.58;
  transition: opacity 0.25s ease, border-color 0.25s ease, transform 0.25s var(--ease-out);
}
.species.dominant { opacity: 1; transform: translateY(-2px); }
.species--acid.dominant { border-color: rgba(255, 200, 87, 0.45); }
.species--lactate.dominant { border-color: rgba(111, 178, 255, 0.5); }
.species span { color: var(--text); font: 700 0.78rem var(--font-mono); }
.species strong { margin-top: 0.5rem; font-size: 0.85rem; }
.species small { color: var(--muted); }
.equilibrium-mark { color: var(--muted); text-align: center; }
.equilibrium-mark span { display: block; color: var(--amber); font-size: 1.4rem; }
.equilibrium-mark small { font-size: 0.65rem; }

.distribution-bar {
  display: flex;
  height: 0.65rem;
  margin: 1.2rem 0;
  overflow: hidden;
  border-radius: 999px;
  background: var(--bg);
}
.distribution-bar span { transition: width 0.18s ease; }
.distribution-bar__acid { background: var(--amber); }
.distribution-bar__lactate { background: var(--blue); }

.acid-base-model label {
  display: block;
  margin-bottom: 0.45rem;
  color: var(--text-soft);
  font-size: 0.72rem;
  font-weight: 700;
}
.acid-base-model input { width: 100%; accent-color: var(--blue); cursor: pointer; }
.ph-scale { display: flex; justify-content: space-between; color: var(--muted-2); font: 0.6rem var(--font-mono); }
.model-note { margin: 1rem 0 0; color: var(--muted); font-size: 0.72rem; }

@media (max-width: 600px) {
  .species-row { grid-template-columns: 1fr; }
  .equilibrium-mark { transform: rotate(90deg); }
}
</style>
