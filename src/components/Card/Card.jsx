import React, { useState, useEffect } from 'react'
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <h2>{param.title}</h2>
      <div className="detail">
        <Png />
        <span>{param.value}</span>
        <span>Last 1 years</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  
  const data = {
    options: {
      chart: {
        type: 'bar',
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve:"smooth",
        colors: ["white"],
      },
      tooltip: {
        
      },
      grid: {
        show: true,
      },
      xaxis: {
        
        categories: [
         "CSE",
         "ECE",
         "MECH",
         "ELEC",
         "MME",
         "CHEM",
         "CIVIL",
        ],
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        boxShadow: param.color.boxShadow,
        background: param.color.backGround,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
        <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={param.series} type={param.type}/>
      </div>

      <span>Last 2 years</span>
    </motion.div>
  );
}

export default Card;