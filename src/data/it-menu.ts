type FrontendName =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "React JS"
  | "Redux"
  | "Unit Test"
  | "TypeScript";

type BackendName = "Node JS" | "Express JS";
type TechStack = "Frontend" | "Backend";

type QuestionType = {
  id: number | string;
  name: FrontendName | BackendName;
  url: string;
  techStack: TechStack;
};

type MenuItemsType = {
  [key: string]: QuestionType[];
};

const itMenuItems: QuestionType[] = [
  {
    id: 1,
    name: "HTML",
    url: "/categories/IT/html",
    techStack: "Frontend",
  },
  {
    id: 2,
    name: "CSS",
    url: "/categories/IT/css",
    techStack: "Frontend",
  },
  {
    id: 3,
    name: "JavaScript",
    url: "/categories/IT/javascript",
    techStack: "Frontend",
  },
  {
    id: 4,
    name: "React JS",
    url: "/categories/IT/react-js",
    techStack: "Frontend",
  },
  {
    id: 5,
    name: "Redux",
    url: "/categories/IT/redux",
    techStack: "Frontend",
  },
  {
    id: 6,
    name: "TypeScript",
    url: "/categories/IT/typescript",
    techStack: "Frontend",
  },
  {
    id: 7,
    name: "Unit Test",
    url: "/categories/IT/unit-test",
    techStack: "Frontend",
  },
  {
    id: 8,
    name: "Node JS",
    url: "/categories/IT/node-js",
    techStack: "Backend",
  },
  {
    id: 9,
    name: "Express JS",
    url: "/categories/IT/express-js",
    techStack: "Backend",
  },
];

export const categoryMenu: MenuItemsType = {
  IT: itMenuItems,
};
