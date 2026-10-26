# Broken Project — Giorno 1: TypeScript Fondamentale

## Istruzioni
1. `npm install`
2. Esegui ogni file bug con `npx tsx src/bug1.ts`, `npx tsx src/bug2.ts`, ecc.
3. Leggi i sintomi, trova il bug, correggilo.
4. La feature opzionale è in `src/feature.ts` — completala.

## Bug 1 — 🔴 Errore di compilazione
**Sintomi**: errore TypeScript, l'app non parte.
**File**: `src/bug1.ts`
**Compito**: leggi l'errore del compilatore e correggi il valore non valido.

## Bug 2 — 🟡 Proprietà `undefined` non gestita
**Sintomi**: compila ma crasha a runtime con `Cannot read properties of undefined`.
**File**: `src/bug2.ts`
**Compito**: gestisci correttamente il campo opzionale `phone`.

## Bug 3 — 🟢 `any` nascosto
**Sintomi**: compila e gira, ma stampa `undefined` per campi inesistenti.
**File**: `src/bug3.ts`
**Compito**: elimina `any`, usa il tipo corretto, e osserva gli errori del compilatore.

## Feature opzionale — Interfaccia Transaction
**File**: `src/feature.ts`
**Compito**: completa l'interfaccia Transaction seguendo le istruzioni nel file.
