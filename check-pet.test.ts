import { Pet } from './pet';
// import { DigitalPet } from './digital-pet'; // Uncomment this

interface TestResult {
  success: boolean;
  errors: string[];
  finalStats: { hunger: number; happiness: number; energy: number };
}

async function simulatePetLife(pet: Pet): Promise<TestResult> {
  const errors: string[] = [];
  const TICKS = 24;
  
  console.log('Starting 24-hour simulation...');
  console.log('Initial:', pet.getStatus());

  for (let hour = 0; hour < TICKS; hour++) {
    await new Promise(resolve => setTimeout(resolve, 100));
    const stats = pet.getStatus();
    
    try {
      // Feed when hungry
      if (hour % 3 === 0 && stats.hunger > 30) await pet.feed();
      
      // Stress test: play 5x in a row
      if (hour === 5 || hour === 12 || hour === 18) {
        for (let i = 0; i < 5; i++) {
          try {
            await pet.play();
          } catch (error) {
            const msg = error instanceof Error ? error.message : String(error);
            if (msg !== "Pet is too tired.") {
              errors.push(`Hour ${hour + 1}: Wrong error: ${msg}`);
            }
            break;
          }
        }
      }
      
      // Sleep when tired
      if (stats.energy < 20) await pet.sleep();
      
      // Random play
      if (hour % 4 === 0 && stats.energy > 15) {
        try {
          await pet.play();
        } catch (error) {
          const msg = error instanceof Error ? error.message : String(error);
          if (msg !== "Pet is too tired.") {
            errors.push(`Hour ${hour + 1}: Wrong error: ${msg}`);
          }
        }
      }
      
      // Emergency care
      if (stats.hunger > 80) await pet.feed();
      if (stats.energy < 10) await pet.sleep();
      
    } catch (error) {
      errors.push(`Hour ${hour + 1}: ${error}`);
    }
    
    // Check survival
    if (stats.hunger >= 100) { errors.push('Died: hunger'); break; }
    if (stats.happiness <= 0) { errors.push('Died: sadness'); break; }
    if (stats.energy <= 0) { errors.push('Died: exhaustion'); break; }
  }
  
  const finalStats = pet.getStatus();
  const success = errors.length === 0 && finalStats.hunger < 100 && finalStats.happiness > 0 && finalStats.energy > 0;
  
  return { success, errors, finalStats };
}

async function runTest() {
  console.log('Digital Pet Test\n');
  
  // const pet = new DigitalPet(); // Uncomment this
  
  // Uncomment below:
  /*
  const result = await simulatePetLife(pet);
  
  console.log('\nFinal:', result.finalStats);
  console.log(result.success ? '✅ PASSED' : '❌ FAILED');
  
  if (result.errors.length > 0) {
    console.log('Errors:');
    result.errors.forEach(e => console.log(`  - ${e}`));
  }
  
  process.exit(result.success ? 0 : 1);
  */
  
  console.log('TODO: Uncomment import and test code above');
}

if (require.main === module) runTest();

export { simulatePetLife, TestResult };
