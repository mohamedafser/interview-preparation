export const groupBy = (lists: any[], key: string) => {
  // return Object.groupBy(lists, (list) => list[key]);
  return lists.reduce((acc, obj) => {
    const keyValue = obj[key];
    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(obj);
    return acc;
  }, {});
  
};

export const filterByObject = (lists: any[], key: string, data: any) => {
  return lists.filter((list) => list[key] === data);
};
