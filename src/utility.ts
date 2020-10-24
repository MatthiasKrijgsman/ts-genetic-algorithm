const randomInt = (min: number, max: number) => {
    return Math.round(randomFloat(min, max));
}

const randomFloat = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}

const randomGaussianInt = (mu: number, sigma: number) => {
    return Math.round(randomGaussianFloat(mu, sigma));
}

const randomGaussianFloat = (mu: number, sigma: number) => {
    let u = Math.random();
    let v = Math.random();

    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) * sigma + mu;
}

export {
    randomInt,
    randomFloat,
    randomGaussianInt,
    randomGaussianFloat
}
