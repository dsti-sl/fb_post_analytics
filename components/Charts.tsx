"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import mockData from "./json/mockData.json";

interface Author {
  name: string;
  data: number;
}

interface ImpactData {
  month: string;
  engagement: number;
  reach: number;
  conversions: number;
}

interface ChartSeries {
  name: string;
  data: number[];
}

interface GenderData {
  gender: string;
  count?: number;
  percentage: number;
}

interface ChartColors {
  barColors: string[];
  areaColors: string[];
  genderColors: string[];
}

const typedMockData: {
  authors_final: Author[];
  authors_engagement: Author[];
  authors_impacts: Author[];
  authors_reactions: Author[];
  authors_comments: Author[];
  genderParticipation: GenderData[];
  impactTimeline: ImpactData[];
  chartColors: ChartColors;
} = {
  ...mockData,
  authors_engagement: mockData.engagement_score.map((item: { name: string; data: number }) => ({
    name: item.name,
    data: item.data,
  })),
  authors_comments: mockData.authors_comments.map((item: { name: string; data: number }) => ({
    name: item.name,
    data: item.data,
  })),
  authors_impacts: mockData.authors_impacts.map((item: { name: string; data: number }) => ({
    name: item.name,
    data: item.data,
  })),
  authors_final: mockData.authors_final.map((item: { name: string; data: number }) => ({
    name: item.name,
    data: item.data,
  })),
};

const Charts = () => {
  const authData_final: Author[] = typedMockData.authors_final;
  const authData_engagement: Author[] = typedMockData.authors_engagement;
  const authData_impact: Author[] = typedMockData.authors_impacts;
  const authorsData_reaction: Author[] = typedMockData.authors_reactions;
  const authsData_comment: Author[] = typedMockData.authors_comments;
  const genderParticipation: GenderData[] = typedMockData.genderParticipation;

  const barColors: string[] = typedMockData.chartColors.barColors;
  const genderColors: string[] = typedMockData.chartColors.genderColors;

  const pieChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "pie",
      height: 400,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
      animations: {
        enabled: true,
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
      },
    },
    colors: genderColors,
    labels: genderParticipation.map((data) => data.gender),
    title: {
      text: "Participation by Gender",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#1f2937",
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      fontWeight: 500,
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
      },
      dropShadow: {
        enabled: false,
      },
      formatter: function (val: number, opts) {
        return opts.w.config.series[opts.seriesIndex] + "%";
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (
          value: number,
          { seriesIndex }: { seriesIndex: number }
        ) {
          const gender = genderParticipation[seriesIndex];
          return `
            <div style="padding: 8px;">
              <strong>${gender.gender}</strong><br/>
              Percentage: ${gender.percentage}%
            </div>
          `;
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "45%",
        },
        expandOnClick: true,
        dataLabels: {
          offset: 20,
          minAngleToShowLabel: 10,
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 350,
          },
          legend: {
            position: "bottom",
            horizontalAlign: "center",
          },
        },
      },
    ],
  };

  const pieChartSeries: number[] = genderParticipation.map(
    (data) => data.percentage
  );

  // Participation Reaction
  const barChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 6,
        borderRadiusApplication: "end",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: authorsData_reaction.map((author) => author.name),
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: 600,
        },
        rotate: -45,
      },
    },
    title: {
      text: "Facebook Reactions Comparison",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    colors: barColors,
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f8fafc", "transparent"],
        opacity: 0.5,
      },
    },
    tooltip: {
      y: {
        formatter: function (value: number) {
          return value.toLocaleString() + " likes";
        },
      },
    },
  };

  const barChartSeries: ChartSeries[] = [
    {
      name: "Facebook Likes",
      data: authorsData_reaction.map((author) => author.data),
    },
  ];

  // Calculate total reactions for data table
  const totalLikes: number = authorsData_reaction.reduce(
    (sum, author) => sum + author.data,
    0
  );


  // Participation Comments
  const commentChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 6,
        borderRadiusApplication: "end",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: authsData_comment.map((author) => author.name),
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: 600,
        },
        rotate: -45,
      },
    },
    title: {
      text: "Facebook Comments Comparison",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    colors: barColors,
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f8fafc", "transparent"],
        opacity: 0.5,
      },
    },
    tooltip: {
      y: {
        formatter: function (value: number) {
          return value.toLocaleString() + " comments";
        },
      },
    },
  };

  const commentChartSeries: ChartSeries[] = [
    {
      name: "Facebook Comments",
      data: authsData_comment.map((author) => author.data),
    },
  ];

  // Calculate total comments for data table
  const totalComments: number = authsData_comment.reduce(
    (sum, author) => sum + author.data,
    0
  );

  // ENGAGEMENT SCORE
  // --- Engagement Score Bar Chart Configuration ---
  const engagementChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: true },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 6,
        borderRadiusApplication: "end",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: authData_engagement.map((author) => author.name),
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: 600,
        },
        rotate: -45,
      },
    },
    title: {
      text: "Engagement Score (%)",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    colors: barColors,
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f8fafc", "transparent"],
        opacity: 0.5,
      },
    },
    tooltip: {
      y: {
        formatter: function (value: number) {
          return value.toFixed(2) + " engagement score";
        },
      },
    },
  };

  // --- Engagement Score Chart Data ---
  const engagementChartSeries: ChartSeries[] = [
    {
      name: "Engagement Score",
      data: authData_engagement.map((author) => author.data),
    },
  ];

  // --- Total Engagement (for Percentage Calculation) ---
  const totalEngagement: number = authData_engagement.reduce(
    (sum, author) => sum + author.data,
    0
  );

  // --- IMPACT CHART ---
  const impactChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 6,
        borderRadiusApplication: "end",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: authData_impact.map((author) => author.name),
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: 600,
        },
        rotate: -45,
      },
    },
    title: {
      text: "Impact Score (%)",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    colors: barColors,
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f8fafc", "transparent"],
        opacity: 0.5,
      },
    },
    tooltip: {
      y: {
        formatter: function (value: number) {
          return value.toFixed(2);
        },
      },
    },
  };

  const impactChartSeries: ChartSeries[] = [
    {
      name: "Impact Score (%)",
      data: authData_impact.map((author) => author.data),
    },
  ];

  // Calculate total impact score (sum of normalized values, optional)
  const totalImpact: number = authData_impact.reduce(
    (sum, author) => sum + author.data,
    0
  );

  // --- FINAL SCORE ---
  // --- Final Score Bar Chart Configuration ---
  const finalChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: true },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 6,
        borderRadiusApplication: "end",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: authData_final.map((author) => author.name),
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: 600,
        },
        rotate: -45,
      },
    },
    title: {
      text: "Final Score (%)",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    colors: barColors,
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f8fafc", "transparent"],
        opacity: 0.5,
      },
    },
    tooltip: {
      y: {
        formatter: function (value: number) {
          return value.toFixed(2) + " final score";
        },
      },
    },
  };

  // --- Final Score Chart Data ---
  const finalChartSeries: ChartSeries[] = [
    {
      name: "Final Score",
      data: authData_final.map((author) => author.data),
    },
  ];

  // --- Total Final Score (for Percentage Calculation) ---
  const totalFinalScore: number = authData_final.reduce(
    (sum, author) => sum + author.data,
    0
  );


  return (
    <div className="space-y-8">
      {/* Pie Chart for Gender Participation - Full Width Row */}
      <div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Chart
            options={pieChartOptions}
            series={pieChartSeries}
            type="pie"
            height={400}
          />
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Gender distribution of participants</p>
          </div>
        </div>
      </div>

      {/* --- Engagement Bar Chart - Full Width Row --- */}
      <div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Chart
            options={engagementChartOptions}
            series={engagementChartSeries}
            type="bar"
            height={400}
          />
        </div>

        {/* --- Engagement Data Table - Full Width Row --- */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
            Participants - Engagement Score Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b-2 border-gray-200">
                    No
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b-2 border-gray-200">
                    Author
                  </th>
                  <th className="py-3 px-4 text-right font-semibold text-gray-700 border-b-2 border-gray-200">
                    Engagement Score
                  </th>
                  <th className="py-3 px-4 text-right font-semibold text-gray-700 border-b-2 border-gray-200">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {authData_engagement.map((author, index) => {
                  const percentage: string = (
                    (author.data / totalEngagement) *
                    100
                  ).toFixed(1);

                  return (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-left">
                        <span className="font-semibold text-gray-900">
                          {index + 1}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-3"
                            style={{ backgroundColor: barColors[index] }}
                          ></div>
                          <span className="font-medium text-gray-900">
                            {author.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-gray-900">
                        {author.data.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="font-semibold text-gray-900">
                          {percentage}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* --- Impact Bar Chart - Full Width Row --- */}
      <div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Chart
            options={impactChartOptions}
            series={impactChartSeries}
            type="bar"
            height={400}
          />
        </div>

        {/* --- Impact Data Table - Full Width Row --- */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
            Participants - Impact Score Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b-2 border-gray-200">
                    No
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b-2 border-gray-200">
                    Author
                  </th>
                  <th className="py-3 px-4 text-right font-semibold text-gray-700 border-b-2 border-gray-200">
                    Impact Score (Normalized)
                  </th>
                  <th className="py-3 px-4 text-right font-semibold text-gray-700 border-b-2 border-gray-200">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {authData_impact.map((author, index) => {
                  const percentage: string = (
                    (author.data / totalImpact) *
                    100
                  ).toFixed(1);

                  return (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-left">
                        <span className="font-semibold text-gray-900">
                          {index + 1}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-3"
                            style={{ backgroundColor: barColors[index] }}
                          ></div>
                          <span className="font-medium text-gray-900">
                            {author.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-gray-900">
                        {author.data.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="font-semibold text-gray-900">
                          {percentage}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* --- Final Score Bar Chart - Full Width Row --- */}
      <div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Chart
            options={finalChartOptions}
            series={finalChartSeries}
            type="bar"
            height={400}
          />
        </div>

        {/* --- Final Score Data Table - Full Width Row --- */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
            Participants - Final Score Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b-2 border-gray-200">
                    No
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b-2 border-gray-200">
                    Author
                  </th>
                  <th className="py-3 px-4 text-right font-semibold text-gray-700 border-b-2 border-gray-200">
                    Final Score
                  </th>
                  <th className="py-3 px-4 text-right font-semibold text-gray-700 border-b-2 border-gray-200">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {authData_final.map((author, index) => {
                  const percentage: string = ((author.data / totalFinalScore) * 100).toFixed(1);

                  return (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-left">
                        <span className="font-semibold text-gray-900">{index + 1}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-3"
                            style={{ backgroundColor: barColors[index] }}
                          ></div>
                          <span className="font-medium text-gray-900">{author.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-gray-900">
                        {author.data.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="font-semibold text-gray-900">{percentage}%</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>





    </div>
  );
};

export default Charts;
