<template>
  <div>
    <slot />
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
</style>