import React from "react"
import "./App.css"
import Home from "./Home"
import Content from "./Content"

import Sidebar from "./components/Sidebar"
import MainDash from "./components/MainDash/MainDash.jsx"
export function Layout()
{
    return(
        <>
        <div className="App">
        <div className="AppGlass">
            <Sidebar/>
            <MainDash/>
        </div>
        </div>
        </>
    );
}
