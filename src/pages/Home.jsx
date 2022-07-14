import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hello from '../components/Hello.jsx'
import KPI from '../components/KPI.jsx'
import Menu from '../components/Menu.jsx'
import Objectifs from '../components/Objectif.jsx'
import PersonnalStat from '../components/PersonnalStat.jsx'
import Poids from '../components/Poids.jsx'
import RadarPerfomance from '../components/Radar.jsx'
import getData from '../service/serviceMock.js'
function Home() {

    let {id} = useParams();
    const [userMainData, setUserMainData] = useState()

    useEffect(() => {
        getData(id)
            .then(data => setUserMainData(data))
            .catch( err => console.log(" Erreur survenue lors de récupération des données ", err))
    }, [id]);
    
    return (
        <div>
            <Menu/>
            <Hello /*name={userMainData.data.userInfos.firstName}*//>
            <div className='main-content'>
                <div className='container-chart'>
                    <Poids/>
                    <div className='content-chart-performance'>
                        <Objectifs/>
                        <RadarPerfomance/>
                        <KPI/>
                    </div>                    
                </div>
                <div className='container-personnalStat'>
                    <PersonnalStat/>
                </div>
            </div>
        </div>
    )
}

export default Home