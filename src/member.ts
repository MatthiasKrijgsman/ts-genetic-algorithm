import {Chromosome, crossoverChromosomes} from "./chromosome";
import { Fitness } from "./population";

export type Member = {
    chromosome: Chromosome,
    fitness: Fitness
}

export type FitnessFunction = (
    member: Member
) => number;

export function evaluateMember(
    fitnessFunction: FitnessFunction,
    member: Member
): number {
    return fitnessFunction(member);
}

export function createOffspring(
    parent1: Member,
    parent2: Member
): [Member, Member] {

    let offspringChromosomes: [Chromosome, Chromosome] = crossoverChromosomes(
        parent1.chromosome,
        parent2.chromosome
    );

    return [{
        chromosome: offspringChromosomes[0],
        fitness: 0
    }, {
        chromosome: offspringChromosomes[1],
        fitness: 0
    }];
}
