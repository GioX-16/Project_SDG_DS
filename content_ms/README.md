# � Content Management Service
### Specialized Headless CMS Module

This directory contains the **Content Management System (CMS)** logic for the Project SDG DS platform. It acts as the centralized source of truth for dynamic content, media assets, and configurable data structures, exposing a robust API for consumption by other services.

> [!CAUTION]
> ### ⚡ Version Requirement
> This specific module utilizes `better-sqlite3` optimizations compatible with **Node.js v22.x**.
>
> Before running any commands in this directory, verify your active version:
> ```bash
> node -v  # Should represent v22.x
> ```
> *Recommended: Use `fnm use 22` to switch context.*

<br>

## 🛠️ Operational Commands

Manage the lifecycle of the CMS application using the following scripts.

| Command | Action | Usage Scenario |
| :--- | :--- | :--- |
| **`npm run develop`** | Starts the server in **watch mode** | Active Development & Editing Content Types |
| **`npm run start`** | Starts the formatted server | Production / Deployment Preview |
| **`npm run build`** | Compiles the Admin Panel | Preparing for Deployment |
| **`npm run strapi`** | Access CLI Directives | Advanced Database Management & Scaffolding |

<br>

## 📂 Architecture Overview

A quick look at the critical directories within this module:

- **`/src/api`**: core business logic (Controllers, Services, Routes).
- **`/src/admin`**: customizations for the Admin Panel interface.
- **`/config`**: environment-specific configurations (Database, Server, API).
- **`/public/uploads`**: local storage for media assets (git-ignored in production).

<br>

## 🔗 Reference & Documentation

*   **Core Documentation**: [Strapi Developer Docs](https://docs.strapi.io)
*   **API Reference**: Auto-generated Swagger docs available at `/documentation` when running.
*   **Design System Integration**: See main project [`README.md`](../README.md) for integration details.

---
<sub>Part of the **Project SDG DS** Ecology • Built with Strapi v5</sub>
