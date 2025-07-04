<template>
    <div class="container mx-auto px-4 py-8">
    <h1 class="text-white text-3xl font-semibold mb-15">Revisa nuestro trabajo</h1>
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="project in projects"
        :key="project.type"
        class="flex flex-col gap-4 bg-[#aaadf7] p-2 rounded max-w-sm w-full sm:w-[300px] md:w-[500px] border-2 border-[#2b0f66]"
      >
      <h2 class="text-xl text-[#3f337c] font-saens font-bold text-center">Paquete: {{ project.type }} </h2>
      <a 
      :href="project.link" 
      class="text-l text-[#261e48] font-bold text-center">
      Click para ver el proyecto
      </a>
      <img :src="project.img" alt="imagen del proyecto"/>     
      </div>
    </div>
    </div>
</template>

<script setup>
import ProyectoBasico from '@/assets/projects/ProyectoBasico.jpg'
import ProyectoIntermedio from '@/assets/projects/ProyectoIntermedio.jpg'
import ProyectoAvanzado from '@/assets/projects/ProyectoAvanzado.jpg'

const projects = {
    basic:{
        type: "Basico",
        link: "https://www.sarasgoodies.com/",
        img: ProyectoBasico
    },
    intermediate:{
        type: "Intermedio",
        link: "https://skydivemexico.mx/",
        img: ProyectoIntermedio
    },
    advanced:{
        type: "Avanzado",
        link: "https://www.smartfit.com.mx/",
        img: ProyectoAvanzado
    }
}
</script>
