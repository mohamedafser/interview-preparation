type QCategories =
  | "html"
  | "css"
  | "javascript"
  | "react-js"
  | "redux"
  | "typescript"
  | "unit-test"
  | "express-js"
  | "node-js";
type JSQuestionType = "THEORY" | "PRATICAL";

export type QuestionType = {
  id: number;
  question: string;
  answer: string;
  code: string;
  reference_link?: string;
  q_category: QCategories;
  js_qtype?: JSQuestionType;
};

export const questions: QuestionType[] = [
  {
    id: 1,
    question: "What is DocType?",
    answer:
      "The declaration is not an HTML tag. It is an information to the browser about what document type to expect.",
    code: "<!DOCTYPE>",
    reference_link: "https://www.w3schools.com/tags/tag_doctype.ASP",
    q_category: "html",
  },
  {
    id: 2,
    question: "What is sementic tag?",
    answer:
      "A semantic element clearly describes its meaning to both the browser and the developer.",
    code: "",
    reference_link:
      "https://www.w3schools.com/html/html5_semantic_elements.asp",
    q_category: "html",
  },
  {
    id: 3,
    question: "Difference Between display flex and grid?",
    answer:
      "The key difference between 'display: flex' and 'display: grid' in CSS is that flexbox (using 'display: flex') is designed for one-dimensional layouts, aligning items in a single row or column, while grid (using 'display: grid') is designed for two-dimensional layouts, allowing precise control over element placement across both rows and columns simultaneously",
    code: "",
    reference_link:
      "https://www.geeksforgeeks.org/comparison-between-css-grid-css-flexbox/",
    q_category: "css",
  },
  {
    id: 4,
    question: "Define hosting?",
    answer:
      "Hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared",
    code: "",
    js_qtype: "THEORY",
    reference_link: "",
    q_category: "javascript",
  },
  {
    id: 5,
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
  {
    id: 6,
    question: "New tags introduced in HTML5",
    answer:
      "Semantic Structural Tags, Multimedia Tags, Scripting and Template Tags",
    code: `
  <header>: Represents the introductory section or a container for navigational links.
  <nav>: Defines navigation links or a menu.
  <section>: Groups related content together, typically with a heading.
  <article>: Represents a self-contained piece of content, such as a blog post or news article.
  <aside>: Contains content related to the main content, like sidebars or callout boxes.
  <footer>: Defines the footer for a section or the entire document.
  <main>: Represents the main content of the document, unique and central to the page.
  <template>: Defines a template for content that is not displayed until activated by JavaScript.
  <script>: Enhanced with async and defer attributes for better performance.
  <noscript>: Provides alternative content for users with JavaScript disabled.
    `,
    q_category: "html",
  },
  {
    id: 7,
    question: "What is Meta Tag?",
    answer:
      "The meta tag in HTML provides metadata about a web page, which is not displayed on the page itself but is important for browsers, search engines, and other web services. Metadata includes information like the page description, character set, author, viewport settings, and more.",
    code: `
  <meta>
    `,
    q_category: "html",
    reference_link: "https://www.w3schools.com/tags/tag_meta.asp",
  },
  {
    id: 8,
    question:
      "What is lazy loading, and how do you implement it for images or iframes in HTML?",
    answer:
      "Lazy loading defers the loading of images or iframes until they are about to appear in the viewport, improving page load time and performance by reducing initial resource downloads. Lazy Loading optimizes the initial load by deferring non-critical resources.",
    code: `
  The loading attribute can be added to <img> and <iframe> elements.
  <img src="example.jpg" alt="Example" loading="lazy">
  <iframe src="https://example.com" loading="lazy"></iframe>
  lazy: Loads the resource when it comes into the viewport.
  eager: Loads the resource immediately.
  auto: Browser determines the behavior.
    `,
    q_category: "html",
  },
  {
    id: 9,
    question:
      "What is the purpose of the preload and prefetch attributes in <link>?",
    answer:
      "Preloads critical resources (like fonts, images, CSS, or JavaScript) needed for the current page, ensuring they are available as soon as possible. Commonly used for fonts, stylesheets, or scripts. Prefetch: Preloads resources that might be needed for a future page (e.g., when a user navigates to a different page). preload fetches critical resources for the current page, while prefetch fetches resources for future navigation. ",
    code: `
<link rel="preload" href="styles.css" as="style">
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="prefetch" href="next-page.html">
preload is for immediate use (current page).
prefetch is for future use (next page or interaction).
    `,
    q_category: "html",
  },
  {
    id: 10,
    question:
      "Explain the defer and async attributes on the <script> tag. How do they affect page load performance?",
    answer:
      "Both defer and async are used to load JavaScript files in a non-blocking way, improving page performance. Defer: Ensures the script is executed after the HTML document is fully parsed. Scripts with defer are executed in the order they appear in the document. Async: Loads the script asynchronously and executes it as soon as it’s downloaded, without waiting for the HTML parsing to finish. Scripts with async are not guaranteed to execute in order (useful for independent scripts, like analytics).",
    code: `
<script src="script.js" defer></script>
<script src="analytics.js" async></script>
defer ensures scripts execute after parsing in order, while async executes scripts immediately upon download, regardless of order.
    `,
    q_category: "html",
  },
  {
    id: 11,
    question: "What is block elemens?",
    answer:
      "Block-level elements take up the full width of their container by default and start on a new line. They typically represent larger structural sections of a page.",
    code: `
<div>, <section>, <article>, <header>, <footer>, <aside>, <nav>, <main>
    `,
    q_category: "html",
  },
  {
    id: 11,
    question: "What is inline elemens?",
    answer:
      "Inline elements only take up as much width as necessary and do not start on a new line. They are used to style or manipulate small portions of text or content within block-level elements.",
    code: `
<span>, <b>, <i>, <em>, <strong>, <u>, <small>, <mark>, <sub>, <sup>
    `,
    q_category: "html",
  },
  {
    id: 12,
    question: "What is box model?",
    answer:
      "The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins. The image below illustrates the box model",
    code: ``,
    q_category: "css",
    reference_link: "https://www.w3schools.com/css/css_boxmodel.asp",
  },
  {
    id: 13,
    question: "What are Pseudo-classes?",
    answer:
      "Pseudo-classes define the special state of an element, allowing you to style it based on conditions like user interaction, its position in the document, or other dynamic states.",
    code: `/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}`,
    q_category: "css",
    reference_link:
      "https://www.w3schools.com/cssref/css_ref_pseudo_classes.php",
  },
  {
    id: 14,
    question: "What are Pseudo-element?",
    answer:
      "A CSS pseudo-element is used to style specific parts of an element.",
    code: `
a:before {
  content: "";
}
a:after {
  content: "";
}
`,
    q_category: "css",
    reference_link:
      "https://www.w3schools.com/cssref/css_ref_pseudo_elements.php",
  },
  {
    id: 15,
    question: "What are Combinators?",
    answer:
      "A combinator is a sign that explains the relationship between selectors.",
    code: ``,
    q_category: "css",
    reference_link: "https://www.w3schools.com/cssref/css_ref_combinators.php",
  },
  {
    id: 16,
    question: "What are Entities?",
    answer:
      "If you use CSS to display any of these characters in HTML, you can use the CSS entity found in the table below url.",
    code: ``,
    q_category: "css",
    reference_link: "https://www.w3schools.com/cssref/css_entities.php",
  },
  {
    id: 17,
    question: "What are Box Sizing?",
    answer:
      "The CSS box-sizing property allows us to include the padding and border in an element's total width and height.",
    code: ``,
    q_category: "css",
    reference_link: "https://www.w3schools.com/css/css3_box-sizing.asp",
  },
  {
    id: 18,
    question: "What are Specificity?",
    answer:
      "If there are two or more CSS rules that point to the same element, the selector with the highest specificity will 'win', and its style declaration will be applied to that HTML element.",
    code: ``,
    q_category: "css",
    reference_link: "https://www.w3schools.com/css/css_specificity.asp",
  },
  {
    id: 19,
    question: "Difference inline and inline-block?",
    answer:
      "Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.",
    code: ``,
    q_category: "css",
    reference_link: "https://www.w3schools.com/css/css_inline-block.asp",
  },
];
