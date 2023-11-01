import React from "react";
import "./TaskCard.css";
import Badge from "../common/Badge/Badge";

const TaskCard = (props) => {
  // // let taskId = 0;
  // const handleClick = () => {
  //   console.log("Button clicked " + props.id);
  //   // taskId = taskId + 1;
  //   // console.log(taskId);
  // };

  const styleBadge = () => {
    switch (props.status) {
      case "Todo":
        return "grey";
      case "In progress":
        return "orange";
      case "Pending":
        return "blue";
      case "Completed":
        return "green";
      default:
        return "grey";
    }
  };

  return (
    <div className="task-container">
      <div className="taskHeader">
        <p className="id">{props.id}</p>
        <Badge label={props.status} color={styleBadge()} />
      </div>
      <div className="taskContent">{props.description}</div>
      <div className="taskFooter">
        <p className="dueDateLabel">Due Date</p>
        <p className="dueDate">{props.dueDate.toLocaleDateString()}</p>
      </div>
      {/* <button onClick={handleClick}>Click!</button> */}
    </div>
  );
};

export default TaskCard;
