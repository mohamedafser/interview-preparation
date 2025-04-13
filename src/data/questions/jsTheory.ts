import { getUniqueIDArrayforQandA } from "@/utils/utils";
import { QuestionType } from "./type";
import { jsPraticalQuestions } from "./jsPratical";

export const ques: QuestionType[] = [
  {
    question: "Define hosting?",
    answer:
      "Hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared",
    code: "",
    js_qtype: "THEORY",
    reference_link: "",
    q_category: "javascript",
  },
  ...jsPraticalQuestions,
];

const jsQuestions: QuestionType[] = getUniqueIDArrayforQandA(ques);

export { jsQuestions };
