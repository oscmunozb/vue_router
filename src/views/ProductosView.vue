<template>
  <!-- Contenedor principal para los productos -->
  <div class="container py-5">
    <!-- Título centrado de la sección -->
    <h1 class="text-center pt-5 pb-4">Nuestros Productos</h1>
    <!-- Botón para volver a la página de inicio -->
    <div class="text-center">
      <router-link class="btn btn-primary mb-4" to='/'>Volver al inicio</router-link>
    </div>
    <!-- Filas y columnas para distribuir las tarjetas de productos -->
    <div class="row g-4">
      <!-- Se itera sobre el array 'comidas' para generar una tarjeta por producto -->
      <div class="col-12 col-md-6 col-lg-4" v-for="(comida, index) in comidas" :key="index">
        <!-- Componente Card para cada producto -->
        <Card :comida="comida" />
      </div>
    </div>
  </div>
</template>

<script>
// Importar el componente Card desde su archivo correspondiente
import Card from '../components/Card.vue'

export default {
  name: "ProductosView", // Nombre del componente principal
  components: {
    Card // Se declara el componente Card
  },
  props: {
    // Propiedad 'comidas' que recibe un array de objetos con los productos
    comidas: {
      type: Array, // Se especifica que es un array
      required: true // Es obligatorio que se pase esta propiedad
    }
  }
}
</script>
