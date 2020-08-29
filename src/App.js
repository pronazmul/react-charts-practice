import React from 'react';
import './App.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

function App() {
  const data = [
    {
      name: 'Nazmul', highest: 4000, lawest: 2400, 
    },
    {
      name: 'Sania', highest: 3000, lawest: 1398, 
    },
    {
      name: 'Billal', highest: 2000, lawest: 9800, 
    },
    {
      name: 'Rashedul', highest: 2780, lawest: 3908, 
    },
    {
      name: 'Hayder', highest: 1890, lawest: 4800, 
    },
    {
      name: 'Shariful', highest: 2390, lawest: 3800, 
    },
    {
      name: 'Babu', highest: 3490, lawest: 4300, 
    },
  ];
  
  return (
          <div className='container-fluid'>
            <h1 className='text-center jumbotron'>Recharts Practice Project</h1>
            <div className="row">
                <div className="col-md-6 mx-auto my-4">
                  <h2 className='text-center'>Simple Line Chart Example</h2><hr></hr>
                <LineChart
                          className='d-block mx-auto'
                          width={500}
                          height={300}
                          data={data}
                          margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="lawest" stroke="#8884d8" activeDot={{ r: 10 }} />
                          <Line type="monotone" dataKey="highest" stroke="#82ca9d" />
                  </LineChart>
                </div>
            </div>
          </div>
        )
}

export default App;
