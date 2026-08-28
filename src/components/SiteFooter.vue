<script setup>
const eixos = [
  { to: '/estrutura', label: 'Estrutura & Propriedades' },
  { to: '/historia', label: 'História' },
  { to: '/importancia', label: 'Importância tecnológica, industrial e doméstica' },
  { to: '/aplicacoes', label: 'Aplicações & usos' },
  { to: '/sociedade', label: 'Sociedade · ambiente · comércio' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Sobre o projeto</h4>
          <p class="small" style="max-width: 44ch">
            Guia interativo elaborado como material de apoio para a apresentação de
            Química Geral — 3º ano do Ensino Médio, com base na síntese
            <em>“Ácidos carboxílicos”</em> e na legislação e dados de mercado consultados.
          </p>
        </div>

        <div class="footer-col">
          <h4>Navegação</h4>
          <ul class="clean tick">
            <li v-for="e in eixos" :key="e.to">
              <RouterLink :to="e.to">{{ e.label }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Conecte-se ao assunto</h4>
          <ul class="clean">
            <li>Quando você vê <span class="chem">–COOH</span>, pensa: ácido carboxílico.</li>
            <li>Estrutura → interações → propriedades → aplicações.</li>
            <li>“A dose faz o veneno” — contexto importa.</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 · Trabalho escolar de Química — Ácidos Carboxílicos</span>
        <span>Vue.js 3 · Vite · Ilustrações moleculares SVG</span>
      </div>
    </div>
  </footer>
</template>