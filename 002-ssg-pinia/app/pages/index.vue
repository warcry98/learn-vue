<script setup lang="ts">
import { useUsersStore } from '#imports'

const usersStore = useUsersStore()

// SSR/SSG friendly data fetching
await useAsyncData('users', async () => {
  if (!usersStore.isFetched) {
    await usersStore.fetchUsers()
  }

  return usersStore.list
})

const users = computed(() => usersStore.list)

useSeoMeta({
  title: 'Users',
  description: 'A web application to see users',
})
</script>

<template>
  <section class="container">
    <div class="hero">
      <h1 class="title">
        Users!
      </h1>

      <h2 class="subtitle">
        A web application to see users
      </h2>
    </div>

    <div class="content">
      <h2 class="section-title">
        Users
      </h2>

      <ul class="users">
        <li
          v-for="user in users"
          :key="user.id"
          class="user-item"
        >
          <div class="user-list">
            <NuxtLink
              :to="`/users/${user.id}`"
              class="user-link"
            >
              {{ user.name }}
            </NuxtLink>

            <NuxtLink
              :to="`/client-users/${user.id}`"
              class="csr-button"
            >
              CSR User
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.container {
  min-height: 100vh;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family:
    Inter,
    Arial,
    Helvetica,
    sans-serif;

  background: #f9fafb;
}

.hero {
  text-align: center;
  margin-bottom: 50px;
}

.title {
  margin: 0;

  font-weight: 700;
  font-size: clamp(48px, 10vw, 96px);

  color: #35495e;

  letter-spacing: -2px;
}

.subtitle {
  margin-top: 10px;

  font-weight: 400;
  font-size: clamp(18px, 3vw, 28px);

  color: #526488;
}

.content {
  width: 100%;
  max-width: 700px;
}

.section-title {
  margin-bottom: 20px;

  font-size: 28px;
  font-weight: 600;

  color: #222;
}

.users {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.user-item {
  width: 100%;
}

.user-list {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-link {
  flex: 1;

  padding: 14px 18px;

  border: 1px solid #e5e7eb;
  border-radius: 12px;

  background: white;

  text-decoration: none;
  color: #222;

  font-weight: 500;

  transition:
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.user-link:hover {
  border-color: #f59e0b;

  color: #f59e0b;

  transform: translateY(-2px);

  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.08);
}

.csr-button {
  padding: 14px 18px;

  border-radius: 12px;

  background: #35495e;

  color: white;

  text-decoration: none;

  font-size: 14px;
  font-weight: 600;

  white-space: nowrap;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.csr-button:hover {
  background: #1f2937;

  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .user-list {
    flex-direction: column;
    align-items: stretch;
  }

  .csr-button {
    text-align: center;
  }
}
</style>