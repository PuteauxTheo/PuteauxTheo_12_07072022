import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

   

function Perfomance( { dataPerformance } ) {

  const categoriesPerformance = (kind) =>{
    switch (kind) {
      case 1: return 'cardio';
      case 2: return 'energy';
      case 3: return 'endurance';
      case 4: return 'strength';
      case 5: return 'speed';
      case 6: return 'intensity';
      default: return null;
    }
  } 

  console.log(dataPerformance)

  return (
    <div className="radar-chart">
      <RadarChart cx={125} cy={100} outerRadius={70} width={260} height={260} data={dataPerformance} >
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey='kind' tickFormatter={categoriesPerformance}stroke="#fff" tickLine={false}/>
          <Radar dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6}/>
      </RadarChart>
    </div>        
  )
}

export default Perfomance