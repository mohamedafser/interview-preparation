import { getUniqueIDArrayforQandA } from "@/utils/utils";
import { QuestionType } from "./type";

export const ques: QuestionType[] = [
  {
    question:
      "[0, 4, 3, 6, 0, 7, 0] Move all the 0 into first in the given array",
    answer: "",
    code: `const interview = (params) => { 
        let output = [];
        let val = [];  
          params.forEach((element) => { 
            if (!element) { 
            output.push(element);
          } else {
            val.push(element);
          }  
          });  
          return [...output, ...val];
        };
        console.log(interview([0, 4, 3, 6, 0, 7, 0]));`,
    js_qtype: "PRATICAL",
    reference_link: "",
    q_category: "javascript",
  },
];

const jsPraticalQuestions: QuestionType[] = getUniqueIDArrayforQandA(ques);

export { jsPraticalQuestions };
