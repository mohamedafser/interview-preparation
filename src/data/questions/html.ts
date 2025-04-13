import { getUniqueIDArrayforQandA } from "@/utils/utils";
import { QuestionType } from "./type";

const quess: QuestionType[] = [
  {
    question: "What is DocType?",
    answer:
      "The declaration is not an HTML tag. It is an information to the browser about what document type to expect.",
    code: "<!DOCTYPE>",
    reference_link: "https://www.w3schools.com/tags/tag_doctype.ASP",
    q_category: "html",
  },
  {
    question: "What is sementic tag?",
    answer:
      "A semantic element clearly describes its meaning to both the browser and the developer.",
    code: "",
    reference_link:
      "https://www.w3schools.com/html/html5_semantic_elements.asp",
    q_category: "html",
  },
  {
    question: "New tags introduced in HTML5",
    answer:
      "Semantic Structural Tags, Multimedia Tags, Scripting and Template Tags",
    code: "\n  <header>: Represents the introductory section or a container for navigational links.\n  <nav>: Defines navigation links or a menu.\n  <section>: Groups related content together, typically with a heading.\n  <article>: Represents a self-contained piece of content, such as a blog post or news article.\n  <aside>: Contains content related to the main content, like sidebars or callout boxes.\n  <footer>: Defines the footer for a section or the entire document.\n  <main>: Represents the main content of the document, unique and central to the page.\n  <template>: Defines a template for content that is not displayed until activated by JavaScript.\n  <script>: Enhanced with async and defer attributes for better performance.\n  <noscript>: Provides alternative content for users with JavaScript disabled.\n    ",
    q_category: "html",
  },
  {
    question: "What is Meta Tag?",
    answer:
      "The meta tag in HTML provides metadata about a web page, which is not displayed on the page itself but is important for browsers, search engines, and other web services. Metadata includes information like the page description, character set, author, viewport settings, and more.",
    code: "\n  <meta>\n    ",
    q_category: "html",
    reference_link: "https://www.w3schools.com/tags/tag_meta.asp",
  },
  {
    question:
      "What is lazy loading, and how do you implement it for images or iframes in HTML?",
    answer:
      "Lazy loading defers the loading of images or iframes until they are about to appear in the viewport, improving page load time and performance by reducing initial resource downloads. Lazy Loading optimizes the initial load by deferring non-critical resources.",
    code: '\n  The loading attribute can be added to <img> and <iframe> elements.\n  <img src="example.jpg" alt="Example" loading="lazy">\n  <iframe src="https://example.com" loading="lazy"></iframe>\n  lazy: Loads the resource when it comes into the viewport.\n  eager: Loads the resource immediately.\n  auto: Browser determines the behavior.\n    ',
    q_category: "html",
  },
  {
    question:
      "What is the purpose of the preload and prefetch attributes in <link>?",
    answer:
      "Preloads critical resources (like fonts, images, CSS, or JavaScript) needed for the current page, ensuring they are available as soon as possible. Commonly used for fonts, stylesheets, or scripts. Prefetch: Preloads resources that might be needed for a future page (e.g., when a user navigates to a different page). preload fetches critical resources for the current page, while prefetch fetches resources for future navigation. ",
    code: '\n<link rel="preload" href="styles.css" as="style">\n<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin="anonymous">\n<link rel="prefetch" href="next-page.html">\npreload is for immediate use (current page).\nprefetch is for future use (next page or interaction).\n    ',
    q_category: "html",
  },
  {
    question:
      "Explain the defer and async attributes on the <script> tag. How do they affect page load performance?",
    answer:
      "Both defer and async are used to load JavaScript files in a non-blocking way, improving page performance. Defer: Ensures the script is executed after the HTML document is fully parsed. Scripts with defer are executed in the order they appear in the document. Async: Loads the script asynchronously and executes it as soon as it’s downloaded, without waiting for the HTML parsing to finish. Scripts with async are not guaranteed to execute in order (useful for independent scripts, like analytics).",
    code: '\n<script src="script.js" defer></script>\n<script src="analytics.js" async></script>\ndefer ensures scripts execute after parsing in order, while async executes scripts immediately upon download, regardless of order.\n    ',
    q_category: "html",
  },
  {
    question: "What is block elemens?",
    answer:
      "Block-level elements take up the full width of their container by default and start on a new line. They typically represent larger structural sections of a page.",
    code: "\n<div>, <section>, <article>, <header>, <footer>, <aside>, <nav>, <main>\n    ",
    q_category: "html",
  },
  {
    question: "What is inline elemens?",
    answer:
      "Inline elements only take up as much width as necessary and do not start on a new line. They are used to style or manipulate small portions of text or content within block-level elements.",
    code: "\n<span>, <b>, <i>, <em>, <strong>, <u>, <small>, <mark>, <sub>, <sup>\n    ",
    q_category: "html",
  },
];

const htmlQuestions: QuestionType[] = getUniqueIDArrayforQandA(quess);

export { htmlQuestions };
