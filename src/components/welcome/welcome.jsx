import React from "react";
import { Link } from "react-router-dom";
import Table from "../table/table";
import "../../assets/styles/welcome.css";

const CoolComponent = () => {
  return (
    <div className="cool-component">
      <h1>Добро пожаловать</h1>
      <p>Это задание сделано на React для отбора на стажировку в <span className="kasper">Kaspersky</span></p>
      <Link to="/table">
        <button className="cool-button">Поехали!</button>
      </Link>
    </div>
  );
};

export default CoolComponent;
