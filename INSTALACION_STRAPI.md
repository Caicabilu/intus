# 📋 GUÍA DE INSTALACIÓN STRAPI MANUAL

## 🔍 **PROBLEMA IDENTIFICADO**
Las APIs de Strapi devolvían 404 porque el contenedor estaba vacío sin Content Types configurados.

## 🚀 **SOLUCIÓN IMPLEMENTADA**
Instalación manual de Strapi v4 para evitar conflictos de versiones en Docker.

---

## 📝 **INSTALACIÓN PASO A PASO**

### 1️⃣ **Iniciar PostgreSQL**
```bash
docker-compose up -d postgres
```
✅ **PostgreSQL corriendo en puerto 5433**

### 2️⃣ **Instalar Strapi v4 (en carpeta strapi-app)**
```bash
cd strapi-app
npx create-strapi-app@4.25.4 . --quickstart --no-run --typescript
```

### 3️⃣ **Instalar dependencia PostgreSQL**
```bash
npm install pg
```

### 4️⃣ **Configurar PostgreSQL**
Crear/editar `config/database.js`:
```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5433),
      database: env('DATABASE_NAME', 'intus_db'),
      user: env('DATABASE_USERNAME', 'intus_user'),
      password: env('DATABASE_PASSWORD', 'intus_password'),
      ssl: false,
    },
  },
});
```

### 5️⃣ **Crear archivo .env**
En `strapi-app/.env`:
```
DATABASE_HOST=localhost
DATABASE_PORT=5433
DATABASE_NAME=intus_db
DATABASE_USERNAME=intus_user
DATABASE_PASSWORD=intus_password
```

### 6️⃣ **Iniciar Strapi**
```bash
npm run develop
```

---

## 🎯 **CONFIGURACIÓN DE CONTENT TYPES**

### **Categories**
En Content-Type Builder → Create Collection Type:
- **name** (Text - Required, Unique)
- **slug** (UID - Required, Target: name)
- **description** (Text - Optional)
- **image** (Media - Optional)

### **Products**  
En Content-Type Builder → Create Collection Type:
- **name** (Text - Required, Unique)
- **slug** (UID - Required, Target: name)
- **description** (Rich Text - Required)
- **price** (Number - Required)
- **images** (Media - Multiple)
- **category** (Relation - Many to One with Categories)
- **stock** (Number - Required)
- **materials** (Text - Optional)
- **techniques** (Text - Optional)
- **featured** (Boolean - Default: false)

---

## 🔧 **CONFIGURAR PERMISOS API**

1. **Settings** → **Users & Permissions** → **Public**
2. Habilitar para **Categories** y **Products**:
   - ✅ find
   - ✅ findOne

---

## ✅ **VERIFICAR FUNCIONAMIENTO**

APIs disponibles:
- **http://localhost:1337/admin** (Panel de administración)
- **http://localhost:1337/api/categories** 
- **http://localhost:1337/api/products**

---

## 🐳 **DOCKER COMPOSE ALTERNATIVO**

Si quieres intentar con Docker nuevamente, usa:
```bash
docker-compose -f docker-compose-simple.yml up
```