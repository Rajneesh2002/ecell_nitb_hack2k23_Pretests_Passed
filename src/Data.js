import React, { useState, useEffect } from 'react'

import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  // Analytics Cards imports
  import { UilUsdSquare,UilRupeeSign, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  import { keyboard } from "@testing-library/user-event/dist/keyboard";
  
  // Recent Card Imports
  const numbers=[1,2,3,4,5]
  //import data

function AnalysisRes() {

  
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
   
  return (
    numbers[0]=10
  )

}
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Placement",
    },
    {
      icon: UilUsersAlt,
      heading: "Companies",
    },
    {
      icon: UilChart,
      heading: 'Analytics'
    },
    
  ];
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Internship",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilRupeeSign,
      series: [
        {
          name: "sales",
          data:numbers,
        },
      ],
    },
    {
      title: "Placement",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Growth",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];