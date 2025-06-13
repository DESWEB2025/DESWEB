<template>
  <div class="flex flex-col justify-center gap-20 ml-5 sm:ml-20">
    <h1 class="text-7xl sm:text-6xl md:text-7xl lg:text-9xl font-mono font-bold text-[#4c71ab]">
      DesWeb
    </h1>
    <p class="text-xl font-serif font-bold text-white text-center sm:m-10">
      Servicio de creacion y mantenimiento de paginas web para una presencia en internet a tu necesidad
    </p>

    <div class="flex justify-center gap-1 lg:gap-30">
      <button class="bg-[#304774] p-2 rounded rounded-2">
        <RouterLink :to="{ name: 'plans' }" class="text-2xl text-[#d9dafb] font-bold">Paquetes</RouterLink>
      </button>

      <button class="bg-[#304774] p-2 rounded rounded-2">
        <RouterLink :to="{ name: 'projects' }" class="text-2xl text-[#d9dafb] font-bold">Proyectos</RouterLink>
      </button>
    </div>

  </div>

</template>
