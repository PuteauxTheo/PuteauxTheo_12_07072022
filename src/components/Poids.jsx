import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function Poids() {
    return (
    <div className='poids-chart'>
      <h2 className='poids-chart-title'>Activité quotidienne</h2>
      <BarChart width={800} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
        <CartesianGrid vertical={false} strokeDasharray={3}/>
        <YAxis orientation='right' axisLine={false} tickLine={false}/>
        <XAxis dataKey="name" axisLine={false} tickLine={false}/>
        <Tooltip />
        <Legend verticalAlign='top' align='right' height={50}/>
        <Bar dataKey="pv" fill="#ff0000" barSize={5}/>
        <Bar dataKey="uv" fill="#020203" barSize={5}/>
      </BarChart>
    </div>
        
    )
}

export default Poids