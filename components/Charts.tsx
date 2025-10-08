"use client";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Type definitions
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

const Charts = () => {
  const authorsData: Author[] = [
    { name: "J.K. Rowling", likes: 12500000 },
    { name: "Stephen King", likes: 8900000 },
    { name: "James Patterson", likes: 7600000 },
    { name: "Dan Brown", likes: 6800000 },
    { name: "Nora Roberts", likes: 5400000 },
    { name: "John Grisham", likes: 4900000 },
    { name: "George R.R. Martin", likes: 4200000 },
    { name: "Rick Riordan", likes: 3800000 },
  ];

  // Impact over time data (campaign timeline)
  const impactTimeline: ImpactData[] = [
    { month: "Jan", engagement: 4000, reach: 12000, conversions: 800 },
    { month: "Feb", engagement: 8000, reach: 25000, conversions: 1500 },
    { month: "Mar", engagement: 12000, reach: 45000, conversions: 2800 },
    { month: "Apr", engagement: 18000, reach: 75000, conversions: 4200 },
    { month: "May", engagement: 25000, reach: 110000, conversions: 6500 },
    { month: "Jun", engagement: 35000, reach: 165000, conversions: 9200 },
    { month: "Jul", engagement: 48000, reach: 220000, conversions: 12500 },
    { month: "Aug", engagement: 62000, reach: 285000, conversions: 16800 },
    { month: "Sep", engagement: 78000, reach: 350000, conversions: 21000 },
    { month: "Oct", engagement: 95000, reach: 420000, conversions: 25800 },
    { month: "Nov", engagement: 115000, reach: 500000, conversions: 31200 },
    { month: "Dec", engagement: 135000, reach: 580000, conversions: 37500 },
  ];

  // Format numbers for better readability
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  // Different colors for charts
  const barColors: string[] = [
    "#3b82f6",
    "#ef4444",
    "#10b981",
    "#f59e0b",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#84cc16",
  ];

  const areaColors: string[] = ["#3b82f6", "#10b981", "#8b5cf6"];

  // Area Chart Configuration for Impact Measurement
  const areaChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
      },
      animations: {
        enabled: true,

        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    colors: areaColors,
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    title: {
      text: "Campaign Impact Over Time",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#1f2937",
      },
    },
    xaxis: {
      categories: impactTimeline.map((data) => data.month),
      title: {
        text: "Campaign Timeline",
        style: {
          fontSize: "14px",
          fontWeight: 600,
          color: "#6b7280",
        },
      },
      axisBorder: {
        show: true,
        color: "#e5e7eb",
      },
      axisTicks: {
        show: true,
        color: "#e5e7eb",
      },
    },
    yaxis: {
      title: {
        text: "Engagement Metrics",
        style: {
          fontSize: "14px",
          fontWeight: 600,
          color: "#6b7280",
        },
      },
      labels: {
        formatter: function (value: number) {
          return formatNumber(value);
        },
      },
    },
    grid: {
      borderColor: "#f3f4f6",
      strokeDashArray: 4,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      theme: "light",
      x: {
        show: true,
      },
      y: {
        formatter: function (
          value: number,
          { seriesIndex }: { seriesIndex: number }
        ) {
          const metrics = ["Engagement", "Reach", "Conversions"];
          return `${metrics[seriesIndex]}: ${value.toLocaleString()}`;
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      fontSize: "14px",
      fontWeight: 600,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const areaChartSeries: ChartSeries[] = [
    {
      name: "Engagement",
      data: impactTimeline.map((data) => data.engagement),
    },
    {
      name: "Reach",
      data: impactTimeline.map((data) => data.reach),
    },
    {
      name: "Conversions",
      data: impactTimeline.map((data) => data.conversions),
    },
  ];

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
      {/* Impact Area Chart - Full Width Row */}
      <div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Chart
            options={areaChartOptions}
            series={areaChartSeries}
            type="area"
            height={400}
          />
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Tracking campaign performance metrics over a 12-month period</p>
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
          Author Likes Data
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
              {/* Total Row */}
              <tr className="bg-gray-50 font-semibold">
                <td className="py-3 px-4 text-gray-900">Total</td>
                <td className="py-3 px-4 text-right text-gray-900">
                  {totalLikes.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-right text-gray-900">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Charts;
