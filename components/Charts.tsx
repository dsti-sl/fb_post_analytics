"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import mockData from "./json/mockData.json";

interface Author {
  name: string;
  likes: number;
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
  count: number;
  percentage: number;
}

interface ChartColors {
  barColors: string[];
  areaColors: string[];
  genderColors: string[];
}

const typedMockData: {
  authors: Author[];
  genderParticipation: GenderData[];
  impactTimeline: ImpactData[];
  chartColors: ChartColors;
} = mockData;

const Charts = () => {
  const authorsData: Author[] = typedMockData.authors;
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
              Participants: ${gender.count.toLocaleString()}<br/>
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
      categories: authorsData.map((author) => author.name),
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: 600,
        },
        rotate: -45,
      },
    },
    title: {
      text: "Top Authors - Facebook Likes Comparison",
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
      data: authorsData.map((author) => author.likes),
    },
  ];

  // Calculate total likes for data table
  const totalLikes: number = authorsData.reduce(
    (sum, author) => sum + author.likes,
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
            <p>Gender distribution of campaign participants</p>
          </div>
        </div>
      </div>

      {/* Bar Chart - Full Width Row */}
      <div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Chart
            options={barChartOptions}
            series={barChartSeries}
            type="bar"
            height={400}
          />
        </div>
      </div>

      {/* Data Table - Full Width Row */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
          Participants by Author - Facebook Likes Breakdown
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
                  Facebook Likes
                </th>
                <th className="py-3 px-4 text-right font-semibold text-gray-700 border-b-2 border-gray-200">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              {authorsData.map((author, index) => {
                const percentage: string = (
                  (author.likes / totalLikes) *
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
                      {author.likes.toLocaleString()}
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
  );
};

export default Charts;
