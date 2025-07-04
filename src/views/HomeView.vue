<template>

  <div class="flex m-20 mt-5">
    <div class="flex flex-col justify-center p-5">
      <p class="text-2xl font-serif font-bold text-white text-center sm:m-10">
        Servicio de creación y mantenimiento de páginas web para una presencia en internet a tu necesidad      
      </p>

      <button class="bg-[#304774] p-1 rounded rounded-2">
        <RouterLink :to="{ name: 'projects' }" class="text-2xl text-[#d9dafb] font-bold">Revisa nuestro trabajo</RouterLink>
      </button>

    </div>

    <div>
      <video src="/src/assets/video/video-comercial.mp4"  autoplay muted playsinline loop class="w-300 h-100">
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>

  </div>


</template>
