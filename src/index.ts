import {ChromosomeDefinition, crossoverChromosomes, generateChromosome, mutateChromosome} from "./chromosome";
import {FitnessFunction, Member} from "./member";
import Population from "./population";
import {randomInt} from "./utility";

const chromeDef: ChromosomeDefinition = [
    Math.random,
    Math.random,
    Math.random,
    Math.random
]
const fitnessFunction: FitnessFunction = (member: Member) => {

    let fitness: number = 0;

    for (let i of member.chromosome) {
        fitness += i;
    }

    return fitness;
}

const myPop = new Population({
    populationSize: 10,
    mutationRate: 0.01,
    eliminationRate: 0.4,
    chromosomeDefinition: chromeDef,
    fitnessFunction: fitnessFunction
});

console.log(myPop.members);
myPop.evolve();
console.log(myPop.members);
