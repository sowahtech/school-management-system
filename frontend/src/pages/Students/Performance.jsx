import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Line } from "react-chartjs-2";

import {
  PerformanceContainer,
  SidebarContainer,
  Content,
  PerformanceHeader,
  PerformanceInfo,
  PerformanceGraphContainer,
  TotalMarks,
} from "../../styles/PerformanceStyles";
const PerformanceSection = () => {
  // static data
  const performanceData = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    marks: [90, 85, 87, 92, 85, 89],
    totalMarks: 520,
  };

  // lets make line chart data here
  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: "Performance Trends",
        fill: "false",
        lineTension: 0.1,
        backgroundColor: "#007bff",
        borderColor: "#007bcc",
        data: performanceData.marks,
      },
    ],
  };
  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance</PerformanceHeader>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            <Line
              data={lineChartData}
              options={{
                scales: {
                  yAxes: [
                    {
                      tickes: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </PerformanceGraphContainer>
          <TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
        </PerformanceInfo>
      </Content>
    </PerformanceContainer>
  );
};

export default PerformanceSection;
