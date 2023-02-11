import React from "react"
import {  Route, Routes } from "react-router-dom";

import './App.css'
import {Layout} from './Layout';

import Sidebar from "./components/Sidebar"
import MainDash from "./components/MainDash/MainDash.jsx"
import Ap from './components/Ap';

function App() {
  return (
    <>
    <Layout/>
    <Ap/>
    
    </>
  );
}

export default App;