import React, { useState } from "react";
import { useNavigate,NavLink,Link } from 'react-router-dom';
import "./Sidebar.css";

import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import {
    UilBars,
    UilSignOutAlt,UilEstate
  } from "@iconscout/react-unicons";

import Logo from "../images/1.png";
import { SidebarData } from "../Data";
import { motion } from "framer-motion";

const Sidebar = () => {

  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      
      <div className="logo">
        <span>
          Training & Placement 
        </span>
      </div>
   
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <>
            
            <div 
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}   
    
              onClick={() => (setSelected(index)) }
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
            </>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;