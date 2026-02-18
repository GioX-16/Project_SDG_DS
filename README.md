<div align="center">
  <br />
  <img src="https://github.com/user-attachments/assets/20f9b25a-61ab-4f19-96f0-ac463da2932c" alt="Project Banner" width="100%">
  <br />

  <h1>Proyecto de Diseño de Sistemas - NestJS & Prisma</h1>

  <p>
    <b>Arquitectura Robusta • Multi-Database • CMS Headless de Alto Rendimiento</b>
  </p>

  [![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
  [![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)

  <br />
</div>

> [!NOTE]
> Este repositorio constituye la entrega final para la clase de **DISEÑO DE SISTEMAS**. Desarrollado con tecnologías de punta: **Typescript, NestJS, Prisma, Seeds** y una arquitectura escalable.

---

## 📸 Vista Previa del Entorno

A continuación se muestra el entorno de desarrollo en acción, destacando el editor de código y la terminal con el servidor en ejecución.

<div align="center">
  
  ### 💻 Editor de Código
  <img width="1920" height="1193" alt="Cappppppp" src="https://github.com/user-attachments/assets/579c0464-3320-4129-953c-809919f50fc2" />

  
  ### 🖥️ Terminal (Servidor Activo)
  <img width="1581" height="598" alt="cappppp" src="https://github.com/user-attachments/assets/57722526-bee9-43ab-8199-10c390a20a16" />

</div>

---

## 📋 Tabla de Contenidos

- [Prerrequisitos y Gestión de Versiones](#-prerrequisitos-y-gestión-de-versiones)
- [Stack Tecnológico](#-stack-tecnológico)
- [Guías de Implementación](#-guías-de-implementación)
- [Base de Datos (Multi-DB)](#-base-de-datos-multi-db)
- [Instalación y Uso](#-instalación-y-uso)

---

## 🟢 Prerrequisitos y Gestión de Versiones

Para garantizar la compatibilidad y estabilidad, este proyecto requiere versiones específicas de Node.js.

### Herramientas Necesarias
- **Node.js**: Gestión mediante `fnm` (Fast Node Manager) recomendada.
- **NPM**: Gestor de paquetes.
- **Docker**: (Opcional) Requerido solo para despliegues con PostgreSQL.

| Componente | Directorio | Versión Node.js | Motivo |
| :--- | :--- | :--- | :--- |
| **Backend (NestJS)** | Raíz (`/`) | **v25.x** | Soporte para `better-sqlite3` nativo |
| **CMS (Strapi)** | `cms/` | **v22.x** (LTS) | Compatibilidad oficial Strapi v5 |

> **Tip:** Usa `fnm install 25` y `fnm install 22` para tener ambas versiones listas.

---

## 🛠️ Stack Tecnológico

La arquitectura se basa en principios SOLID y herramientas modernas para máxima eficiencia:

- **Core Framework**: [NestJS (v11)](https://nestjs.com/) - Modularidad y Arquitectura Hexagonal.
- **ORM**: [Prisma (v7)](https://www.prisma.io/) - Type-safe database client.
- **API Docs**: [Swagger](https://swagger.io/) - Documentación automática y testable.
- **Seguridad**: [Passport.js](http://www.passportjs.org/) + [JWT](https://jwt.io/) - Autenticación robusta.
- **Validación**: `class-validator` & `class-transformer` - Integridad de datos en DTOs.

---

## 📚 Guías de Implementación

Consulta la documentación detallada para cada módulo del sistema:

| Módulo | Descripción | Documentación |
| :--- | :--- | :--- |
| **01. Setup** | Configuración Inicial del Entorno | [📄 Ver Guía](./docs/resumen-guia-1.md) |
| **02. API REST** | CRUD Profesional con Swagger | [📄 Ver Guía](./docs/resumen-guia-2.md) |
| **03. Auth** | Autenticación Segura (JWT) | [📄 Ver Guía](./docs/resumen-guia-3.md) |
| **04. CMS** | Headless CMS con Strapi | [📄 Ver Guía](./docs/resumen-guia-4.md) |

---

## 🗄️ Base de Datos (Multi-DB)

Este sistema implementa un patrón de **Repository** flexible, permitiendo cambiar el motor de base de datos sin alterar la lógica de negocio. Para detalles técnicos profundos, consulta la [**Documentación de Base de Datos**](./docs/DATABASE.md).

### Comandos Clave
*   `npm run db:docker:postgresql`: Levanta contenedor PostgreSQL (requiere `.env` configurado).
*   `npm run seed`: Puebla la base de datos con usuarios y roles iniciales.
*   `npx prisma studio`: Panel visual para gestión de datos.

> [!IMPORTANT]
> **Nota sobre SQLite:** El proyecto incluye `dev.db` preconfigurado para pruebas inmediatas. Para producción, cambia `DB_TYPE` a `postgresql` en tu `.env`.

---

## 🚀 Instalación y Uso

Sigue estos pasos para desplegar el proyecto localmente:

### 1. Preparación
```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
```

### 2. Base de Datos
```bash
# Generar cliente Prisma y sincronizar esquema
npx prisma generate
npx prisma db push

# (Opcional) Levantar PostgreSQL si no usas SQLite
npm run db:docker:postgresql

# Cargar datos semilla
npm run seed
```

### 3. Ejecución
```bash
# Modo desarrollo con Hot-Reload
npm run start:dev
```

---

## 🔗 Recursos Adicionales

- **Swagger UI:** `http://localhost:3006/api` (Verificar puerto en `.env`)
- **Arquitectura**: Código fuente en `src/core/database`.

---
<div align="center">
  <sub>© 2026 - Proyecto de Diseño de Sistemas</sub>
</div>
