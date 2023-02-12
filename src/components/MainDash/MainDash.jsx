import { height } from "@mui/system";
import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash text-center p-xl-8 mt-1" style={{height:"212px" ,width:"110%"}}>
      <h1 className="mb-3">Analytics</h1>
      <Cards />
    </div>
  );
};

export default MainDash;