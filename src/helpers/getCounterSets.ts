export const getCounterSets = (measure: "kg" | "g") => {
  const counterSets = { min: 1, max: 1, step: 1 };

  switch (measure) {
    case "kg":
      counterSets.min = 1;
      counterSets.max = 10;
      counterSets.step = 0.5;
      break;
    case "g":
      counterSets.min = 100;
      counterSets.max = 900;
      counterSets.step = 100;
      break;

    default:
      break;
  }

  return counterSets;
};
