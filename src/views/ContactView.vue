<template>
  <div class="flex justify-center p-6">
    <form @submit.prevent="onSubmit" class="flex flex-col gap-3 bg-[#bbbaf8] p-6 mt-10 rounded shadow max-w-xl w-full">     
      <div>
        <label class="block font-semibold">Nombre</label>
        <input v-model="name" type="text" placeholder="Tu nombre" required class="w-full border rounded px-3 py-2" />
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>

      <div>
        <label class="block font-semibold">Correo electrónico</label>
        <input v-model="email" type="email" placeholder="Tu correo electrónico" required class="w-full border rounded px-3 py-2" />
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>

      <div>
        <label class="block font-semibold">Describe tu página</label>
        <textarea v-model="message" placeholder="Escribe tu mensaje..." rows="4" required class="w-full border rounded px-3 py-2"></textarea>
        <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
      </div>

      <button type="submit" class="bg-[#22165f] text-white rounded py-2 hover:bg-blue-600">
        Enviar
      </button>

      <p v-if="success" class="text-green-600 font-semibold">Mensaje enviado correctamente.</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const errors = ref({})
const success = ref(false)

const onSubmit = () => {
  errors.value = {}

  if (!name.value.trim()) {
    errors.value.name = 'Indique un nombre'
  }

  if (!email.value.trim()) {
    errors.value.email = 'Se requiere un correo electrónico'
  }

  if (!message.value.trim()) {
    errors.value.message = 'Describa su página'
  }

  if (Object.keys(errors.value).length === 0) {
    success.value = true

    name.value = ''
    email.value = ''
    message.value = ''
  } else {
    success.value = false
  }
}
</script>
