import React, { useState } from "react";
import "./App.css";
import TaskViewer from "./components/TaskViewer/TaskViewer";
import CreateTaskForm from "./components/CreateTaskForm/CreateTaskForm";
import Modal from "./components/modal/Modal";

//function App(){}
const App = () => {
  const data = [
    {
      id: "T-1",
      status: "Todo",
      description: " Create a Design System for Enum Workspace",
      dueDate: new Date(2021, 5, 24),
    },
    {
      id: "T-2",
      status: "Complete",
      description: "Design System for Enum Workspace",
      dueDate: new Date(2025, 5, 24),
    },
    {
      id: "T-3",
      status: "In progress",
      description: "Enum Workspace",
      dueDate: new Date(2023, 8, 24),
    },
    {
      id: "T-4",
      status: "In progress",
      description: "Something - Enum Workspace",
      dueDate: new Date(2023, 8, 24),
    },
  ];

  const [newTaskData, setNewTaskData] = useState(data);

  const addTask = (newTask) => {
    setNewTaskData((prevState) => [
      ...prevState,
      {
        ...newTask,
        id: `T-${prevState.length + 1}`,
        dueDate: new Date(newTask.dueDate),
      },
    ]);
    console.log("Task adaugat din App.jsx", newTask);
  };

  return (
    <div className="page-container">
      <TaskViewer dataFields={newTaskData} addTask={addTask}/>
    </div>
  );
};

export default App;
