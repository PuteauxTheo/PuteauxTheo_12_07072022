import { LineChart, Line, XAxis } from "recharts";



function AverageSession( { dataAverageSession }) {

  console.log(dataAverageSession)

  return (
    <div className="objectif-chart">
      <h2 className="objectif-chart-title">Durée moyenne des sessions</h2>
      <LineChart width={260} height={260} data={dataAverageSession} margin={{ top:100, left:10, right:10, bottom:10}}>          
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={1} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={5} stroke="#fff"/>
      </LineChart>
    </div>
      
  )
}

export default AverageSession