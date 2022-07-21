import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function Activity( {dataActivity} ) {


    return (
    <div className='poids-chart'>
      <h2 className='poids-chart-title'>Activité quotidienne</h2>
      <BarChart width={800} height={300} data={dataActivity} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
        <CartesianGrid vertical={false} height={1} strokeDasharray={3}/>
        <XAxis dataKey="day" axisLine={false} tickLine={false}/>
        <YAxis dataKey="calories" yAxisId='left' orientation='left' hide={true} domain={[0,'auto']}/>
        <YAxis dataKey="kilogram" yAxisId='right' orientation='right' axisLine={false} tickLine={false} width={45} tickCount={3} type='number' domain={['dataMin -1', 'dataMax'+1]}/>
        <Tooltip />
        <Legend verticalAlign='top' align='right' height={50}/>
        <Bar name='Poids (kg)' dataKey='kilogram' yAxisId='right'fill="#ff0000" barSize={5}/>
        <Bar name='Calories brûlées (kCal)' dataKey='calories' yAxisId='left' fill="#020203" barSize={5}/>
      </BarChart>
    </div>
        
    )
}

export default Activity