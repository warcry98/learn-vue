<!-- <template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template> -->

<template>
    <section id="posts">
        <PostPreview
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            :excerpt="post.previewText"
            :thumbnail-image="post.thumbnailUrl"
            :id="post.id"
        />
    </section>
</template>

<script>
import PostPreview from '~/components/Blog/PostPreview.vue';

export default {
    components: {
        PostPreview
    },
    data() {
        return {
            posts: [
                {
                    title: "A New Beginning",
                    previewText: "This will be awesome, don't miss it !",
                    thumbnailUrl: "https://daenskitchen.com/wp-content/uploads/2023/08/Daen-152.jpg",
                    id: "a-new-beginning"
                },
                {
                    title: "A Second Beginning",
                    previewText: "This will be awesome, don't miss it !",
                    thumbnailUrl: "https://daenskitchen.com/wp-content/uploads/2023/08/Daen-152.jpg",
                    id: "a-second-beginning"
                }
            ]
        }
    }
}
</script>

<style scoped>

#posts {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 35rem) {
    #posts {
        flex-direction: row;
    }
}
</style>