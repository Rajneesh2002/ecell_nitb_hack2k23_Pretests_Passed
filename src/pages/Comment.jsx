import React, { useState, useEffect } from 'react'

import Table from '../components/Table/Table';
function Comment() {

  
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
   
  const numbers = [analysisData["pac_cse"],analysisData["max_ece"],analysisData["max_mech"],analysisData["max_elec"],analysisData["max_mme"],analysisData["max_civil"],analysisData["max_plan"],analysisData["max_arch"]];
  return (
    <>
    <div>
    </div>
    <div className="MainDash text-center p-xl-8 mt-1"  style={{width:"110%"}}>
    <h1 className="mb-3">Recent Placed Data</h1>
    <Table />
  </div>
  </>
);
}
export default Comment;