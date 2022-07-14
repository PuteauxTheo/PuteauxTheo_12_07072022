import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

function KPI() {
    const data = [
        {
            uv: 12, fill: '#ff0000',
        },
        
        // {
        //     name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1',
        // },
        // {
        //     name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d',
        // },
        // {
        //     name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c',
        // },
        // {
        //     name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57',
        // },
        // {
        // 	name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658',
        // },
    ];

    return (
        <div className='kpi-chart'>
            <h3 className='title-chart'>Score</h3>
            <RadialBarChart width={260} height={260} cx={150} cy={150} innerRadius={100} radius={10} barSize={10} data={data}>
				<RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                <PolarAngleAxis type='number' domain={[0, 100]} tick={false} />
			</RadialBarChart>
            <div className='kpi-chart-text'>
                <p className='kpi-chart-text-percent'>12%</p>
                <p className='kpi-chart-text-name'>de votre objectif</p>
            </div>
        </div>
    )
}

export default KPI