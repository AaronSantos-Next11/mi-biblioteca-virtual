# Bienvenido a la documentación oficial de Dumblee

**Dumblee** es una aplicación móvil desarrollada con **React Native**, **Expo** y **TypeScript**, que funciona como una biblioteca virtual centrada en libros de **programación**, **ciencia** e **historia**. Diseñada para entusiastas del conocimiento, ofrece una experiencia intuitiva y visualmente atractiva para explorar, consultar y descubrir libros de diversas categorías.

## Diagrama de navegación y diseño de Dumblee

El siguiente diagrama muestra el flujo principal de pantallas en la aplicación móvil **Dumblee**, así como notas importantes sobre el diseño y los datos manejados.

### Flujo de pantallas:

1. **Pantalla de presentación**
   - Bienvenida al usuario.
   - Ofrece opciones para iniciar sesión o crear una cuenta.
   - Fondo decorativo con ilustraciones.
   - Una vez autenticado, el usuario accede directamente al **Home**.

2. **Pantalla Home / Inicio**
   - Muestra el **libro destacado del día**.
   - Muestra un feed por **categorías** (tecnología, ciencia, historia).
   - Accesible desde la barra inferior de navegación.

3. **Pantalla Reseña**
   - Permite al usuario escribir una reseña sobre un libro.
   - Incluye un formulario con nombre del libro, categoría y campo de texto para la reseña.

4. **Pantalla User**
   - Muestra los datos personales del usuario registrado.
   - Acceso a editar información o cerrar sesión.

---

### 📝 Notas importantes:

- Los **datos de cada libro** incluyen:
  - Nombre  
  - Autor  
  - Categoría  
  - Idioma original  
  - Año de publicación  
  - Imagen de portada

---

### 🎨 Paleta de colores utilizada:

Se usó la siguiente paleta de colores desde [ColorHunt](https://colorhunt.co/palette/2016581d24ca98abee9e8c9):

- `#201658` (Azul profundo)  
- `#1D24CA` (Azul vivo)  
- `#98ABEE` (Azul pastel)  
- `#F9E8C9` (Beige claro)  
- `#DDA853` (Oro suave)

---

### 📷 Diagrama visual:

<p align="center">
  <img src="./assets/images/imgs_README/Wireframe_mi-biblioteca-virtual.png" alt="Flujo de navegación de Dumblee" width="100%"/>
</p>


##  Características

- Catálogo visual de libros categorizados.
- Imágenes de portadas integradas localmente.
- Interfaz moderna y responsiva.
- Componentes reutilizables en TypeScript.
- Navegación fluida y amigable para el usuario.

## Tecnologías utilizadas

- **React Native** – UI móvil multiplataforma
- **Expo** – Desarrollo rápido y sin complicaciones
- **TypeScript** – Tipado estático para mayor robustez
- **JSON** – Datos de libros estructurados localmente
- **StyleSheet API** – Estilos nativos en línea

## Capturas de pantalla

<p align="center">
  <img src="./assets/images/imgs_README/welcome-to-dumblee.png" alt="Pantalla de bienvenida" width="250" />
  <img src="./assets/images/imgs_README/home-dumblee.png" alt="Pantalla principal" width="250"/>
  <img src="./assets/images/imgs_README/reseña-dumblee.png" alt="Pantalla de reseña" width="250"/>
  <!-- <img src="./assets/images/imgs_README/user-profile-dumblee.png" alt="Perfil de usuario" width="250" height="539"/> -->
</p>


## Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/AaronSantos-Next11/mi-biblioteca-virtual.git
cd mi-biblioteca-virtual
````

2. Instala las dependencias:

```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:

```bash
npx expo start
```

4. Escanea el código QR desde la app de **Expo Go** en tu dispositivo móvil.

## Próximas mejoras

* Buscador por título o autor
* Detalle individual del libro
* Integración con APIs externas (Google Books, Open Library)
* Sistema de favoritos
* Modo oscuro
