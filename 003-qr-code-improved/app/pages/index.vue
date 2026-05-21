<script setup>
const config = useRuntimeConfig()

const qrImageSrc = `${config.app.baseURL}image-qr-code.png`
</script>

<template>
  <div class="root">
    <main class="card">
      <div class="image-container">
        <img
          class="qr-image"
          :src="qrImageSrc"
          alt="QR code linking to Frontend Mentor"
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
.root {
  display: flex;
  height: 100dvh;
  width: 100dvw;

  justify-content: center;
  align-items: center;
  background-color: var(--slate-300);
}

.card {
  display: flex;
  flex-direction: column;
  
  height: 500px;
  width: 320px;

  border-radius: 20px;
  background-color: var(--white);

  box-shadow: 5px 3px 20px 5px var(--slate-500);
}

.image-container {
  height: 290px;
  border-radius: 12px;

  margin: 16px 16px 0px 16px;
}

.qr-image {
  height: 100%;
  border-radius: 12px;
  width: 100%;
}

.content {
  margin: 9px 16px 10px;
  line-height: 1.2;
}

.header {
  font-size: 22px;
  color: var(--slate-900);
  font-weight: 700;
  text-align: center;
}

.description {
  font-size: 16px;
  color: var(--slate-500);
  font-weight: 400;
  text-align: center;

  margin: 0px 12px 0px;
  letter-spacing: 1.2;
}

</style>