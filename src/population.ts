import {ChromosomeDefinition, generateChromosome} from "./chromosome";
import {createOffspring, FitnessFunction, Member} from "./member";
import {randomInt} from "./utility";

export type PopulationSize = number;
export type MutationRate = number;
export type EliminationRate = number;
export type Fitness = number;

export type Options = {
    populationSize: PopulationSize,
    mutationRate: MutationRate,
    eliminationRate: EliminationRate,
    chromosomeDefinition: ChromosomeDefinition,
    fitnessFunction: FitnessFunction
}

export default class Population {

    options: Options;
    members: Array<Member> = Array<Member>();

    constructor(options: Options) {
        this.options = options;
        this.initMembers();
    };

    initMembers(): void {
        for (let i = 0; i < this.options.populationSize; i++) {
            this.members.push({
                chromosome: generateChromosome(this.options.chromosomeDefinition),
                fitness: 0
            })
        }
    }

    evolve(): void {
        this.evaluate();
        this.sort();
        this.eliminate();
        this.crossover();
    }

    evaluate(): void {
        for (let i = 0; i < this.members.length; i++) {
            this.members[i].fitness = this.options.fitnessFunction(this.members[i]);
        }
    }

    sort(): void {
        this.members.sort((member1, member2) => {
            if (member1.fitness > member2.fitness) return 1;
            if (member1.fitness < member2.fitness) return -1;
            return 0;
        });
    }

    eliminate(): void {
        const eliminate = Math.floor(this.options.eliminationRate * this.members.length)

        for (let i = 0; i < eliminate; i++) {
            this.members.pop();
        }
    }

    crossover(): void {
        let min = 0;
        let max = this.members.length - 1;
        let missing = this.options.populationSize - this.members.length;

        while (missing > 0) {
            let p1 = randomInt(min, max);
            let p2 = randomInt(min, max);

            while (p1 == p2) p2 = randomInt(min, max);

            let offspring = createOffspring(
                this.members[p1],
                this.members[p2]
            );

            if (missing == 1) {

                this.members.push(offspring[0]);
                missing -= 1;

            } else {

                this.members.push(offspring[0]);
                this.members.push(offspring[1]);
                missing -= 2;

            }
        }
    }


}

