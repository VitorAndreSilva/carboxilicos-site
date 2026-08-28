<script setup>
defineProps({
  eixo: { type: String, required: true },
  kicker: { type: String, required: true },
  title: { type: String, required: true },
  lead: { type: String, required: true },
  chips: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="page-hero">
    <div class="page-hero__bg" aria-hidden="true">
      <span class="page-hero__orb page-hero__orb--a"></span>
      <span class="page-hero__orb page-hero__orb--b"></span>
    </div>

    <div class="container page-hero__inner">
      <div class="page-hero__content">
        <span class="eixo-tag">{{ eixo }}</span>
        <p class="kicker">{{ kicker }}</p>
        <h1 class="page-hero__title">{{ title }}</h1>
        <p class="page-hero__lead">{{ lead }}</p>
        <div v-if="chips.length" class="page-hero__chips">
          <span v-for="c in chips" :key="c" class="chip chip-amber">{{ c }}</span>
        </div>
      </div>

      <div class="page-hero__media">
        <slot name="media" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  padding: clamp(3rem, 7vw, 5.4rem) 0 2.6rem;
  overflow: hidden;
}

.page-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    radial-gradient(58% 68% at 12% 8%, rgba(255, 200, 87, 0.1), transparent 62%),
    radial-gradient(50% 60% at 95% 30%, rgba(111, 178, 255, 0.1), transparent 60%),
    linear-gradient(rgba(150, 165, 190, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(150, 165, 190, 0.045) 1px, transparent 1px);
  background-size: auto, auto, 44px 44px, 44px 44px;
  -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9), transparent 88%);
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9), transparent 88%);
}

.page-hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.page-hero__orb--a {
  width: 380px;
  height: 380px;
  background: rgba(255, 168, 46, 0.12);
  top: -120px;
  right: -60px;
}

.page-hero__orb--b {
  width: 300px;
  height: 300px;
  background: rgba(111, 178, 255, 0.08);
  bottom: -140px;
  left: -80px;
}

.page-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2.6rem;
  align-items: center;
}

@media (max-width: 940px) {
  .page-hero__inner {
    grid-template-columns: 1fr;
  }
}

.eixo-tag {
  display: inline-flex;
  padding: 0.34rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 200, 87, 0.35);
  background: rgba(255, 200, 87, 0.08);
  color: var(--amber);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 1.1rem;
  animation: tagIn 0.7s var(--ease-out) both;
}

.page-hero__title {
  font-size: clamp(2.3rem, 5.4vw, 3.9rem);
  font-weight: 600;
  margin: 0;
  animation: riseIn 0.8s var(--ease-out) both;
}

.page-hero__lead {
  margin-top: 1.1rem;
  max-width: 56ch;
  font-size: 1.1rem;
  color: var(--text-soft);
  animation: riseIn 0.8s var(--ease-out) 0.12s both;
}

.page-hero__chips {
  margin-top: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  animation: riseIn 0.8s var(--ease-out) 0.2s both;
}

.page-hero__media {
  animation: riseIn 1s var(--ease-out) 0.18s both;
}

@keyframes riseIn {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes tagIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>