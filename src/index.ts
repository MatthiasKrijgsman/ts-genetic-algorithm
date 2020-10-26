import {ChromosomeDefinition} from "./chromosome";
import {FitnessFunction, Member} from "./member";
import Population, {OptimizationType} from "./population";
import {randomInt} from "./utility";

const chromeDef: ChromosomeDefinition = [
    () => randomInt(0, 100),
    () => randomInt(0, 100),
    () => randomInt(0, 100),
    () => randomInt(0, 100),
    () => randomInt(0, 100),
    () => randomInt(0, 100),
    () => randomInt(0, 100)
]
const fitnessFunction: FitnessFunction = (member: Member) => {

    let fitness: number = 0;

    for (let i of member.chromosome) {
        fitness += i;
    }

    return fitness;
}

const myPop = new Population({
    populationSize: 1000,
    mutationRate: 0.1,
    eliminationRate: 0.4,
    chromosomeDefinition: chromeDef,
    fitnessFunction: fitnessFunction,
    optimizationType: OptimizationType.MAX
});

for (let i = 0; i < 10; i++) {
    myPop.evolve();
}

console.log(myPop.history);
