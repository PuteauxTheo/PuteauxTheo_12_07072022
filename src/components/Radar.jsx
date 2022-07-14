import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

const data = [
    {
      subject: "Math",
      A: 1,
    },
    {
      subject: "Chinese",
      A: 98,
    },
    {
      subject: "English",
      A: 86,
    },
    {
      subject: "Geography",
      A: 99,
    },
    {
      subject: "Physics",
      A: 85,
    },
    {
      subject: "History",
      A: 65,
    }
  ];

function RadarPerfomance() {


    return (
      <div className="radar-chart">
        <RadarChart cx={125} cy={100} outerRadius={70} width={260} height={260} data={data} >
            <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="subject" stroke="#fff" tickLine={false}/>
            <Radar dataKey="A" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6}/>
        </RadarChart>
      </div>        
    )
}

export default RadarPerfomance