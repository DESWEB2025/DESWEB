<template>
  <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
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
  </div>

  <div class="relative z-10">
    <header class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black to-[#22165f] flex justify-between items-center py-4 px-6">
      <div class="flex items-center">
        <img src="/src/assets/icon.jpeg" class="w-10 h-10" />
        <h1 class="text-xl sm:text-6xl md:text-xl lg:text-4xl font-mono font-bold text-[#4c71ab]">
          DesWeb
        </h1>
      </div>
      <nav class="flex items-center gap-6">
        <RouterLink :to="{ name: 'home' }" class="text-white font-bold">Inicio</RouterLink>
        <RouterLink :to="{ name: 'plans' }" class="text-white font-bold">Paquetes</RouterLink>
        <RouterLink :to="{ name: 'about' }" class="text-white font-bold">Nosotros</RouterLink>
        <RouterLink :to="{ name: 'contact' }" class="text-white font-bold">Contáctanos</RouterLink>
      </nav>
    </header>

    <main class="pt-24 pb-20 min-h-screen">
      <RouterView />
    </main>

    <footer class="w-full flex flex-col gap-5 justify-center items-center bg-gradient-to-r from-black to-[#22165f] py-3 z-40">
      <p class="text-l font-serif font-bold italic text-white">Código que conecta...</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stars: Array.from({ length: 30 }, () => ({
        top: (Math.random() * 100).toFixed(2),
        left: (Math.random() * 100).toFixed(2),
        delay: (Math.random() * 4).toFixed(2),
      })),
    };
  },
};
</script>

<style scoped>
.star {
  position: absolute;
  width: 20px;
  height: 20px;
  animation: twinkle 2s infinite ease-in-out;
  opacity: 0.8;
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
    opacity: 0.8;
  }
}
</style>
