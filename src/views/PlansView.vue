<template>
  <div class="container mx-auto px-4 py-8">

    <h1 class="text-white text-xl font-semibold mb-15">Pregunta por nuestros planes a tu necesidad</h1>

    <div
      class="flex flex-wrap justify-center gap-6"
    >
      <div
        v-for="plan in plans"
        :key="plan.name"
        class="neon-blue flex flex-col gap-4 bg-[#aaadf7] p-6 rounded max-w-sm w-full sm:w-[300px] md:w-[350px] border-2 border-[#2b0f66]"
      >
        <h1 class="font-mono font-bold text-2xl text-center text-[#291f90]">
          {{ plan.name }}
        </h1>
        <p class="text-center text-xl text-[#1a1254] font-bold">
          ${{ plan.precio }}
        </p>
        <ul>
          <li
            v-for="i in plan.content"
            :key="i"
            class="text-serif text-l font-semibold"
          >
            - {{ i }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const plans = {
  basico: {
    name: "Básico",
    content: [
      "Página web informativa (ubicación, inicio, contacto, etc. según el negocio)",
      "Diseño responsivo",
      "Formulario de contacto",
      "Diseñada a tu negocio",
    ],
    precio: 1200,
  },
  intermedio: {
    name: "Intermedio",
    content: [
      "Todo el contenido del plan básico",
      "Panel administrativo para el control del contenido web",
      "Documentación del uso del panel administrativo",
      "Integración a redes sociales",
    ],
    precio: 5000,
  },
  Avanzado: {
    name: "Avanzado",
    content: [
      "Todo el contenido del plan intermedio y básico",
      "Registro y entrada de usuarios",
      "Tienda en línea menor a 50 productos",
      "Pasarela de pago",
      "Panel administrativo de usuarios/productos",
    ],
    precio: 15000,
  },
};
</script>

<style scoped>
.neon-blue {
  box-shadow: 0 0 5px rgba(0, 132, 255, 0.1), 0 0 20px rgba(0, 132, 255, 0.1),
    0 0 40px rgba(0, 132, 255, 0.1);
}
</style>
