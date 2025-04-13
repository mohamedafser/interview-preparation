import { getUniqueIDArrayforQandA } from "@/utils/utils";
import { QuestionType } from "./type";

export const ques: QuestionType[] = [
  {
    question: "Difference Between display flex and grid?",
    answer:
      "The key difference between 'display: flex' and 'display: grid' in CSS is that flexbox (using 'display: flex') is designed for one-dimensional layouts, aligning items in a single row or column, while grid (using 'display: grid') is designed for two-dimensional layouts, allowing precise control over element placement across both rows and columns simultaneously",
    code: "",
    reference_link:
      "https://www.geeksforgeeks.org/comparison-between-css-grid-css-flexbox/",
    q_category: "css",
  },
  {
    question: "What is box model?",
    answer:
      "The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins. The image below illustrates the box model",
    code: "",
    q_category: "css",
    reference_link: "https://www.w3schools.com/css/css_boxmodel.asp",
  },
  {
    question: "What are Pseudo-classes?",
    answer:
      "Pseudo-classes define the special state of an element, allowing you to style it based on conditions like user interaction, its position in the document, or other dynamic states.",
    code: "/* unvisited link */\na:link {\n  color: #FF0000;\n}\n\n/* visited link */\na:visited {\n  color: #00FF00;\n}\n\n/* mouse over link */\na:hover {\n  color: #FF00FF;\n}\n\n/* selected link */\na:active {\n  color: #0000FF;\n}",
    q_category: "css",
    reference_link:
      "https://www.w3schools.com/cssref/css_ref_pseudo_classes.php",
  },
  {
    question: "What are Pseudo-element?",
    answer:
      "A CSS pseudo-element is used to style specific parts of an element.",
    code: '\na:before {\n  content: "";\n}\na:after {\n  content: "";\n}\n',
    q_category: "css",
    reference_link:
      "https://www.w3schools.com/cssref/css_ref_pseudo_elements.php",
  },
  {
    question: "What are Combinators?",
    answer:
      "A combinator is a sign that explains the relationship between selectors.",
    code: "",
    q_category: "css",
    reference_link: "https://www.w3schools.com/cssref/css_ref_combinators.php",
  },
  {
    question: "What are Entities?",
    answer:
      "If you use CSS to display any of these characters in HTML, you can use the CSS entity found in the table below url.",
    code: "",
    q_category: "css",
    reference_link: "https://www.w3schools.com/cssref/css_entities.php",
  },
  {
    question: "What are Box Sizing?",
    answer:
      "The CSS box-sizing property allows us to include the padding and border in an element's total width and height.",
    code: "",
    q_category: "css",
    reference_link: "https://www.w3schools.com/css/css3_box-sizing.asp",
  },
  {
    question: "What are Specificity?",
    answer:
      "If there are two or more CSS rules that point to the same element, the selector with the highest specificity will 'win', and its style declaration will be applied to that HTML element.",
    code: "",
    q_category: "css",
    reference_link: "https://www.w3schools.com/css/css_specificity.asp",
  },
  {
    question: "Difference inline and inline-block?",
    answer:
      "Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.",
    code: "",
    q_category: "css",
    reference_link: "https://www.w3schools.com/css/css_inline-block.asp",
  },
];

const cssQuestions: QuestionType[] = getUniqueIDArrayforQandA(ques);

export { cssQuestions };
