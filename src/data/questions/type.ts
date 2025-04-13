export type QCategories =
  | "html"
  | "css"
  | "javascript"
  | "react-js"
  | "redux"
  | "typescript"
  | "unit-test"
  | "express-js"
  | "node-js";

export type JSQuestionType = "THEORY" | "PRATICAL";

export type QuestionType = {
  id?: string;
  question: string;
  answer: string;
  code: string;
  reference_link?: string;
  q_category: QCategories;
  js_qtype?: JSQuestionType;
};
