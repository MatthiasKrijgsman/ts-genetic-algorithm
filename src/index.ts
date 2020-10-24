import {ChromosomeDefinition, crossoverChromosomes, generateChromosome, mutateChromosome} from "./chromosome";

const chromeDef: ChromosomeDefinition = [
    Math.random,
    Math.random,
    Math.random,
    Math.random
]

let c1 = generateChromosome(chromeDef);
let c2 = generateChromosome(chromeDef);

console.log([c1, c2]);
console.log(crossoverChromosomes(c1, c2));
