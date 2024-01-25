export const boardSize = (): number[][] => {
  const rowSize = 8;
  const colSize = 8;
  const returnArr: number[][] = [];
  for (let i = 0; i < colSize; i++) {
    const tmpRowArr: number[] = [];
    for (let j = 0; j < rowSize; j++) {
      tmpRowArr.push(j);
    }
    returnArr.push(tmpRowArr);
  }
  return returnArr;
};

export const emptyBoard = (): string[][] => {
  const rowSize = 8;
  const colSize = 8;
  const returnArr: string[][] = [];
  for (let i = 0; i < colSize; i++) {
    const tmpRowArr: string[] = [];
    for (let j = 0; j < rowSize; j++) {
      tmpRowArr.push(" ");
    }
    returnArr.push(tmpRowArr);
  }
  return returnArr;
};
