export const deterministicRandom = (seed: number) => {
  const x = Math.sin(seed) * 10_000;
  return x - Math.floor(x);
};
