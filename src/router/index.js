import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Definición de las rutas de la aplicación
const routes = [
  {
    // Ruta raíz ('/') que carga la vista 'HomeView'
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // Ruta para la sección de productos
    path: '/productos',
    name: 'productos',
    // Uso de lazy loading para cargar 'ProductosView' solo cuando sea necesario
    component: () => import('../views/ProductosView.vue'),
    // Paso de datos a 'ProductosView' mediante props
    props: (route) => {
      return {
        comidas: [
          // Array de objetos que contiene la información de cada producto
          {
            nombre: "Colaciones",
            precio: 2000,
            descripcion: "Contamos con desayunos nutritivos y muy deliciosos.",
            cantidad: "Para 2 personas",
            // Importa la imagen local desde la carpeta 'assets'
            imagen: require("../assets/img/colaciones.jpg"),
          },
          {
            nombre: "Bebidas",
            precio: 1000,
            descripcion: "Las mejores bebidas heladas que puedas encontrar.",
            cantidad: "Para una persona",
            imagen: require("../assets/img/bebidas.jpg"),
          },
          {
            nombre: "Desayunos",
            precio: 1500,
            descripcion: "Desayunos completos con opciones saludables y energéticas.",
            cantidad: "Para 1 persona",
            imagen: require("../assets/img/desayunos.jpg"),
          },
          {
            nombre: "Dulces",
            precio: 800,
            descripcion: "Variedad de postres y dulces para endulzar tu día a día.",
            cantidad: "Porción individual",
            imagen: require("../assets/img/dulces.jpg"),
          },
          {
            nombre: "Empanadas",
            precio: 1200,
            descripcion: "Empanadas caseras con diferentes rellenos, listas para disfrutar.",
            cantidad: "Para 2 personas",
            imagen: require("../assets/img/empanadas.jpg"),
          },
          {
            nombre: "Verduras",
            precio: 900,
            descripcion: "Verduras frescas, de calidad y deliciosas, listas para cocinar.",
            cantidad: "Porción individual",
            imagen: require("../assets/img/verduras.jpg"),
          }
        ]
      };
    },
  },
  {
    // Ruta para la sección de contacto
    path: '/contacto',
    name: 'contacto',
    // Lazy loading para 'ContactoView'
    component: () => import('../views/ContactoView.vue')
  }
]

// Creación del router usando el historial web HTML5
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes // Se pasa el arreglo de rutas definidas
})

// Exporta el router para ser utilizado en la aplicación principal
export default router
