# KingKeys Gaming - Tienda de Divisas y Gift Cards

Una plataforma moderna de ecommerce para divisas de juegos y gift cards digitales, construida con React, TypeScript y TailwindCSS.

## 🚀 Características

- **Divisas de Juegos**: Amplia selección de monedas virtuales para juegos populares
- **Gift Cards**: Tarjetas regalo para múltiples plataformas digitales
- **Entrega Instantánea**: Recibe tus claves inmediatamente después de la compra
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Filtros Avanzados**: Búsqueda y filtrado por categoría, plataforma y precio
- **Interfaz en Español**: Completamente localizada para usuarios hispanohablantes

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de interfaz de usuario
- **TypeScript** - Tipado estático para mayor seguridad
- **React Router 6** - Navegación del lado del cliente
- **TailwindCSS 3** - Framework de estilos utilitarios
- **Radix UI** - Componentes accesibles y personalizables
- **Lucide React** - Íconos vectoriales modernas
- **Vite** - Herramienta de desarrollo rápida

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (viene incluido con Node.js)
- **Git** (para clonar el repositorio)

## 🏃‍♂️ Cómo Ejecutar el Proyecto

### En Windows:

1. **Abrir Terminal/PowerShell:**

   - Presiona `Win + R`, escribe `powershell` y presiona Enter
   - O busca "PowerShell" en el menú inicio

2. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/kingkeys-gaming.git
   cd kingkeys-gaming
   ```

3. **Instalar dependencias:**

   ```bash
   npm install
   ```

4. **Ejecutar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

5. **Abrir en el navegador:**
   - Ve a [http://localhost:5173](http://localhost:5173)
   - La aplicación se abrirá automáticamente

### Desde Visual Studio Code:

1. **Abrir Visual Studio Code**

2. **Clonar repositorio:**

   - Presiona `Ctrl + Shift + P`
   - Escribe "Git: Clone" y selecciona la opción
   - Pega la URL del repositorio: `https://github.com/tu-usuario/kingkeys-gaming.git`
   - Selecciona una carpeta donde guardar el proyecto

3. **Abrir terminal integrada:**

   - Presiona `Ctrl + \`` (acento grave)
   - O ve a `Terminal > New Terminal` en el menú

4. **Instalar dependencias:**

   ```bash
   npm install
   ```

5. **Ejecutar el proyecto:**

   ```bash
   npm run dev
   ```

6. **Ver la aplicación:**
   - VS Code mostrará una notificación con el enlace
   - O abre manualmente [http://localhost:5173](http://localhost:5173)

## 🎮 Uso de la Aplicación

### Navegación Principal

- **Inicio**: Página principal con productos destacados y ofertas especiales
- **Divisas**: Catálogo completo de monedas virtuales para juegos
- **Gift Cards**: Tarjetas regalo para plataformas digitales

### Características de Compra

- **Búsqueda**: Encuentra productos específicos usando la barra de búsqueda
- **Filtros**: Filtra por categoría, plataforma, precio y más
- **Detalles del Producto**: Información completa, reseñas y especificaciones
- **Carrito de Compras**: Añade múltiples productos antes de comprar

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de interfaz base
│   ├── filters/        # Componentes de filtrado
│   ├── Header.tsx      # Navegación principal
│   ├── Footer.tsx      # Pie de página
│   └── Layout.tsx      # Layout base
├── pages/              # Páginas de la aplicación
│   ├── Index.tsx       # Página de inicio
│   ├── Divisas.tsx     # Catálogo de divisas
│   ├── GiftCards.tsx   # Catálogo de gift cards
│   └── ProductDetail.tsx # Detalles del producto
├── data/               # Datos y tipos
│   └── products.ts     # Información de productos
└── lib/                # Utilidades
    └── utils.ts        # Funciones auxiliares
```

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run test` - Ejecuta las pruebas
- `npm run typecheck` - Verifica los tipos de TypeScript

## 🎨 Personalización

### Colores de Marca

El proyecto utiliza los colores especificados:

- **Primary**: #006D5B (Verde principal)
- **Secondary**: #939393 (Gris secundario)

Estos colores están configurados en `tailwind.config.ts` y se pueden modificar según sea necesario.

### Agregar Nuevos Productos

Para añadir productos, edita el archivo `src/data/products.ts`:

```typescript
{
  id: 'nuevo-producto',
  title: 'Nombre del Producto',
  description: 'Descripción detallada...',
  price: 29.99,
  image: '/ruta/imagen.jpg',
  category: 'divisas', // o 'gift-cards'
  // ... otros campos
}
```

## 🤝 Contribución

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda:

- 📧 Email: soporte@kingkeys-gaming.com
- 📱 Teléfono: +1 (555) GAMING-24
- 🌐 Sitio Web: [kingkeys-gaming.com](https://kingkeys-gaming.com)

---

¡Gracias por usar KingKeys Gaming! 🎮✨
