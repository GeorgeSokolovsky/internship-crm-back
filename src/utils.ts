export const removeItemFromArray = (arr: [], item: any): any[] => {
  const newArr = [...arr];

  newArr.splice(newArr.findIndex(el => item === el), 1);

  return newArr;
};
