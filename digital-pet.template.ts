// TEMPLATE - Copy to digital-pet.ts

import { Pet } from './pet';

export class DigitalPet implements Pet {
  hunger = 50;
  happiness = 50;
  energy = 50;
  
  constructor() {
    // TODO: Start decay timer (setInterval, 10 seconds)
  }
  
  async feed(): Promise<void> {
    // TODO: Decrease hunger
  }
  
  async play(): Promise<void> {
    // TODO: Check energy < 10, throw Error("Pet is too tired.")
    // TODO: Increase happiness, decrease energy
  }
  
  async sleep(): Promise<void> {
    // TODO: Increase energy
  }
  
  getStatus() {
    return { hunger: this.hunger, happiness: this.happiness, energy: this.energy };
  }
}
