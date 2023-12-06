<template>
  <aside class="w-24 bg-white border-r border-gray-300">
    <nav class="text-white text-base font-semibold pt-3">
      <a href="#" class="flex items-center justify-center active-nav-link nav-item">
        <img :src="logoImg" alt="icon" class="h-12 w-12 rounded-lg shadow-md" />
      </a>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logoImg from '@assets/logo-traxporta.webp'

export default defineComponent({
  name: 'side-bar',
  setup() {
    return { logoImg }
  }
})
</script>
