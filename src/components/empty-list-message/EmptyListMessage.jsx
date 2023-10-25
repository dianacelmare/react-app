import React from "react";
import tasksIcon from "../../assets/icons/tasks-icon.png";
import "./EmptyListMessage.css";
import Button from "../common/Button/Button";

const EmptyListMessage = (props) => {
  return (
    <div className="empty-list-container">
      <div className="empty-list-message">
        <img className="tasks-logo" src={tasksIcon} alt="icon" />
        <h3 className="view-title">No Tasks Yet</h3>
        <p className="subtitle">Get productive. Create a Task Now.</p>

        <Button onClick={() => props.onCreateTaskClick(true)}></Button>
      </div>
    </div>
  );
};

export default EmptyListMessage;
