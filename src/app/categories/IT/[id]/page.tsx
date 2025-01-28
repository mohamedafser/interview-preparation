"use client";
import CategoryLayout from "@/components/layouts/category-layout";
import { questions } from "@/data/datas";
import { filterByObject } from "@/utils/utils";
import { useParams } from "next/navigation";
import * as React from "react";
// import { js_beautify } from "js-beautify";
import JSTab from "./js-tab";
import AnswerAccordian from "@/components/answer-accordian";

export default function ITCategory() {
  const params = useParams();
  const { id } = params;
  const interviewQuestions = filterByObject(questions, "q_category", id);
  return (
    <CategoryLayout>
      {id === "javascript" ? (
        <JSTab datas={interviewQuestions} />
      ) : (
        <AnswerAccordian datas={interviewQuestions} pageName={id} />
      )}
    </CategoryLayout>
  );
}
