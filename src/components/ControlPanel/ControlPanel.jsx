import React, { useState } from "react";
import Button from "../common/Button/Button";
import "./ControlPanel.css";
import Modal from "../modal/Modal";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";

const ControlPanel = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNewTaskAdd = (task) => {
    props.addTask(task);
    setIsOpen(false);
  };

  return (
    <>
      <div className="panel-container">
        <div className="text-content">
          <h3 className="view-title">Tasks</h3>
          <p className="subtitle">Your tasks in your space.</p>
        </div>
        <Button onClick={openModal} />
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="form-container">
          <h2>Create Task</h2>
          <CreateTaskForm addTask={handleNewTaskAdd} />
        </div>
      </Modal>
    </>
  );
};

export default ControlPanel;
