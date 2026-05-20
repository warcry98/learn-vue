<script setup lang="ts">
definePageMeta({
  ssr: false,
})

const usersStore = useUsersStore()

const route = useRoute()

onMounted(async () => {
  await usersStore.fetchUsers()
})

const user = computed(() => {
  return usersStore.userById(route.params.id as string)
})
</script>

<template>
  <div>
    <h1>CSR User Page</h1>

    <pre>{{ user }}</pre>
  </div>
</template>