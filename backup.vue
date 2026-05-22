<template>
  <div class="bg-container">
    <div class="bg-image">
      <slot />
    </div>
  </div>
</template>

<style>
* {
  --yellow: hsl(47, 88%, 63%);
  --white: hsl(0, 0%, 100%);
  --gray-500: hsl(0, 0%, 42%);
  --gray-950: hsl(0, 0%, 7%);

  font-family: "Figtree", sans-serif;
  box-sizing: border-box;

  margin: 0;
  padding: 0;

  font-size: 62.5%;
}

.bg-container {
  position: relative;
  width: 37.5rem;
  height: 81.2rem;

  margin: 0 auto;
}

.bg-image {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  background-image: url('/design/mobile-design.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  opacity: 0.4;
  z-index: -5;
}

@media (min-width: 1440px) {
  .bg-container {
    width: 144rem;
    height: 96rem;
  }

  .bg-image {
    background-image: url('/design/desktop-design.jpg');
  }
}
</style>