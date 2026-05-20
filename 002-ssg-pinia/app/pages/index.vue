<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->

<script setup lang="ts">
import { useUsersStore } from '#imports';

const usersStore = useUsersStore()

// SSR/SSG friendly data fetching
await useAsyncData('users', async () => {
    if (!usersStore.isFetched) {
        await usersStore.fetchUsers()
    }
    return usersStore.list
})

// computed users list
const users = computed(() => usersStore.list)

useSeoMeta({
    title: 'Users',
    description: 'A web application to see users',
})

</script>

<template>
    <section class="container">
        <div>
            <h1 class="title">
                users!
            </h1>
            <h2 class="subtitle">
                A web application to see users
            </h2>
        </div>
        <div class="links">
            <h2>Users</h2>

            <ul class="users">
                <li
                    v-for="user in users"
                    :key="user.id"
                >
                    <NuxtLink :to="`/users/${user.id}`">
                        {{  user.name }}
                    </NuxtLink>
                    <button>
                        <NuxtLink :to="`/client-users/${user.id}`">
                            CSR User
                        </NuxtLink>
                    </button>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: Arial, Helvetica, sans-serif;

    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}

.users {
    list-style-type: none;
    padding: 0;
}

.users li {
    margin-bottom: 10px;
}

.users li a {
    display: inline-block;
    width: 200px;
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    color: #222;
    text-decoration: none;
    transition: 0.2s;
}

.users li a:hover {
    color: orange;
    border-color: orange;
}

</style>