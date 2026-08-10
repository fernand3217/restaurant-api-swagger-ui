# 🍽️ API REST - Sistema de Reservaciones de Restaurante

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13+-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-1B222D)
![pnpm](https://img.shields.io/badge/pnpm-fast-orange)

Una API REST robusta y segura construida con Node.js y Express para gestionar las operaciones de un restaurante, incluyendo el manejo de usuarios, control de mesas y un sistema inteligente de reservaciones.

## ✨ Características Principales

- **Autenticación Segura:** Registro e inicio de sesión utilizando **JWT** (JSON Web Tokens) y contraseñas encriptadas con **bcrypt**.
- **Roles y Permisos (RBAC):** Control de acceso basado en roles (`admin` y `cliente`).
- **CRUD de Mesas:** Gestión completa del catálogo de mesas con _soft delete_ (borrado lógico).
- **Sistema Inteligente de Reservas:**
  - Validación de capacidad de las mesas.
  - Prevención de reservas dobles (overbooking) en la misma fecha y hora.
- **Documentación Interactiva:** Interfaz gráfica autogenerada con **Swagger UI**.
- **Pruebas Automatizadas:** Tests de integración implementados con **Vitest** y **Supertest**.

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js, Express
- **Base de Datos:** PostgreSQL
- **ORM:** Prisma
- **Seguridad:** jsonwebtoken (JWT), bcrypt
- **Documentación:** Swagger (swagger-jsdoc, swagger-ui-express)
- **Testing:** Vitest, Supertest
- **Gestor de Paquetes:** pnpm

## 📋 Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [PostgreSQL](https://www.postgresql.org/) (v13 o superior)
- [pnpm](https://pnpm.io/) (`corepack enable pnpm`)

## 🚀 Instalación y Configuración

Sigue estos pasos para levantar el entorno de desarrollo local:

1. **Clonar el repositorio**
   ```bash
   https://github.com/fernand3217/restaurant-api-swagger-ui.git
   cd restaurante-api
   ```
