export const makeArray = (length: number) => new Array(length).fill(null);
// export const makeArray2 = (length: number): Array<any> => {
//   return new Array(length).fill(null);
// };

// export function makeArray3 (length: number) : Array<any> {
//   return new Array(length).fill(null);
// };

// export const makeArray4 = (length: number) => new Array(length).fill(null);

export const range = (min: number, max: number): number[] => {
  return makeArray(max - min).map((notUsed, idx) => idx + min);
};

export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + max;
};
