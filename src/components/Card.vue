<template>
  <!-- Sección que contiene las tarjetas de productos -->
  <section id="productos">
    <!-- Tarjeta individual con altura completa, utiliza Bootstrap para ajustar la apariencia -->
    <div class="card h-100">
      <!-- Imagen del producto con enlace dinámico al src y texto alternativo (alt) -->
      <img :src="comida.imagen" class="card-img-top" :alt="comida.nombre">
      <!-- Cuerpo de la tarjeta que contiene el título y descripción del producto -->
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ comida.nombre }}</h5>
        <p class="card-text">
          {{ comida.descripcion }}
        </p>
      </div>
      <!-- Lista con información adicional del producto: precio y cantidad -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Precio: ${{ comida.precio }}</li>
        <li class="list-group-item">Cantidad: {{ comida.cantidad }}</li>
      </ul>
      <!-- Enlaces en la parte inferior de la tarjeta para acciones adicionales (ver más y comprar) -->
      <div class="card-body">
        <a href="#" class="card-link">Ver más</a>
        <a href="#" class="card-link">Comprar</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Card", // Nombre del componente
  props: {
    // Propiedad 'comida' pasada desde el componente padre, que es un objeto con los detalles del producto
    comida: Object,
  }
}
</script>

<style>
/* Sección para agregar estilos específicos del componente, si es necesario */
</style>
