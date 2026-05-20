<script setup>
</script>

<template>
  <div class="root">
    <main class="card">
      <div class="image-container">
        <img
          class="qr-image"
          :src="`${useRuntimeConfig().app.baseURL}image-qr-code.png`"
          alt="QR code"
        />
      </div>

      <div class="content">
        <h1 class="header">
          Improve your front-end skills by building projects
        </h1>

        <p class="description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}

.root {
  --white: hsl(0, 0%, 100%);
  --slate-300: hsl(212, 45%, 89%);
  --slate-500: hsl(216, 15%, 48%);
  --slate-900: hsl(218, 44%, 22%);

  min-height: 100vh;
  min-height: 100dvh;

  display: grid;
  place-items: center;

  padding: clamp(1rem, 4vw, 1.5rem);

  background-color: var(--slate-300);

  font-family: 'Outfit', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.card {
  width: min(100%, 20rem);

  padding: 1rem;

  background-color: var(--white);

  border-radius: 1.25rem;

  text-align: center;

  box-shadow:
    0 1.5625rem 1.5625rem rgba(0, 0, 0, 0.04),
    0 0.5rem 0.75rem rgba(0, 0, 0, 0.03);
}

.image-container {
  overflow: hidden;

  border-radius: 0.75rem;

  aspect-ratio: 1 / 1;
}

.qr-image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
}

.content {
  padding: 1.5rem 1rem 1rem;
}

.header {
  margin: 0 0 1rem;

  color: var(--slate-900);

  font-size: clamp(1.32rem, 2vw, 1.375rem);
  font-weight: 700;
  line-height: 1.25;

  letter-spacing: -0.01em;

  text-wrap: balance;
}

.description {
  max-width: 16rem;
  margin: 0 auto;

  color: var(--slate-500);

  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.4;

  letter-spacing: 0.0125rem;

  text-wrap: pretty;
}

@media (max-width: 375px) {
  .content {
    padding-inline: 0.75rem;
  }

  .header {
    font-size: 1.3rem;
  }
}
</style>