import React, { useState, useEffect } from 'react'

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
   
  const numbers = [analysisData["max_cse"],analysisData["max_ece"],analysisData["max_mech"],analysisData["max_elec"],analysisData["max_mme"],analysisData["max_civil"],analysisData["max_plan"],analysisData["max_arch"]];

  return (
    <div>
      <h1>Hi</h1>
      <div>
      {numbers.map((number, index) => (
        <p key={index}>{number}</p>
      ))}
    </div>
{/*   
      <pre>{(analysisData["high_pac"])}</pre>
      <pre>Data : {JSON.stringify(analysisData, null, 2)}</pre> */}
    </div>
  );
}

export default Comment;