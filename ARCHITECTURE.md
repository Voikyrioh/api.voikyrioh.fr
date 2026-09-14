# ARCHITECTURE

## Overview

Minimal Node.js/Hono API for serving website translation files. Clean separation between controllers (HTTP routing), domain logic (use cases), and data access (file service).

## Directory Structure

- **`app/controllers/`** — HTTP routing layer (Hono routers). Parses requests, delegates to domain use cases, returns JSON.
- **`app/domain/`** — Business logic use cases. Orchestrates data retrieval and transformations (e.g., fetch translation keys, load specific language files).
- **`app/data/`** — Data access layer. Manages file I/O and caching for translation files.

[ARCHITECTURE.md]: controllers, domain, data

## Technology Stack

- **Hono 4.11.1** — Lightweight HTTP framework, TypeScript-first, Node.js adapter.
- **Zod 4.2.1** — Schema validation (reserved for future route validation).
- **TypeScript 5.9.3** — Type safety; strict mode enforced.
- **Node.js 20+ LTS** — Runtime.

## API Port

Listens on `8080` (graceful shutdown on SIGINT/SIGTERM).

