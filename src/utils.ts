export function removeItemFromArray<T>(arr: T[], item: T): T[] {
  const newArr = [...arr];

  newArr.splice(newArr.findIndex(el => item === el), 1);

  return newArr;
}
