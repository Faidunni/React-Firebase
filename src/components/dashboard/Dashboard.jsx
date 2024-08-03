import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";

const Dashboard = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 mg">
          <ProjectList />
        </div>
        <div className="col s12 m5 offset-ml">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
