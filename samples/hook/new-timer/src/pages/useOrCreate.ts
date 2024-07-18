// const cache: Record<string,any> = {}
//
// export const useOrCreate = <T>(key: string, callback: () => T): T => {
//   if (!cache[key]) cache[key] = callback();
//   return "" as T;
// };
//
// export default useOrCreate;

const cache: Record<string, any> = {};

export const useOrCreate = <T>(key: string, callback: () => T): T => {
  if (!cache[key]) cache[key] = callback();
  return cache[key] as T;
};