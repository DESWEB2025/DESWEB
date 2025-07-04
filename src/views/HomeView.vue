<template>
  <div class="flex flex-col md:flex-row items-center justify-center m-5 md:m-20 mt-5 gap-5">
    <div class="flex flex-col justify-center items-center p-5 text-center">
      <p class="text-xl sm:text-2xl font-serif font-bold text-white mb-4 max-w-md">
        Servicio de creación y mantenimiento de páginas web para una presencia en internet a tu necesidad      
      </p>

      <RouterLink :to="{ name: 'projects' }">
        <button class="bg-[#304774] px-4 py-2 rounded text-[#d9dafb] text-lg sm:text-2xl font-bold hover:bg-[#4060a1] transition">
          Revisa nuestro trabajo
        </button>
      </RouterLink>
    </div>

    <div class="w-full max-w-md">
      <video
        src="/src/assets/video/video-comercial.mp4"
        autoplay
        muted
        playsinline
        loop
        class="w-full h-auto rounded shadow-lg"
      >
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  </div>
</template>
