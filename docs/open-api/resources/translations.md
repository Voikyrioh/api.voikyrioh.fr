# Translations Resource

## GET /website/translations/available

Returns a list of all available translation language codes.

### Description

Queries the translation file service and returns an array of language identifiers (e.g., `["en", "fr", "de"]`). Used by the frontend to populate language selector dropdowns.

### Request

```http
GET /website/translations/available HTTP/1.1
Host: api.voikyrioh.fr
```

### Response

**Status**: 200 OK  
**Content-Type**: `application/json`

```json
["en", "fr", "de"]
```

### Implementation

**File**: `app/domain/retrieve-available-translations/retrieve-available-translations.usecase.ts`  
**Lines**: 1-6

```typescript
export async function retrieveAvailableTranslations() {
    const translations = await fileService.translations;
    return [...translations.keys()];
}
```

---

## GET /website/translations/lang/:lang

Returns the translation file content for a specified language.

### Description

Fetches the translation object for the requested language code. Returns `undefined` if language not found (HTTP 200 with null body).

### Request

```http
GET /website/translations/lang/en HTTP/1.1
Host: api.voikyrioh.fr
```

### Path Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `lang` | string | Yes | ISO 639-1 language code (e.g., `en`, `fr`) |

### Response

**Status**: 200 OK  
**Content-Type**: `application/json`

```json
{
  "header.title": "Welcome to Voikyrioh",
  "header.subtitle": "Explore creative worlds",
  "footer.copyright": "© 2024 Voikyrioh"
}
```

### Implementation

**File**: `app/domain/retrieve-translation-file/retrieve-transalation-file.usecase.ts`  
**Lines**: 1-5

```typescript
export async function retrieveTranslationFile(lang: string) {
    return (await fileService.translations).get(lang);
}
```

**File**: `app/controllers/website/translations.route.ts`  
**Lines**: 13-15

```typescript
router.get('/lang/:lang', async (c) => {
    return c.json(await retrieveTranslationFile(c.req.param('lang')));
})
```

