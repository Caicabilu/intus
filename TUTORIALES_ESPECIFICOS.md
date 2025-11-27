# 🎓 Tutoriales Específicos - Sistema Intus

## 📚 **Índice de Tutoriales**

1. [🖼️ Gestión de Imágenes](#-gestión-de-imágenes)
2. [📝 Creación de Posts](#-creación-de-posts)
3. [🏷️ Organización con Categorías](#️-organización-con-categorías)
4. [🎨 Personalización Visual](#-personalización-visual)
5. [📱 SEO y Social Media](#-seo-y-social-media)
6. [🔧 Mantenimiento del Sistema](#-mantenimiento-del-sistema)

---

## 🖼️ **Gestión de Imágenes**

### Tutorial: Subir y Organizar Imágenes

#### **Paso a Paso:**

1. **Acceder a Media Library**:
   ```
   Strapi Admin → Media Library → Upload assets
   ```

2. **Subir imágenes**:
   - **Método 1**: Drag & drop desde tu computadora
   - **Método 2**: Click "Browse files" y seleccionar

3. **Organizar en carpetas**:
   ```
   📁 productos/
   ├── mantas/
   ├── bufandas/
   └── chalecos/
   
   📁 procesos/
   ├── hilado/
   ├── tejido/
   └── acabado/
   
   📁 galeria/
   └── eventos/
   ```

4. **Optimización recomendada**:
   - **Featured Images**: 1200x800px
   - **Galería**: 800x600px
   - **Thumbnails**: 400x300px
   - **Formato**: JPG (fotos), PNG (logos)

#### **Consejos Profesionales**:
✅ **Nombra archivos descriptivamente**: `manta-lana-organica-beige.jpg`  
✅ **Alt text siempre**: "Manta tejida a mano con lana orgánica en tono beige"  
✅ **Comprime antes de subir**: Usa herramientas como TinyPNG  

---

## 📝 **Creación de Posts**

### Tutorial: Post Perfecto para Intus

#### **Estructura Recomendada:**

```markdown
# Título Principal (H1)
## Introducción atractiva

Párrafo inicial que enganche al lector...

## Desarrollo (H2)
### Subsección (H3)

Contenido detallado con:
- Listas con viñetas
- **Texto en negrita** para énfasis
- *Cursiva* para conceptos importantes

## Galería de Imágenes

[Insertar galería aquí]

## Conclusión

Call to action final...
```

#### **Template para Posts de Productos:**

```yaml
Título: "[Producto] - [Característica Única]"
Ejemplo: "Manta Andina - Tejida con Técnica Ancestral"

Excerpt: "En 2-3 líneas, describe lo más atractivo del producto y su valor único."

Content Structure:
├── Historia del producto/técnica
├── Proceso de creación (paso a paso)
├── Materiales utilizados
├── Galería de imágenes del proceso
├── Producto final
└── Call to action (contacto/interés)
```

#### **Template para Posts de Técnicas:**

```yaml
Título: "El Arte de [Técnica] en Intus"
Ejemplo: "El Arte del Cardado Manual en Intus"

Content Structure:  
├── ¿Qué es esta técnica?
├── Historia y origen
├── Nuestro proceso específico
├── Herramientas utilizadas
├── Paso a paso visual
├── Resultados únicos
└── Por qué la elegimos
```

---

## 🏷️ **Organización con Categorías**

### Sistema de Categorías Recomendado:

```yaml
📂 Técnicas Artesanales
├── Descripción: "Métodos tradicionales y únicos"
├── Posts: Hilado, Cardado, Tintado, Tejido
└── Color sugerido: #8b4513 (marrón orgánico)

📂 Productos  
├── Descripción: "Nuestra colección actual"
├── Posts: Mantas, Bufandas, Chalecos, Accesorios
└── Color sugerido: #d4b896 (beige natural)

📂 Sostenibilidad
├── Descripción: "Compromiso ambiental y social"  
├── Posts: Proceso sostenible, Impacto, Certificaciones
└── Color sugerido: #6b8e23 (verde oliva)

📂 Historia y Cultura
├── Descripción: "Tradiciones y legado artesanal"
├── Posts: Orígenes, Artesanos, Tradiciones
└── Color sugerido: #8b4513 (tierra)

📂 Noticias
├── Descripción: "Novedades y eventos"
├── Posts: Lanzamientos, Eventos, Colaboraciones  
└── Color sugerido: #daa520 (dorado)
```

### **Cómo usar Categories efectivamente:**

1. **Máximo 5-6 categorías** (no más)
2. **Nombres claros y específicos**
3. **Descripción de 1-2 líneas**
4. **Asignar SIEMPRE** una categoría por post
5. **Revisar balance** (que no haya categorías vacías)

---

## 🎨 **Personalización Visual**

### **Cambiar Colores del Sitio:**

Editar archivo: `frontend/tailwind.config.js`

```javascript
colors: {
  'organic-brown': {
    // Tus colores personalizados
    500: '#tu-color-principal',
    600: '#tu-color-hover',
  },
  'natural-beige': {
    // Tonos complementarios  
    50: '#tu-color-fondo',
    100: '#tu-color-claro',
  }
}
```

### **Cambiar Tipografías:**

```javascript
fontFamily: {
  'serif': ['Georgia', 'serif'], // Para títulos
  'sans': ['Inter', 'sans-serif'], // Para texto
}
```

### **Logos disponibles:**
- **Navbar**: `Intus_logo amarillo negro.svg` (sobre fondo claro)
- **Footer**: `logotipo blanco.png` (sobre fondo oscuro)  
- **Hero**: `Intus_logo amarillo blanco.svg` (sobre gradiente)

---

## 📱 **SEO y Social Media**

### **Optimización SEO por Post:**

```yaml
Título SEO: "Máximo 60 caracteres con palabras clave"
Meta Description: "150-160 caracteres describiendo el contenido"
Keywords: "tejidos, lana orgánica, artesanal, sostenible"
Featured Image: "Imagen atractiva para redes sociales (1200x630px)"
```

### **Estructura de URLs amigables:**
- ✅ `intus.com/blog/arte-hilado-manual`
- ❌ `intus.com/post?id=123`

### **Open Graph (redes sociales):**
Cada post incluye automáticamente:
- Título del post
- Imagen destacada  
- Excerpt como descripción
- URL canónica

---

## 🔧 **Mantenimiento del Sistema**

### **Rutina Semanal:**

```bash
# Lunes: Verificar estado del sistema
docker-compose ps
docker-compose logs --tail=50

# Miércoles: Backup de contenido
docker exec intus_postgres pg_dump -U intus_user intus_db > backup_$(date +%Y%m%d).sql

# Viernes: Limpiar logs antiguos
docker-compose logs --tail=100 > logs_$(date +%Y%m%d).txt
```

### **Rutina Mensual:**

1. **Revisar imágenes** no utilizadas
2. **Actualizar contenido** obsoleto
3. **Verificar enlaces** internos
4. **Optimizar base de datos**

### **Comandos Útiles:**

```bash
# Reiniciar solo frontend (cambios visuales)
docker-compose restart frontend

# Reiniciar solo CMS (problemas admin)
docker-compose restart strapi  

# Ver uso de disco
docker system df

# Limpiar imágenes no utilizadas
docker image prune
```

---

## 🆘 **Solución de Problemas Comunes**

### **Post no aparece en el sitio:**
1. ✅ Verificar que esté **Published** (no Draft)
2. ✅ Verificar permisos públicos en Strapi
3. ✅ Hard refresh: `Ctrl + Shift + R`

### **Imagen no se ve:**
1. ✅ Formato compatible (JPG, PNG, WebP)
2. ✅ Tamaño < 10MB  
3. ✅ Permisos de Upload habilitados

### **Sitio lento:**
1. ✅ Optimizar imágenes (< 500KB cada una)
2. ✅ Limitar posts por página (máximo 10)
3. ✅ Revisar logs: `docker-compose logs frontend`

### **Error 500:**
```bash
# Verificar logs detallados
docker-compose logs strapi --tail=50

# Reiniciar servicios
docker-compose restart

# Último recurso: rebuild
docker-compose down
docker-compose up --build
```

---

## 📈 **Métricas y Análisis**

### **KPIs Recomendados:**
- **Engagement**: Tiempo en página, scroll depth
- **Content**: Posts más visitados, categorías populares
- **Technical**: Velocidad de carga, errores 404

### **Herramientas sugeridas:**
- **Google Analytics** (futuro)
- **Google Search Console** (SEO)
- **PageSpeed Insights** (performance)

---

**¡Con estos tutoriales tienes todo lo necesario para ser un experto en tu sistema Intus CMS! 🚀**