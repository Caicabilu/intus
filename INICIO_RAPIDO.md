# 🚀 GUÍA DE INICIO RÁPIDO - INTUS CMS

## ✅ Instalación Completada

- ✅ PostgreSQL corriendo en puerto 5433 (Docker)
- ✅ Strapi v4.25.4 instalado con TypeScript
- ✅ Frontend Next.js 14 con dependencias instaladas
- ✅ Node v20.19.6 (vía nvm-windows)

---

## 🎯 PASOS PARA INICIAR EL SISTEMA

### 1️⃣ INICIAR STRAPI (Primera Terminal PowerShell)

```powershell
cd "D:\PROYECTO INTUS\intus\strapi-app"
npm run develop
```

**Espera a que aparezca:** `Admin UI available at http://localhost:1337/admin`

### 2️⃣ CREAR CUENTA DE ADMINISTRADOR

1. Abre tu navegador en: **http://localhost:1337/admin**
2. Completa el formulario de registro:
   - **Nombre**: Tu nombre
   - **Email**: tu@email.com
   - **Password**: (mínimo 8 caracteres)
3. Haz clic en **"Let's start"**

### 3️⃣ CONFIGURAR CONTENT TYPES

#### A) Crear Collection Type: **Categories**

1. Ve a **Content-Type Builder** (barra lateral izquierda)
2. Click **Create new collection type**
3. Display name: `Category`
4. Agregar campos:

```yaml
Campo 1:
├── Type: Text
├── Name: name
└── Advanced: ✅ Required, ✅ Unique

Campo 2:
├── Type: UID
├── Name: slug
└── Attached field: name

Campo 3:
├── Type: Text
├── Name: description
└── Type: Long text
```

5. Click **Save** (reiniciará el servidor)

#### B) Crear Collection Type: **Posts**

1. **Content-Type Builder** → **Create new collection type**
2. Display name: `Post`
3. Agregar campos:

```yaml
Campo 1:
├── Type: Text
├── Name: title
└── Advanced: ✅ Required

Campo 2:
├── Type: UID
├── Name: slug
└── Attached field: title

Campo 3:
├── Type: Text
├── Name: excerpt
└── Type: Long text

Campo 4:
├── Type: Rich Text
└── Name: content

Campo 5:
├── Type: Media
├── Name: featured_image
└── Type: Single media

Campo 6:
├── Type: Media
├── Name: gallery
└── Type: Multiple media

Campo 7:
├── Type: Boolean
├── Name: featured
└── Default: false

Campo 8:
├── Type: Relation
├── Name: category
└── Relation: Post (Many) → Category (One)
```

8. Click **Save**

### 4️⃣ CONFIGURAR PERMISOS PÚBLICOS

1. **Settings** → **Users & Permissions** → **Roles**
2. Click en **Public**
3. Expandir **Category**:
   - ✅ find
   - ✅ findOne
4. Expandir **Post**:
   - ✅ find
   - ✅ findOne
5. Expandir **Upload**:
   - ✅ find
   - ✅ findOne
6. Click **Save** (botón arriba a la derecha)

### 5️⃣ CREAR CONTENIDO DE EJEMPLO

#### Crear Categorías:

**Content Manager** → **Category** → **Create new entry**

```
Categoría 1:
├── Name: "Técnicas Artesanales"
├── Description: "Métodos tradicionales de tejido"
└── 🟢 Publish

Categoría 2:
├── Name: "Productos"
├── Description: "Nuestra colección de tejidos"
└── 🟢 Publish

Categoría 3:
├── Name: "Sostenibilidad"
├── Description: "Compromiso con el medio ambiente"
└── 🟢 Publish
```

#### Crear Posts:

**Content Manager** → **Post** → **Create new entry**

```
Post 1:
├── Title: "El Arte del Hilado Manual"
├── Excerpt: "Descubre cómo transformamos fibras naturales..."
├── Content: [Escribe contenido de prueba]
├── Featured: ✅ true
├── Category: Técnicas Artesanales
└── 🟢 Publish

Post 2:
├── Title: "Colección Primavera"
├── Excerpt: "Nueva colección con tonos naturales..."
├── Featured: ✅ true
├── Category: Productos
└── 🟢 Publish
```

### 6️⃣ VERIFICAR APIs

Verifica que las APIs funcionen:
- http://localhost:1337/api/categories
- http://localhost:1337/api/posts?populate=*

Deberías ver JSON con tus datos.

### 7️⃣ INICIAR FRONTEND (Segunda Terminal PowerShell)

```powershell
cd "D:\PROYECTO INTUS\intus\frontend"
npm run dev
```

**Espera a que aparezca:** `ready - started server on 0.0.0.0:3000`

### 8️⃣ ACCEDER AL SITIO

- **Frontend**: http://localhost:3000
- **Strapi Admin**: http://localhost:1337/admin

---

## 🔧 COMANDOS ÚTILES

### Reiniciar PostgreSQL
```powershell
cd "D:\PROYECTO INTUS\intus"
docker-compose restart postgres
```

### Ver logs de Docker
```powershell
docker-compose logs -f postgres
```

### Detener servicios
```powershell
# Detener Strapi: Ctrl+C en la terminal
# Detener Frontend: Ctrl+C en la terminal
# Detener PostgreSQL:
docker-compose down
```

### Reiniciar todo desde cero
```powershell
# 1. Detener servicios
docker-compose down

# 2. Iniciar PostgreSQL
docker-compose up -d postgres

# 3. Iniciar Strapi (en una terminal)
cd strapi-app
npm run develop

# 4. Iniciar Frontend (en otra terminal)
cd frontend
npm run dev
```

---

## 🎉 ¡SISTEMA LISTO!

Tu CMS Intus está completamente instalado y configurado.

**Próximos pasos sugeridos:**
- Subir imágenes en Media Library
- Crear más posts y categorías
- Personalizar el frontend (tailwind.config.js, componentes)
- Explorar las guías en CONFIGURACION_STRAPI.md

---

## 📚 Documentación Adicional

- **CONFIGURACION_STRAPI.md** - Guía detallada de configuración
- **INSTALACION_STRAPI.md** - Proceso de instalación
- **GUIA_COMPLETA.md** - Documentación completa del proyecto
- **TUTORIALES_ESPECIFICOS.md** - Tutoriales paso a paso

---

**¿Problemas?**
- Verifica que PostgreSQL esté corriendo: `docker ps`
- Revisa los logs de Strapi en la terminal
- Asegúrate de estar usando Node 20: `node --version`
