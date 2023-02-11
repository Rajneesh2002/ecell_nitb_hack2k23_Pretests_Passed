import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash p-xl-8 mt-3">
      <h1>Dashboard</h1>
      <Cards />
      <br/>
      <Table />
    </div>
  );
};

export default MainDash;