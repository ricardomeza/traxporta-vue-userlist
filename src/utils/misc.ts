import type { Ref } from 'vue'

export const getRandomNumber = (length: number) => Math.floor(Math.random() * length)

export const searchTextInField = (field: string, queryText: Ref<string>) =>
  field.toLowerCase().includes(queryText.value.toLowerCase())
