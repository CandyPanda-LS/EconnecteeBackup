import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function TaskOverviewPieChart(props) {
  const pieChart = (
    <Doughnut
      data={{
        labels: ["To do", "In Progress", "Done"],
        datasets: [
          {
            data: [props.tasks.toDoList.length, props.tasks.inProgressList.length, props.tasks.doneList.length],
            backgroundColor: [
              "#bf00c2",
              "#ff2684",
              "#3254a8",
            ],
            label: "Tasks",
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
