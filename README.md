# Intus - Tejidos Naturales

Sistema de gestión de contenido para blog promocional de tejidos artesanales con lana orgánica.

## Arquitectura

- **Frontend**: Next.js 14 con TypeScript y Tailwind CSS
- **Backend/CMS**: Strapi (Headless CMS)
- **Base de Datos**: PostgreSQL
- **Contenedores**: Docker Compose

## Características

✅ **Sistema CMS completo** con interfaz de administración
✅ **Frontend moderno** con animaciones y diseño responsivo  
✅ **Gestión multimedia** para imágenes y galerías
✅ **Blog con categorías** y sistema de publicaciones
✅ **Preparado para e-commerce** (arquitectura extensible)
✅ **Totalmente containerizado** con Docker

## Instalación y Uso

### 1. Levantar el entorno completo

```bash
# Construir e iniciar todos los servicios
docker-compose up --build

# O en modo detached
docker-compose up -d --build
```

### 2. Acceder a los servicios

- **Frontend**: http://localhost:3000
- **Strapi Admin**: http://localhost:1337/admin
- **Base de Datos**: localhost:5432

### 3. Configuración inicial de Strapi

1. Ir a http://localhost:1337/admin
2. Crear cuenta de administrador
3. Configurar tipos de contenido:
   - **Posts** (título, slug, contenido, imagen destacada, galería, categoría)
   - **Categories** (nombre, slug, descripción)
   - **Gallery** (título, descripción, imágenes)

### 4. Estructura de Content Types recomendada

#### Collection Type: Posts
- `title` (Text - Required)
- `slug` (UID - Required, Target field: title)  
- `excerpt` (Text)
- `content` (Rich Text)
- `featured_image` (Media - Single)
- `gallery` (Media - Multiple)
- `featured` (Boolean)
- `category` (Relation - Many to One with Categories)
- `author` (Relation - Many to One with Users)

#### Collection Type: Categories  
- `name` (Text - Required)
- `slug` (UID - Required, Target field: name)
- `description` (Text)
- `posts` (Relation - One to Many with Posts)

## Comandos útiles

```bash
# Ver logs
docker-compose logs -f

# Reiniciar servicios
docker-compose restart

# Parar servicios  
docker-compose down

# Limpiar volúmenes (CUIDADO: borra datos)
docker-compose down -v
```

## Extensión a E-commerce

La arquitectura está preparada para añadir funcionalidad de tienda:

1. **Strapi**: Añadir Content Types para productos, órdenes, clientes
2. **Frontend**: Integrar carrito de compras y checkout
3. **Pagos**: Stripe, PayPal u otros gateways
4. **Inventario**: Sistema de gestión de stock

## Desarrollo

### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```

### Personalización
- **Colores**: Editar `tailwind.config.js`
- **Componentes**: Directorio `/components`
- **API**: Configurar en `/lib/api.ts`
- **Estilos**: `/app/globals.css`

## Tecnologías

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animaciones)
- Strapi CMS
- PostgreSQL
- Docker & Docker Compose