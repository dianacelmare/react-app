import React from "react";
import "./TaskCard.css";

const TaskCard = (props) => {
  // let taskId = 0;
  const handleClick = () => {
    console.log("Button clicked " + props.id);
    // taskId = taskId + 1;
    // console.log(taskId);
  };

  return (
    <div className="task-container">
      <div className="taskHeader">
        <p className="id">{props.id}</p>
        <p className="status">{props.status}</p>
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
