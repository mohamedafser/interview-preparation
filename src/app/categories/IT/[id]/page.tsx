"use client";
import CategoryLayout from "@/components/layouts/category-layout";
import { filterByObject } from "@/utils/utils";
import { useParams } from "next/navigation";
import * as React from "react";
import JSTab from "./js-tab";
import AnswerAccordian from "@/components/answer-accordian";
import { questionAndAnswers } from "@/data/questions";
import ViewFilter from "@/components/view-filter";
import { Box, Grid2 as Grid } from "@mui/material";

const columnConfig = {
  one: 1,
  two: 2,
  three: 3,
};
export default function ITCategory() {
  const params = useParams();
  const [column, setColumn] = React.useState(2);
  const { id } = params;
  const interviewQuestions = filterByObject(
    questionAndAnswers,
    "q_category",
    id
  );
  const onSwitchView = (view: number) => {
    setColumn(view);
  };

  return (
    <CategoryLayout>
      {id !== "javascript" && (
        <Box sx={{ textAlign: "right" }}>
          <ViewFilter onClick={onSwitchView} selected={column} />
        </Box>
      )}
      {id === "javascript" ? (
        <JSTab
          datas={interviewQuestions}
          onSwitchView={onSwitchView}
          column={column}
        />
      ) : (
        <div>
          <Grid
            // container
            // spacing={2}
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))`,
              gap: "15px",
            }}
          >
            <AnswerAccordian datas={interviewQuestions} pageName={id} />
          </Grid>
        </div>
      )}
    </CategoryLayout>
  );
}
