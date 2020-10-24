import { MutationRate } from "./population";

export type Gene = number;
export type Chromosome = Array<Gene>;

export type GeneDefinition = () => Gene;
export type ChromosomeDefinition = Array<GeneDefinition>;

export const generateChromosome: (
    definition: ChromosomeDefinition
) => Chromosome
    = (definition: ChromosomeDefinition) => {
    let chromosome = Array<number>();

    for (let i = 0; i < definition.length; i++) {
        chromosome.push(definition[i]());
    }

    return chromosome;
};

export const mutateChromosome: (
    chromosome: Chromosome,
    definition: ChromosomeDefinition,
    mutationRate: MutationRate
) => Chromosome
    = (chromosome: Chromosome, definition: ChromosomeDefinition, mutationRate: MutationRate) => {

    for (let i = 0; i < chromosome.length; i++) {

        if (mutationRate > Math.random()) {
            chromosome[i] = definition[i]();
        }
    }

    return chromosome;
}

export const crossoverChromosomes: (
    parent1: Chromosome,
    parent2: Chromosome
) => [Chromosome, Chromosome]
    = (parent1: Chromosome, parent2: Chromosome) => {

    let child1: Chromosome = [];
    let child2: Chromosome = [];

    for (let i = 0; i < parent1.length; i++) {

        if (Math.random() <= 0.5) {
            child1.push(parent1[i])
            child2.push(parent2[i])
        } else {
            child1.push(parent2[i])
            child2.push(parent1[i])
        }
    }

    return [child1, child2];
}
