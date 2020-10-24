import { randomGaussianInt } from "./utility";

export interface PopulationOptions {
    size: number,
    mutationRate: number,
    eliminationRate: number,
    chromosome: ChromosomeDefinition,
    fitnessFunction: (chromosome: Chromosome) => number;
}

export interface Chromosome {
    get: Array<number>,
    fitness: number
}

export interface ChromosomeDefinition extends Array<GeneDefinition> {}

export interface GeneDefinition { get: () => number }

export default class Population {

    public options: PopulationOptions;
    public pool: Array<Chromosome>;

    constructor(options: PopulationOptions) {
        this.options = options;
        this.pool = [];
    }

    generate() {}

    evolve() {}

    eliminate() {}

    crossover() {}

    mutate() {}

}

export interface FitnessLog {
    average: number,
    deviation: number,
    best: number
}

export interface GenerationLog {
    generation: number,
    fitness: FitnessLog
}



