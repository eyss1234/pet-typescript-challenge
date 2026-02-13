# TypeScript Challenge: Digital Pet

Build a digital pet that survives 24 hours of simulation.

## Requirements

**Node.js**: v18+ recommended  
**TypeScript**: 5.3+

## Setup
npm install

## Task

Implement `digital-pet.ts` with a `DigitalPet` class:

- **Stats** (0-100): `hunger`, `happiness`, `energy`
- **Decay**: Every 10 seconds (use `setInterval`)
  - Hunger increases
  - Happiness decreases
  - Energy decreases
- **Methods** (all async):
  - `feed()` - decrease hunger
  - `play()` - increase happiness, decrease energy
    - Must throw `Error("Pet is too tired.")` if energy < 10
  - `sleep()` - restore energy
  - `getStatus()` - return stats object

See `pet.ts` for the interface. Use `digital-pet.template.ts` as starter.

## Running Tests

1. Uncomment lines in `check-pet.test.ts`:
   - Line 2: `import { DigitalPet } from './digital-pet';`
   - Line 78: `const pet = new DigitalPet();`
   - Lines 81-93: Test execution code

2. Run:
npm test

## Success Criteria

Pet survives 24 hours:
- Hunger < 100
- Happiness > 0
- Energy > 0
- No unexpected errors
