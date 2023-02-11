import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Layout from './Layout';

import Ap from './components/Ap'
function App() {
  return (
    <>
    <Layout/>
    <Ap/>
    </>
  );
}

export default App;