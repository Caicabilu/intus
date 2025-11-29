# 📦 Catálogo de Productos - Intus CMS

## ✅ Funcionalidad Implementada

Se ha creado un **catálogo de productos completo** sin pasarela de pago, ideal para mostrar tus productos artesanales.

---

## 🌐 Páginas Creadas

### 1. **Catálogo de Productos**
**URL**: http://localhost:3000/productos

**Características:**
- ✅ Grid responsive de productos (1 columna móvil, 2 tablet, 3 desktop)
- ✅ Tarjetas con imagen, nombre, categoría, precio y stock
- ✅ Badges para productos destacados y agotados
- ✅ Animaciones suaves al cargar
- ✅ Sección de categorías
- ✅ Mensaje personalizado si no hay productos

### 2. **Detalle de Producto**
**URL**: http://localhost:3000/productos/[slug]

**Características:**
- ✅ Galería de imágenes con miniaturas
- ✅ Información completa: nombre, precio, descripción
- ✅ Materiales y técnicas utilizadas
- ✅ Indicador de stock disponible
- ✅ Botones de contacto (Email y WhatsApp)
- ✅ Breadcrumb de navegación
- ✅ Diseño responsive

---

## 🎨 Componentes Creados

### **ProductCard.tsx** (`frontend/components/ProductCard.tsx`)
Tarjeta individual de producto para el catálogo:
- Imagen con efecto hover
- Precio destacado
- Badge de estado (stock, destacado)
- Link a detalle del producto

---

## 📡 API Integrada

### Funciones agregadas en `lib/api.ts`:

```typescript
getProducts(params?) // Obtener lista de productos
getProduct(slug)     // Obtener un producto por slug
```

**Parámetros disponibles:**
- `page`: Número de página
- `limit`: Productos por página
- `featured`: Filtrar destacados
- `category`: Filtrar por categoría

---

## 🎯 Cómo Usar

### 1. **Crear Productos en Strapi**

1. Ve a http://localhost:1337/admin
2. **Content Manager** → **Product** → **Create new entry**
3. Completa los campos:
   ```
   ├── Name: "Nombre del producto"
   ├── Slug: (generado automáticamente)
   ├── Description: "Descripción detallada"
   ├── Price: 15000
   ├── Stock: 10
   ├── Materials: "Lana orgánica, tintes naturales"
   ├── Techniques: "Telar tradicional"
   ├── Featured: ✅ (si quieres destacarlo)
   ├── Category: [Seleccionar categoría]
   └── Images: [Subir 1 o más imágenes]
   ```
4. Click **Publish**

### 2. **Ver en el Frontend**

- **Catálogo**: http://localhost:3000/productos
- **Detalle**: http://localhost:3000/productos/[slug-del-producto]

### 3. **Navegación**

El navbar ahora incluye un enlace a **"Productos"** entre "Inicio" y "Blog".

---

## 📞 Sistema de Contacto

Cada producto incluye botones de contacto en la página de detalle:

### **Email**
```html
Enlace: mailto:contacto@intus.com
```
**Para personalizar:** Edita `frontend/app/productos/[slug]/page.tsx` línea ~180

### **WhatsApp**
```html
Enlace: https://wa.me/5491112345678
```
**Para personalizar:** Edita `frontend/app/productos/[slug]/page.tsx` línea ~188
- Cambia el número de teléfono por el tuyo (formato internacional)
- Ejemplo: `5491123456789` para Argentina

---

## 🎨 Personalización

### **Colores**
Edita `frontend/tailwind.config.js` para cambiar:
- `amber-600`: Color principal (precio, botones)
- `gray-900`: Textos principales
- `green-600`: Botón WhatsApp

### **Moneda**
Por defecto muestra precios en pesos argentinos:
```typescript
${price.toLocaleString('es-AR')}
```

Para cambiar:
- USD: `.toLocaleString('en-US')`
- EUR: `.toLocaleString('es-ES')`
- MXN: `.toLocaleString('es-MX')`

### **Imágenes Placeholder**
Si un producto no tiene imagen, muestra `/placeholder-image.jpg`
- Coloca una imagen en `frontend/public/placeholder-image.jpg`

---

## 📊 Content Type: Product

Campos configurados en Strapi:

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| name | Text | ✅ | Nombre del producto |
| slug | UID | ✅ | URL amigable |
| description | Rich Text | ✅ | Descripción completa |
| price | Number | ✅ | Precio del producto |
| stock | Number | ✅ | Cantidad disponible |
| materials | Text | ❌ | Materiales utilizados |
| techniques | Text | ❌ | Técnicas artesanales |
| featured | Boolean | ❌ | Producto destacado |
| images | Media | ❌ | Galería de imágenes |
| category | Relation | ❌ | Categoría del producto |

---

## 🔐 Permisos en Strapi

Verifica que los permisos estén configurados:

1. **Settings** → **Users & Permissions** → **Roles** → **Public**
2. Expandir **Product**:
   - ✅ **find** (listar productos)
   - ✅ **findOne** (ver detalle)
3. Click **Save**

---

## 🚀 Próximas Funcionalidades (Opcionales)

Si necesitas expandir el catálogo, puedo agregar:

- 🔍 **Búsqueda** de productos
- 🏷️ **Filtros** por categoría, precio, disponibilidad
- 📄 **Paginación** para muchos productos
- ⭐ **Productos relacionados**
- 📱 **Compartir** en redes sociales
- 💬 **Formulario de consulta** personalizado

---

## ✅ Verificación

Prueba estas URLs:

1. **Catálogo**: http://localhost:3000/productos
2. **API Products**: http://localhost:1337/api/products?populate=*
3. **Detalle** (ejemplo): http://localhost:3000/productos/tu-producto-slug

---

**🎉 ¡Tu catálogo de productos está listo para usar!**
