# 📖 Guía Completa - Sistema Intus CMS

## 🎯 **¿Qué tienes disponible?**

Tu sistema incluye:
- **CMS Administrativo** (Como WordPress pero moderno)
- **Sitio Web Elegante** con tu marca Intus
- **Gestión de Multimedia** para imágenes y galerías
- **Blog Completo** con categorías y posts
- **Arquitectura preparada** para tienda online futura

---

## 🚀 **PASO 1: Iniciar el Sistema**

### Comandos básicos:
```bash
# Ir al directorio del proyecto
cd C:\Users\Usuario\Documents\PROYECTOS DOCKER\intus_web

# Iniciar todos los servicios
docker-compose up -d

# Ver estado de servicios
docker-compose ps

# Ver logs en tiempo real
docker-compose logs -f

# Parar servicios
docker-compose down
```

### URLs importantes:
- **Sitio Web**: http://localhost:3002
- **Admin CMS**: http://localhost:1337/admin
- **Base de Datos**: PostgreSQL puerto 5433

---

## 🔧 **PASO 2: Configuración Inicial de Strapi**

### Primera vez (SOLO UNA VEZ):

1. **Ir a**: http://localhost:1337/admin

2. **Crear cuenta de administrador**:
   - Nombre: Tu nombre
   - Email: tu-email@ejemplo.com
   - Contraseña: (segura, mínimo 8 caracteres)

3. **¡Ya tienes acceso al CMS!**

---

## 📝 **PASO 3: Crear Tipos de Contenido**

### 3.1 Crear Collection Type "Posts"

1. En Strapi Admin → **Content-Types Builder**
2. **Create new collection type** → Nombre: `posts`
3. **Agregar campos uno por uno**:

#### Campos obligatorios:
```
📌 title (Text)
   - Name: title
   - Type: Text
   - ✅ Required
   - ✅ Unique

📌 slug (UID) 
   - Name: slug
   - Type: UID
   - Target field: title
   - ✅ Required

📌 excerpt (Text)
   - Name: excerpt
   - Type: Text (Long text)

📌 content (Rich Text)
   - Name: content 
   - Type: Rich Text
   
📌 featured_image (Media)
   - Name: featured_image
   - Type: Media
   - Single media

📌 gallery (Media)
   - Name: gallery
   - Type: Media
   - Multiple media

📌 featured (Boolean)
   - Name: featured
   - Type: Boolean
   - Default: false

📌 publishedAt (Date)
   - Se crea automáticamente
```

4. **Guardar** → El servidor se reiniciará automáticamente

### 3.2 Crear Collection Type "Categories"

1. **Create new collection type** → Nombre: `categories`
2. **Campos**:
```
📌 name (Text)
   - Name: name
   - Type: Text
   - ✅ Required

📌 slug (UID)
   - Name: slug  
   - Type: UID
   - Target field: name
   - ✅ Required

📌 description (Text)
   - Name: description
   - Type: Long text
```

3. **Guardar**

### 3.3 Crear Relaciones

1. **Editar Collection "Posts"**
2. **Agregar campo**:
```
📌 category (Relation)
   - Name: category
   - Type: Relation
   - Relation: Post belongs to one Category
```

3. **Guardar**

---

## 🔐 **PASO 4: Configurar Permisos**

### Permitir acceso público al contenido:

1. **Settings** → **Users & Permissions Plugin** → **Roles**
2. **Public** (role)
3. **Expandir cada Collection Type**:
   - **Posts**: ✅ find, ✅ findOne
   - **Categories**: ✅ find, ✅ findOne
   - **Upload**: ✅ find, ✅ findOne
4. **Save**

---

## ✍️ **PASO 5: Crear Contenido**

### 5.1 Crear Categorías

1. **Content Manager** → **Categories** → **Create new entry**
2. **Ejemplos**:
```
📂 Técnicas Artesanales
   - Name: Técnicas Artesanales
   - Slug: tecnicas-artesanales (se genera automático)
   - Description: Métodos tradicionales de tejido

📂 Productos
   - Name: Productos  
   - Slug: productos
   - Description: Nuestra colección de tejidos

📂 Sostenibilidad
   - Name: Sostenibilidad
   - Slug: sostenibilidad  
   - Description: Compromiso ambiental
```
3. **Publish** cada categoría

### 5.2 Crear Posts

1. **Content Manager** → **Posts** → **Create new entry**
2. **Ejemplo de post**:
```
📄 El Arte del Hilado Manual
   - Title: El Arte del Hilado Manual
   - Slug: arte-hilado-manual (automático)
   - Excerpt: Descubre cómo transformamos fibras naturales...
   - Content: [Texto completo con formato rich text]
   - Featured Image: [Subir imagen]
   - Gallery: [Subir múltiples imágenes]
   - Featured: ✅ (para posts destacados)
   - Category: Técnicas Artesanales
```

3. **Save** → **Publish**

---

## 🖼️ **PASO 6: Gestión de Imágenes**

### Subir imágenes:

1. **Media Library** → **Upload assets**
2. **Drag & drop** o **Browse files**
3. **Las imágenes se muestran automáticamente en el sitio**

### Consejos:
- **Tamaño recomendado**: 1200x800px para featured images
- **Formatos**: JPG, PNG, WebP
- **Alt text**: Siempre agregar descripción

---

## 🎨 **PASO 7: Personalizar el Sitio Web**

### Tu sitio ya incluye:
- ✅ **Logos de Intus** configurados
- ✅ **Colores orgánicos** de la marca
- ✅ **Diseño responsivo** 
- ✅ **Animaciones elegantes**
- ✅ **SEO optimizado**

### Páginas disponibles:
- **Inicio**: Posts destacados + hero
- **Blog**: Listado completo de posts
- **Post individual**: Contenido completo + galería
- **Categorías**: Posts por categoría

---

## 🔄 **PASO 8: Flujo de Trabajo Diario**

### Para agregar contenido nuevo:

1. **Crear/editar post en Strapi**:
   - Content Manager → Posts → Create/Edit
   - Agregar título, contenido, imágenes
   - Publish

2. **Ver cambios en el sitio**:
   - Refresh http://localhost:3002
   - Los cambios aparecen inmediatamente

### Para gestionar categorías:
1. **Crear categoría** en Strapi
2. **Asignar posts** a esa categoría
3. **Filtrar por categoría** en el frontend

---

## 🛠️ **PASO 9: Comandos Avanzados**

### Ver logs específicos:
```bash
# Logs del frontend
docker-compose logs frontend -f

# Logs del CMS  
docker-compose logs strapi -f

# Logs de la base de datos
docker-compose logs postgres -f
```

### Backup de datos:
```bash
# Backup de la base de datos
docker exec intus_postgres pg_dump -U intus_user intus_db > backup.sql

# Restaurar backup
docker exec -i intus_postgres psql -U intus_user -d intus_db < backup.sql
```

### Reiniciar servicios:
```bash
# Reiniciar un servicio específico
docker-compose restart frontend
docker-compose restart strapi

# Reiniciar todo
docker-compose down && docker-compose up -d
```

---

## 🚨 **PASO 10: Solución de Problemas**

### Si el sitio no carga:
1. Verificar que los contenedores estén corriendo:
   ```bash
   docker-compose ps
   ```
2. Ver logs para errores:
   ```bash
   docker-compose logs
   ```

### Si Strapi no responde:
1. Reiniciar Strapi:
   ```bash
   docker-compose restart strapi
   ```
2. Esperar 30 segundos y probar http://localhost:1337/admin

### Si hay cambios que no aparecen:
1. **Hard refresh** del navegador: Ctrl+Shift+R
2. Verificar que el post esté **Published** en Strapi

---

## 🛒 **FUTURO: Extensión a E-commerce**

### Tu arquitectura ya está preparada para:
- **Productos** con variantes y precios
- **Carrito de compras** 
- **Checkout** con pagos
- **Gestión de órdenes**
- **Inventario**

### Cuando quieras agregar tienda:
1. Crear Collection Types: Products, Orders, Customers
2. Integrar pasarela de pago (Stripe, PayPal)
3. Agregar componentes de e-commerce al frontend

---

## 📞 **¿Necesitas Ayuda?**

### Recursos útiles:
- **Documentación Strapi**: https://docs.strapi.io
- **Next.js Docs**: https://nextjs.org/docs  
- **Tailwind CSS**: https://tailwindcss.com/docs

### URLs importantes:
- **Frontend**: http://localhost:3002
- **Admin**: http://localhost:1337/admin
- **API**: http://localhost:1337/api

---

**¡Tu sistema está listo para crear contenido profesional! 🎉**