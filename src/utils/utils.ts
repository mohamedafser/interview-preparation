import { QuestionType } from "@/data/questions/type";

export const groupBy = (lists: any[], key: string) => {
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

const generateId = () =>
  "id-" +
  Date.now().toString(36) +
  "-" +
  Math.random().toString(36).slice(2, 7);

export const getUniqueIDArrayforQandA = (lists: QuestionType[]) => {
  return lists.map((item) => {
    return {
      id: generateId(),
      ...item,
    };
  });
};
