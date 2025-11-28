# 🔧 SOLUCIÓN: APIs Strapi devuelven 404

## ❌ **PROBLEMA ORIGINAL**
```
- http://localhost:1337/api/categories → 404 Not Found
- http://localhost:1337/api/products → 404 Not Found
```

## 🔍 **DIAGNÓSTICO REALIZADO**

### 1. **Verificación de servicios**
- ✅ Strapi corriendo en puerto 1337
- ✅ PostgreSQL corriendo en puerto 5433  
- ✅ Admin panel accesible en /admin

### 2. **Problema identificado**
- ❌ Carpeta `strapi-app` vacía (sin estructura Strapi)
- ❌ No existían Content Types configurados
- ❌ APIs devolvían 404 porque no había rutas definidas

### 3. **Causa raíz**
**El contenedor Strapi estaba ejecutándose pero sin proyecto inicializado**

---

## ✅ **SOLUCIÓN IMPLEMENTADA**

### **Método 1: Instalación Manual (Recomendado)**
```bash
# 1. Mantener PostgreSQL en Docker
docker-compose up -d postgres

# 2. Instalar Strapi localmente  
cd strapi-app
npx create-strapi-app@4.25.4 . --quickstart --no-run --typescript
npm install pg

# 3. Configurar PostgreSQL (config/database.js)
# 4. Iniciar Strapi
npm run develop
```

### **Método 2: Docker Simplificado**
```bash
docker-compose -f docker-compose-simple.yml up
```

---

## 📋 **CONFIGURACIÓN COMPLETA**

### **Content Types a crear:**
1. **Categories**: name, slug, description, image
2. **Products**: name, slug, description, price, images, category, stock, materials, techniques, featured

### **Permisos API:**
- Settings > Users & Permissions > Public
- Habilitar `find` y `findOne` para Categories y Products

---

## 🎯 **RESULTADO ESPERADO**

Después de la configuración:
- ✅ **http://localhost:1337/api/categories** → JSON con categorías
- ✅ **http://localhost:1337/api/products** → JSON con productos
- ✅ Admin panel funcional para gestión de contenido

---

## 📝 **ARCHIVOS MODIFICADOS**

1. `docker-compose.yml` → Configuración original con Strapi v5
2. `docker-compose-simple.yml` → Configuración simplificada  
3. `strapi.Dockerfile` → Dockerfile personalizado
4. `INSTALACION_STRAPI.md` → Guía detallada de instalación
5. `README.md` → Documentación actualizada