import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

   

function Perfomance( { dataPerformance } ) {

  const categoriesPerformance = (kind) =>{
    switch (kind) {
      case 1: return 'Cardio';
      case 2: return 'Energie';
      case 3: return 'Endurance';
      case 4: return 'Force';
      case 5: return 'Vitesse';
      case 6: return 'Intensité';
      default: return null;
    }
  } 

  return (
    <div className="radar-chart">
      <RadarChart cx={125} cy={100} outerRadius={70} width={260} height={260} data={dataPerformance} >
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey='kind' tickFormatter={categoriesPerformance} fontFamily={'Roboto'} fontSize={12} stroke="#fff" tickLine={false}/>
          <Radar dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6}/>
      </RadarChart>
    </div>        
  )
}

export default Perfomance