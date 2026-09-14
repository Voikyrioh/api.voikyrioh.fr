# ADR-001: Hono Framework

**Status**: Acceptée  
**Type**: Librairie  
**Decision Date**: 2024-06-16  

## Context

API requires lightweight HTTP routing for serving translation files. Must support TypeScript, have minimal footprint, and integrate cleanly with Node.js server.

## Decision

Use **Hono 4.11.1** as the HTTP framework.

## Rationale

- Lightweight and TypeScript-first; no runtime overhead.
- Supports multiple JavaScript runtimes (Node.js, Cloudflare Workers, Deno); future-proof.
- Simple router API; easy to organize controllers by domain.
- Active maintenance and strong community.

## Implementation

- Framework imported and composed in `app/controllers/index.ts`.
- Routers mounted per domain (e.g., `website` domain).
- Graceful shutdown handling in `index.ts` for process signals.

## Alternatives Considered

- Express: Larger footprint, overkill for translation file serving.
- Fastify: More opinionated; Hono's simplicity preferred.

## Related

- ADR-002: Controller/Domain/Data separation enforced via Hono routers.

