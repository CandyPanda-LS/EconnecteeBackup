import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function TaskOverviewPieChart() {
  const pieChart = (
    <Doughnut
      data={{
        labels: ["Completed", "To do", "Done"],
        datasets: [
          {
            data: [5, 10, 20],
            backgroundColor: [
              "#bf00c2",
              "#ff2684",
              "#3254a8",
              "#3da19c",
              "#06adbf",
              "#f7d619",
            ],
            label: "Weight",
          },
        ],
      }}
      options={{
        animation: {
          animateScale: true,
        },
      }}
    />
  );

  return (
    <div>
      <div className="card boderRadiusCards">
        <div className="card-body">
          <div>
            <h5 className="text-center">Task Oveview</h5>
          </div>
          <div>{pieChart}</div>
        </div>
      </div>
    </div>
  );
}
