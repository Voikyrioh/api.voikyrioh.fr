# ADR-003: TypeScript Strict Mode Enforcement

**Status**: Acceptée  
**Type**: Convention  
**Decision Date**: 2024-06-16  

## Context

TypeScript offers strict mode to catch common errors at compile time. All code should benefit from this safety net.

## Decision

Enable `strict: true` in `tsconfig.json`. All `.ts` files must compile without errors under this setting.

## Rationale

- Prevents null/undefined errors (`strictNullChecks`).
- Enforces explicit type annotations, improving code readability.
- Catches implicit `any` usages (`noImplicitAny`).
- Standard practice in modern TypeScript projects.

## Implementation

- `tsconfig.json` includes `"strict": true`.
- Build pipeline fails if strict compilation errors are present.
- Developers must add explicit types or fix logic errors.

## Related

- ADR-002: Clean architecture patterns support strict typing.

