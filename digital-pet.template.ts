// TEMPLATE - Copy to digital-pet.ts
import { Pet } from './pet';

export class DigitalPet implements Pet {
  hunger = 50;
  happiness = 50;
  energy = 50;
  private decayTimer: ReturnType<typeof setInterval> | null = null;

  /**
   * @param decayIntervalMs - How often stats decayes oy, in milliseconds.
   *   Defaults to 10_000 (10 seconds) for normal use.
   *   Pass a shorter value (e.g. 100) in tests so decay actually triggers.
   */
  constructor(decayIntervalMs: number = 10_000) {
    // TODO: Start decay timer using decayIntervalMs
    //   - hunger increases by 5 (max 100)
    //   - happiness decreases by 5 (min 0)
    //   - energy decreases by 5 (min 0)
  }

  async feed(): Promise<void> {
    // TODO: Decrease hunger (min 0)
  }

  async play(): Promise<void> {
    // TODO: Check energy < 10, throw Error("Pet is too tired.")
    // TODO: Increase happiness (max 100), decrease energy (min 0)
  }

  async sleep(): Promise<void> {
    // TODO: Increase energy (max 100)
  }

  getStatus() {
    return { hunger: this.hunger, happiness: this.happiness, energy: this.energy };
  }

  /** Cleans up the decay timer. Call in test teardown. */
  destroy(): void {
    // TODO: Clear the interval
  }
}