export interface Pet {
  hunger: number;
  happiness: number;
  energy: number;
  feed(): Promise<void>;
  play(): Promise<void>;
  sleep(): Promise<void>;
  getStatus(): { hunger: number; happiness: number; energy: number };
}

/*
TODO: Create digital-pet.ts with class DigitalPet implementing Pet

Requirements:
- Stats decay every 10 seconds (hunger +, happiness -, energy -)
- feed() decreases hunger
- play() increases happiness, decreases energy
  * MUST reject with "Pet is too tired." if energy < 10
- sleep() restores energy
- Keep stats in 0-100 range
*/
