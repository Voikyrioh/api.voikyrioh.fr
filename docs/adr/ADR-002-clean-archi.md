# ADR-002: Clean Architecture (Controllers / Domain / Data)

**Status**: Acceptée  
**Type**: Architecture  
**Decision Date**: 2024-06-16  

## Context

Code needs clear layering to separate HTTP concerns from business logic and data access. Should remain maintainable as features grow.

## Decision

Enforce three-tier architecture:

1. **Controllers** (`app/controllers/`) — HTTP routing, request parsing, response formatting.
2. **Domain** (`app/domain/`) — Use case logic, orchestration of data retrieval, business rules.
3. **Data** (`app/data/`) — External data access (file I/O, caching, external APIs).

## Rationale

- Testability: Domain logic decoupled from HTTP transport.
- Reusability: Use cases callable from other transports (CLI, jobs).
- Clarity: Each layer has a single responsibility.
- Scalability: Easy to replace data source (file → database) without touching routes.

## Implementation

- `app/controllers/website/translations.route.ts` parses `:lang` param, calls domain use case.
- `app/domain/retrieve-translation-file/` handles business logic.
- `app/data/translation-files.client.ts` manages file caching and retrieval.

## Related

- ADR-003: TypeScript strict mode ensures type safety across layers.

