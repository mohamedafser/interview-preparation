export const groupBy = (lists: any[], key: string) => {
  return Object.groupBy(lists, (list) => list[key]);
};

export const filterByObject = (lists: any[], key: string, data: any) => {
  return lists.filter((list) => list[key] === data);
};
