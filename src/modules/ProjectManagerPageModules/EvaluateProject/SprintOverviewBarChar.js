import React from 'react'
import { Bar } from "react-chartjs-2";

export default function SprintOverviewBarChar() {

    const barChart = (
        <Bar
          data={{
            labels: ["sprint 1", "sprint 2", "sprint 3", "sprint 4", "sprint 5"],
            datasets: [
              {
                data: [5, 10, 15, 20, 10],
                backgroundColor: [
                  "#3da19c",
                  "#06adbf",
                  "#f7d619",
                  "#bf00c2",
                  "#ff2684",
                  "#3254a8",
                ],
                label: "Meal Calorie Intake",
              },
            ],
          }}
          options={{
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              },
            },
    
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                    drawBorder: true,
                    drawOnChartArea: false,
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                    drawBorder: true,
                    drawOnChartArea: false,
                  },
                },
              ],
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
          <div>{barChart}</div>
        </div>
      </div>
    </div>
    )
}
