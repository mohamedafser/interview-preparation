import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { groupBy } from "@/utils/utils";
import AnswerAccordian from "@/components/answer-accordian";
import { QuestionType } from "@/data/questions/type";
import ViewFilter from "@/components/view-filter";
import { Grid2 as Grid } from "@mui/material";
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
  onSwitchView: (view: number) => void;
  column: number;
};

export default function JSTab(props: JSTabType) {
  const { datas, onSwitchView, column } = props;
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
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 10 }}>
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
        </Grid>
        <Grid
          size={{ md: 2 }}
          sx={{ display: { xs: "none", md: "block" }, textAlign: "right" }}
        >
          <ViewFilter onClick={onSwitchView} selected={column} />
        </Grid>
      </Grid>

      <CustomTabPanel value={value} index={0}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "grid",
            alignSelf: "start",
            gridTemplateColumns: `repeat(
                      ${column},
                      1fr
                    )`,
          }}
        >
          <AnswerAccordian datas={groupByType.THEORY} pageName={"javascript"} />
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "grid",
            alignSelf: "start",
            gridTemplateColumns: `repeat(
                      ${column},
                      1fr
                    )`,
          }}
        >
          <AnswerAccordian
            datas={groupByType.PRATICAL}
            pageName={"javascript"}
          />
        </Grid>
      </CustomTabPanel>
    </Box>
  );
}
