<script setup>
const config = useRuntimeConfig()

const previewImageSrc = `${config.app.baseURL}/images/illustration-article.svg`
const avatarImageSrc = `${config.app.baseURL}/images/image-avatar.webp`
</script>

<template>
  <div class="root">
    <main class="card">
      <div class="image-container">
        <img
          class="preview-img"
          :src="previewImageSrc"
          alt="Image Illustration"
        />
      </div>
      <div class="content">
        <div class="tag">
          <h4>Learning</h4>
        </div>
        <h3>Published 21 Dec 2023</h3>
        <h1>HTML & CSS foundations</h1>
        <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div class="profile">
          <img
            class="avatar-img"
            :src="avatarImageSrc"
            alt="Image Avatar"
          />
          <h2>Greg Hooper</h2>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  height: 100dvh;
  width: 100dvw;

  justify-content: center;
  align-items: center;
  background-color: var(--yellow);
}

.card {
  display: flex;
  flex-direction: column;

  background-color: var(--white);

  width: 32.6rem;
  height: 50rem;

  border-radius: 2rem;

  box-shadow: 10px 10px 10px 2px black;
}

.image-container {
  margin: 2.2rem;
  border-radius: 1rem;

  height: 40%;
}

.preview-img {
  width: 100%;
  height: 100%;

  display: block;
  object-fit: cover;

  border-radius: 1rem;
}

.content {
  margin-top: 0.5rem;
  margin-left: 2.2rem;
  display: flex;

  flex-direction: column;
}

.tag {
  background-color: var(--yellow);
  width: 7.3rem;
  height: 2.6rem;
  border-radius: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.tag h4 {
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.01rem;

  margin-left: 0.2rem;
  margin-bottom: 0.2rem;
  color: var(--gray-950);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1.3rem;
  letter-spacing: 0.01rem;
}

h1 {
  margin-top: 1.7rem;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.022rem;
}

h1:hover {
  color: var(--yellow);
  cursor: pointer;
}

p {
  font-size: 1.4rem;
  margin-top: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: 0.01rem;
}

.profile {
  display: flex;
  margin-top: 2.5rem;
  flex-direction: row;
  align-items: center;
}

.avatar-img {
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 2rem;
}

.profile h2 {
  font-size: 1.4rem;
  font-weight: 900;
  margin-left: 1.4rem;
}

@media (min-width: 1440px) {
  .card {
    width: 38rem;
    height: 52rem;
  }

  .image-container {
    margin-bottom: 1.3rem;
  }

  .tag {
    background-color: var(--yellow);
    width: 8.1rem;
    height: 2.7rem;
  }

  .tag h4 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.4rem;
    margin-top: 1.5rem;
    letter-spacing: 0rem;
  }

  h1 {
    font-size: 2.4rem;
    letter-spacing: 0.013rem;
  }

  p {
    font-size: 1.6rem;
    margin-top: 1.8rem;
    line-height: 2.3rem;
    letter-spacing: 0rem;
  }

  .profile h2 {
    margin-left: 1.2rem;
  }
}
</style>