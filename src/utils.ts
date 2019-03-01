export function removeItemFromArray<T>(arr: Array<T>, item: T): Array<T> {
  const newArr = [...arr];

  newArr.splice(newArr.findIndex(el => item === el), 1);

  return newArr;
}
