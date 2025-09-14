import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Bar } from "react-chartjs-2";

import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamResultsContainer,
  ExamSubject,
  ExamResult,
  ExamChartContainer,
} from "../../styles/ExamStyles";
import { BsBorderWidth } from "react-icons/bs";
const ExamSection = () => {
  // sample exam results data
  const examResultsData = {
    subjects: ["Math", "Science", "English", "History"],
    results: [80, 75, 90, 85],
  };

  // bar chart data
  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        labels: "Exam Results",
        backgroundColor: "#007bff",
        borderColor: "#007bee",
        borderWidth: "1",
        hoverBackgroundColor: "#005663",
        hoverBorderColor: "#2056b3",
        data: examResultsData.results,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ExamHeader>Exam Results</ExamHeader>
      <ExamResultsContainer>
        {examResultsData.subjects.map((subject, index) => (
          <div key={index}>
            <ExamSubject>{subject}</ExamSubject>
            <ExamResult>Score: {examResultsData.results[index]}</ExamResult>
          </div>
        ))}
        <ExamChartContainer>
          <Bar ref={chartRef} data={barChartData} options={chartOptions} />
        </ExamChartContainer>
      </ExamResultsContainer>
    </ExamContainer>
  );
};

export default ExamSection;
