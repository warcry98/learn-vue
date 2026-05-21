<template>
  <div class="bg-container">
    <div class="bg-image"></div>
    
  </div>
  <div>
    <slot />
  </div>
</template>


<style scoped>
* {
  --white: hsl(0, 0%, 100%);
  --slate-300: hsl(212, 45%, 89%);
  --slate-500: hsl(216, 15%, 48%);
  --slate-900: hsl(218, 44%, 22%);
  font-family: "Outfit", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bg-container {
  position: relative;
  width: 1440px;
  height: 900px;
  /* overflow: hidden; */
  margin: 0 auto;
}

.bg-image {
  position: absolute;
  inset: 0;

  /* background-image: url('/design/desktop-design.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  opacity: 0.2;
  z-index: -5;
}
</style>