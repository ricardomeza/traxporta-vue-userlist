<template>
  <AppTemplate>
    <template #content>
      <UserList />
    </template>
  </AppTemplate>
</template>

<script setup lang="ts">
import AppTemplate from '@components/AppTemplate/AppTemplate.vue'
import UserList from '@components/UserList/UserList.vue'
</script>
