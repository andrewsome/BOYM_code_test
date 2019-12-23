export const getRotatedResult = (config) => {
  const { sequence, rotation_amount, number_of_eggs } = config.unfinishReports;
  const numberOfEggs = number_of_eggs;
  const rotationAmount = rotation_amount;
  return sequence
    .split(' ')
    .reduce((result, sequenceIndex) => {
      const wasRotated = result[sequenceIndex] || 0;
      console.log(wasRotated)
      const newRotatedAmount = wasRotated + rotationAmount;

      const isValidEgg = sequenceIndex > 0 && sequenceIndex <= numberOfEggs;
      const isRotableEgg = newRotatedAmount <= 1;

      if (!isValidEgg || !isRotableEgg) {
        return result;
      }

      return {
        ...result,
        [sequenceIndex]: newRotatedAmount,
      };
    }, {});
};

export const getRotations = (rotatedResult) => {
  // it('gets report from result', () => {})
  return Object.keys(rotatedResult).map((index) => {
    const wasRotated = rotatedResult[index];

    return {
      egg: index,
      wasRotated,
    };
  });
};