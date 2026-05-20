<template>
    <div>
        <TheHeader />
        <main class="main-content">
            <!-- <p>Some default layout content shared across all pages</p> -->
            <slot />
        </main>
    </div>
</template>

<script>
import TheHeader from '~/components/TheHeader/TheHeader.vue';

export default {
    components: {
        TheHeader: TheHeader
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    font-family: "Lato", sans-serif;
}

.main-content {
    margin-top: 4.5rem;
}
</style>