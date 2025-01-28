import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { QuestionType } from "@/data/datas";
import { groupBy } from "@/utils/utils";
import AnswerAccordian from "@/components/answer-accordian";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type JSTabType = {
  datas: QuestionType[];
};

export default function JSTab(props: JSTabType) {
  const { datas } = props;
  const [value, setValue] = React.useState(0);

  const groupByType = groupBy(datas, "js_qtype");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (Object.keys(groupByType).length === 0) {
    return "No Datas";
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {Object.keys(groupByType).map((data, index) => {
            return <Tab label={data} {...a11yProps(index)} key={data} />;
          })}
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <AnswerAccordian datas={groupByType.THEORY} pageName={"javascript"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AnswerAccordian datas={groupByType.PRATICAL} pageName={"javascript"} />
      </CustomTabPanel>
    </Box>
  );
}
