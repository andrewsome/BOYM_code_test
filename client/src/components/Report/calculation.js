export const get_rotated_result = (config) => {
  // it('ignores eggs that not in machine', () => {})
  // it('ignores eggs that already rotated one full rotation', () => {})
  const { sequence, rotation_amount, number_of_eggs } = config.unfinishReports;
  console.log(config)
  return sequence
    .split(' ')
    .reduce((result, sequenceNumber) => {
      const wasRotated = result[sequenceNumber] || 0;
      const newRotatedAmount = wasRotated + rotation_amount;

      const isValidEgg = sequenceNumber > 0 && sequenceNumber <= number_of_eggs;
      const isRotableEgg = newRotatedAmount <= 1;

      if (!isValidEgg || !isRotableEgg) {
        return result;
      }

      return {
        ...result,
        [sequenceNumber]: newRotatedAmount,
      };
    }, {});
};

export const get_rotations = (rotatedResult) => {
  // it('gets report from result', () => {})
  return Object.keys(rotatedResult).map((sequenceNumber) => {
    const was_rotated = rotatedResult[sequenceNumber];

    return {
      egg: sequenceNumber,
      was_rotated,
    };
  });
};

// const result = getRotatedResult({
//   number_of_eggs: 5,
//   rotation_amount: 0.25,
//   sequence: '1 3 5 2 4 4 4 4 2 1 3 4 7',
// });

// console.log(result);

// const report = getRotationsReport(result);

// console.log(report);

// {
//   "report": {
//       "id": "00-00"
//       "number_of_eggs": 5,
//       "sequence": "1 3 5 2 4 4 2 1 3 4",
//       "rotation_amount": 0.25,
//       "rotations": [
//           { "egg": 1, "was_rotated": 0.5 },
//           { "egg": 2, "was_rotated": 0.5 },
//           { "egg": 3, "was_rotated": 0.5 },
//           { "egg": 4, "was_rotated": 0.75 },
//           { "egg": 5, "was_rotated": 0.25 }
//       ]
//   }
// }

// reports = {
  // [id]: {
    //       "id": "00-00"
    //       "number_of_eggs": 5,
    //       "sequence": "1 3 5 2 4 4 2 1 3 4",
    //       "rotation_amount": 0.25,
    //       "rotations": [
    //           { "egg": 1, "was_rotated": 0.5 },
    //           { "egg": 2, "was_rotated": 0.5 },
    //           { "egg": 3, "was_rotated": 0.5 },
    //           { "egg": 4, "was_rotated": 0.75 },
    //           { "egg": 5, "was_rotated": 0.25 }
    //       ]
    //   }
    // }
// }