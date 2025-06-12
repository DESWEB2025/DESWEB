<template>
  <div class="flex justify-center">
    <div
      v-for="plan in plans"
      :key="plan.name"
      class="neon-blue flex flex-col gap-4 bg-[#bbbaf8] p-6 rounded max-w-sm w-full m-10 border-2 border-[#2b0f66]"
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
          -{{ i }}
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script setup>
const plans = {
  basico: {
    name: "Básico",
    content: [
      "Página web informativa (inicio, contacto, contenido del negocio)",
      "Diseño responsivo",
      "Formulario de contacto",
      "Página escalable",
    ],
    precio: 800,
  },
  intermedio: {
    name: "Intermedio",
    content: [
      "Plan básico",
      "Panel de administrador (control del contenido de tu página)",
      "Integración a redes sociales",
    ],
    precio: 1500,
  },
  Avanzado: {
    name: "Avanzado",
    content: [
      "Plan básico e intermedio",
      "Registro e ingreso de usuarios",
      "Tienda en línea o gestión de citas",
      "Pasarela de pago",
      "Panel administrativo",
    ],
    precio: 15000,
  },
};
</script>

<style scoped>
.neon-blue {
  box-shadow: 0 0 10px rgba(0, 132, 255, 0.2), 0 0 20px rgba(0, 132, 255, 0.1),
    0 0 40px rgba(0, 132, 255, 0.2);
}
</style>
