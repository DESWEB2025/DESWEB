<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black to-[#22165f] flex justify-end items-center py-4 px-6">
    <nav class="flex items-center gap-6">
      <RouterLink :to="{ name: 'home' }" class="text-white font-bold">Inicio</RouterLink>
      <RouterLink :to="{ name: 'contact' }" class="text-white font-bold">Contáctanos</RouterLink>
      <RouterLink :to="{ name: 'about' }" class="text-white font-bold">Nosotros</RouterLink>
    </nav>
  </header>

  <div class="star-container">
    <img
      v-for="(star, i) in stars"
      :key="i"
      src="../assets/star.svg"
      class="star"
      :style="{
        top: star.top + '%',
        left: star.left + '%',
        animationDelay: star.delay + 's'
      }"
    />

    <main class="mt-20 pb-20">
      <RouterView />
    </main>
  </div>

  <footer class="fixed bottom-0 left-0 w-full flex flex-col gap-5 justify-center items-center bg-gradient-to-r from-black to-[#22165f] py-3 z-40">
    <p class="text-l font-serif font-bold italic text-white">Código que conecta...</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      stars: Array.from({ length: 20 }, () => ({
        top: (Math.random() * 90).toFixed(2),
        left: (Math.random() * 90).toFixed(2),
        delay: (Math.random() * 4).toFixed(2),
      })),
    };
  },
};
</script>

<style scoped>
.star-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
}

.star {
  position: absolute;
  width: 20px;
  height: 20px;
  animation: twinkle 2s infinite ease-in-out;
}

@keyframes twinkle {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
