import { LineChart, Line, XAxis } from "recharts";

const data = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function Objectifs() {
    return (
      <div className="objectif-chart">
        <h2 className="objectif-chart-title">Durée moyenne des sessions</h2>
        <LineChart width={260} height={260} data={data} margin={{ top:100, left:10, right:10, bottom:10}}>          
            <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={1} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={0} stroke="#fff"/>
        </LineChart>
      </div>
        
    )
}

export default Objectifs