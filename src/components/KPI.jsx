import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

function KPI( {dataKPI} ) {
    
    const percentScore = dataKPI.todayScore * 100 ;
    console.log(dataKPI)
    return (
        <div className='kpi-chart'>
            <h3 className='title-chart'>Score</h3>
            <RadialBarChart width={260} height={260} cx={150} cy={150} innerRadius={100} radius={10} barSize={10} data={[dataKPI]}>
				<RadialBar minAngle={15} fill='#ff0000' background cornerRadius={25} dataKey='todayScore' />
                <PolarAngleAxis type='number' domain={[0, 1]} tick={false} />
			</RadialBarChart>
            <div className='kpi-chart-text'>
                <p className='kpi-chart-text-percent'>{percentScore}%</p>
                <p className='kpi-chart-text-name'>de votre objectif</p>
            </div>
        </div>
    )
}

export default KPI