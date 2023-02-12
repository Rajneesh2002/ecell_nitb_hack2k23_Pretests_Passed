import React, { useState, useEffect } from 'react'

import { UilEstate,UilClipboardAlt,UilUsersAlt,UilPackage,UilChart,UilSignOutAlt,UilUsdSquare,UilRupeeSign, UilMoneyWithdrawal} from "@iconscout/react-unicons"

import "./Cards.css";

import Card from "../Card/Card";

const Cards = () => {
  const [analysisData, setAnalysisData] = useState({ });
  
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/analysis")
        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.statusText}`)
        }
        const data = await res.json()
        setAnalysisData(data)
        console.log('Data 1:', data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData1()
  }, [])

const cardsData = [
    {
      type:"bar",
      title: "Package Stats",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 57,
      value: "16.5 LPA",
      png: UilRupeeSign,
      series: [
        {
          name: "HIGHEST PLACEMENT",
          data:[analysisData["max_cse"],analysisData["max_ece"],analysisData["max_mech"],analysisData["max_mme"],analysisData["max_civil"],analysisData["max_plan"],analysisData["max_arch"]],
        },
        {
          name: "AVERAGE PALACEMENT",
          data:[analysisData["pac_cse"],analysisData["pac_ece"],analysisData["pac_mech"],analysisData["pac_mme"],analysisData["pac_civil"],analysisData["pac_plan"],analysisData["pac_arch"]],
        },
      ],
    },
    {
      type:"bar",
      title: "Companies Visit",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 100,
      value: "198",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Companies",
          data: [analysisData["allow_cse"],analysisData["allow_ece"],analysisData["allow_mech"],analysisData["allow_mme"],analysisData["allow_civil"],analysisData["allow_chem"],analysisData["allow_arch"]],
        },
      ],
    },
    {
      type:"bar",
      title: "Students Placed",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "725",
      png: UilClipboardAlt,
      series: [
        {
          name: "students",
          data: [analysisData["sel_cse"],analysisData["sel_ece"],analysisData["sel_mech"],analysisData["sel_mme"],analysisData["sel_civil"],analysisData["sel_chem"],analysisData["sel_arch"]],
       },
      ],
    },
    
  ];
  
  return (
    <div className="Cards" >
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              type={card.type}
            />
          </div>
        );
      })}
      
    </div>
  );
};

export default Cards;