import { QuestionType } from "@/data/datas";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useThemeContext } from "@/config/theme/theme-context";
import { useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

const codeThemeConfig = {
  light: oneLight,
  dark: dark,
};

type TAnswerAccordian = {
  datas: QuestionType[] | undefined;
  pageName: string | string[] | undefined;
};

const AnswerAccordian = (props: TAnswerAccordian) => {
  const { datas, pageName } = props;
  const theme = useTheme();
  const themeMode = useThemeContext();

  if (datas?.length === 0) {
    return <Typography variant="h2">No Records Found</Typography>;
  }

  return datas?.map((item) => (
    <Accordion key={item.id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id={`"panel${item.id}-header"`}
      >
        <Typography component="span">{item.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {item.answer && (
          <Typography
            variant="body2"
            sx={{
              display: "block",
              background:
                theme.palette.grey[themeMode.mode === "dark" ? 900 : 100],
              borderRadius: 1,
              margin: "10px 0",
              color:
                themeMode.mode === "dark"
                  ? theme.palette.common.white
                  : theme.palette.common.black,
              padding: "10px",
            }}
          >
            {item.answer}
          </Typography>
        )}
        {item.code && (
          <SyntaxHighlighter
            language={Array.isArray(pageName) ? pageName.join(",") : pageName}
            style={codeThemeConfig[themeMode.mode]}
          >
            {item.code}
          </SyntaxHighlighter>
        )}
        {item.reference_link && (
          <Link
            href={item.reference_link}
            target="_blank"
            style={{ display: "flex", alignItems: "center", gap: 5 }}
          >
            <Typography component="span" color="primary">
              View More
            </Typography>
            <LinkIcon color="primary" />
          </Link>
        )}
      </AccordionDetails>
    </Accordion>
  ));
};

export default AnswerAccordian;
