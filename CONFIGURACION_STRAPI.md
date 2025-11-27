# 🎯 Configuración Automática de Strapi - Intus CMS

## ⚡ **Configuración Rápida (15 minutos)**

### PASO 1: Acceso Inicial
1. **Ir a**: http://localhost:1337/admin
2. **Crear cuenta admin** (solo primera vez)
3. **Recordar credenciales** para futuros accesos

---

## 📋 **PASO 2: Content Types - Configuración Exacta**

### 🏗️ **Collection Type: Posts**

**Content-Types Builder** → **Create new collection type** → `posts`

#### Agregar campos EN ESTE ORDEN:

```yaml
1. title (Text Field)
   ├── Name: title
   ├── Type: Text  
   ├── Advanced Settings:
   │   ├── ✅ Required field
   │   ├── ✅ Unique field
   │   └── Max length: 200
   └── Save

2. slug (UID Field) 
   ├── Name: slug
   ├── Type: UID
   ├── Attached field: title
   ├── Advanced Settings:
   │   └── ✅ Required field
   └── Save

3. excerpt (Text Field)
   ├── Name: excerpt
   ├── Type: Text
   ├── Advanced Settings:
   │   ├── Type: Long text
   │   └── Max length: 500
   └── Save

4. content (Rich Text Field)
   ├── Name: content
   ├── Type: Rich Text
   └── Save

5. featured_image (Media Field)
   ├── Name: featured_image  
   ├── Type: Media
   ├── Select: Single media
   └── Save

6. gallery (Media Field)
   ├── Name: gallery
   ├── Type: Media  
   ├── Select: Multiple media
   └── Save

7. featured (Boolean Field)
   ├── Name: featured
   ├── Type: Boolean
   ├── Default value: false
   └── Save
```

**✅ Click "Save" después de cada campo**
**✅ Al final: Click "Save" general (reinicia el servidor)**

---

### 🏷️ **Collection Type: Categories**

**Content-Types Builder** → **Create new collection type** → `categories`

```yaml
1. name (Text Field)
   ├── Name: name
   ├── Type: Text
   ├── Advanced Settings:
   │   ├── ✅ Required field
   │   ├── ✅ Unique field  
   │   └── Max length: 100
   └── Save

2. slug (UID Field)
   ├── Name: slug
   ├── Type: UID
   ├── Attached field: name
   ├── Advanced Settings:
   │   └── ✅ Required field
   └── Save

3. description (Text Field)
   ├── Name: description
   ├── Type: Text
   ├── Advanced Settings:
   │   └── Type: Long text
   └── Save
```

**✅ Save final**

---

### 🔗 **Crear Relaciones**

1. **Editar Collection "posts"**
2. **Add another field**:
```yaml
category (Relation Field)
├── Name: category
├── Type: Relation
├── Relation type: "Post belongs to one Category"
└── Save
```

**✅ Save final (reinicia servidor)**

---

## 🔐 **PASO 3: Permisos Públicos**

### Configurar acceso público a la API:

1. **Settings** → **Users & Permissions Plugin** → **Roles**
2. **Click en "Public"**
3. **Expandir "Post"**:
   - ✅ **find** (listar posts)
   - ✅ **findOne** (ver post individual)
4. **Expandir "Category"**:
   - ✅ **find** (listar categorías)  
   - ✅ **findOne** (ver categoría individual)
5. **Expandir "Upload"** (para imágenes):
   - ✅ **find**
   - ✅ **findOne**
6. **Save** (botón superior derecha)

---

## 📝 **PASO 4: Contenido de Ejemplo**

### 🏷️ **Crear Categorías**

**Content Manager** → **Category** → **Create new entry**

```yaml
Categoría 1:
├── Name: "Técnicas Artesanales"
├── Slug: "tecnicas-artesanales" (automático)
├── Description: "Métodos tradicionales de tejido con lana orgánica"
└── 🟢 Publish

Categoría 2:  
├── Name: "Productos"
├── Slug: "productos" (automático)
├── Description: "Nuestra colección de tejidos únicos"
└── 🟢 Publish

Categoría 3:
├── Name: "Sostenibilidad"  
├── Slug: "sostenibilidad" (automático)
├── Description: "Compromiso con el medio ambiente"
└── 🟢 Publish
```

### 📄 **Crear Posts de Ejemplo**

**Content Manager** → **Post** → **Create new entry**

```yaml
Post 1:
├── Title: "El Arte del Hilado Manual"
├── Slug: "arte-hilado-manual" (automático)
├── Excerpt: "Descubre cómo transformamos fibras naturales en hilos únicos usando técnicas ancestrales que han sido transmitidas por generaciones."
├── Content: |
│   # El Proceso Artesanal
│   
│   El hilado manual es una técnica milenaria que conecta directamente 
│   nuestras manos con la materia prima. Cada fibra de lana orgánica 
│   se transforma cuidadosamente en hilos resistentes y suaves.
│   
│   ## Pasos del Proceso:
│   1. Selección de la lana
│   2. Limpieza y cardado
│   3. Hilado en rueca tradicional
│   4. Acabado final
├── Featured: ✅ true
├── Category: "Técnicas Artesanales"
├── Featured Image: [Subir imagen]
└── 🟢 Publish

Post 2:
├── Title: "Colección Primavera: Tonos Naturales"
├── Slug: "coleccion-primavera-tonos-naturales" (automático)  
├── Excerpt: "Nuestra nueva colección combina colores inspirados en la naturaleza con texturas únicas."
├── Content: [Texto sobre la colección]
├── Featured: ✅ true
├── Category: "Productos"
└── 🟢 Publish

Post 3:
├── Title: "Compromiso Sostenible: De la Oveja al Tejido"
├── Slug: "compromiso-sostenible-oveja-tejido" (automático)
├── Excerpt: "Conoce nuestro proceso completamente sostenible desde el origen de la lana hasta el producto final."
├── Content: [Texto sobre sostenibilidad]
├── Featured: false
├── Category: "Sostenibilidad"  
└── 🟢 Publish
```

---

## 🖼️ **PASO 5: Subir Imágenes**

### Media Library:
1. **Media Library** → **Upload assets**
2. **Drag & drop** tus imágenes de productos/procesos
3. **Asignar a posts** correspondientes

### Recomendaciones:
- **Tamaño**: 1200x800px (featured images)
- **Formato**: JPG o PNG
- **Peso**: < 500KB por imagen
- **Alt text**: Descripción clara

---

## ✅ **VERIFICACIÓN FINAL**

### Comprobar que funciona:

1. **API Posts**: http://localhost:1337/api/posts?populate=*
2. **API Categories**: http://localhost:1337/api/categories
3. **Frontend**: http://localhost:3002

### ¿Todo OK? ✅
- Posts aparecen en el frontend
- Imágenes se ven correctamente
- Enlaces funcionan
- Categorías filtran contenido

---

## 🚨 **Problemas Comunes**

### ❌ "Not found" en la API
**Solución**: Verificar permisos públicos

### ❌ Imágenes no aparecen
**Solución**: Revisar permisos de Upload

### ❌ Posts no aparecen en frontend
**Solución**: Verificar que estén **Published** (no Draft)

---

**🎉 ¡Configuración completada! Tu CMS está listo para usar.**