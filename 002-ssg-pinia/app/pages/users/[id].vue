<script setup lang="ts">
import { useUsersStore } from '#imports';

const route = useRoute()

const usersStore = useUsersStore()

// SSR/SSG fiendly fetch
await useAsyncData('user-detail', async () => {
    if (!usersStore.isFetched) {
        await usersStore.fetchUsers()
    }
    return usersStore.list
})

// computed user
const user = computed(() => {
    return usersStore.userById(String(route.params.id))
})

useSeoMeta({
    title: () => user.value?.name || 'User Detail',
    description: () => 
        user.value
        ? `Profile page for ${user.value.name}`
        : 'User detail page',
})
</script>

<template>
    <div class="user">
        <template v-if="user">
            <h3>
                {{  user.name }}
            </h3>

            <h4>
                @{{ user.username }}
            </h4>

            <p>
                Email : {{  user.email }}
            </p>
        </template>

        <template v-else>
            <p>User not found</p>
        </template>
        <p>
            <NuxtLink to="/">
                List of users
            </NuxtLink>
        </p>
    </div>
</template>

<style scoped>
.user {
    text-align: center;
    margin-top: 100px;
    font-family: sans-serif;
}

h3 {
    font-size: 32px;
    margin-bottom: 10px;
}

h4 {
    color: #666;
    margin-bottom: 20px;
}

a {
    color: #0070f3;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>