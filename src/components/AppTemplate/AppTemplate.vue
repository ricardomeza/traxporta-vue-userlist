<template>
  <!-- Header -->
  <header
    class="bg-gradient-to-r from-traxporta-green to-traxporta-blue w-full min-h-[5px]"
  ></header>

  <!-- Main Content -->
  <div class="flex flex-grow min-h-screen">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Content -->
    <main class="flex-1 bg-gray-100 overflow-y-auto items-center justify-center">
      <slot name="content"></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@components/Sidebar/Sidebar.vue'
</script>
