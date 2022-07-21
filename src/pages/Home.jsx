import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getData from '../service/serviceMock.js'
import Hello from '../components/Hello.jsx'
import KPI from '../components/KPI.jsx'
import Menu from '../components/Menu.jsx'
import AverageSession from '../components/AverageSession.jsx'
import PersonnalStat from '../components/PersonnalStat.jsx'
import Activity from '../components/Activity.jsx'
import Perfomance from '../components/Performance.jsx'
function Home() {

    let {id} = useParams ();
    const [userMainData, setUserMainData] = useState()
    const [userDataActivity, setUserDataActivity] = useState()
    const [userDataAverageSession, setUserDataAverageSession] = useState()
    const [userDataPerformance, setUserDataPerformance] = useState()


    useEffect(() => {
        getData(id)
            .then(data => setUserMainData(data))
            .catch( err => console.log(" Erreur survenue lors de récupération des données ", err))
        getData(id, 'activity')
            .then(data => setUserDataActivity(data))
            .catch( err => console.log(" Erreur survenue lors de la recuperation des données Activity", err))
        getData(id, 'averagesession')
            .then(data => setUserDataAverageSession(data))
            .catch( err => console.log(" Erreur survenu lors de la récuperation des données AverageSession", err))
        getData(id, 'performance')
            .then(data => setUserDataPerformance(data))
            .catch( err => console.log(" Erreur survenu lors de la recuperation des données Performance", err))
    }, [id]);
    
    return (
        <div>
            <Menu/>
            <Hello name={userMainData.data.userInfos.firstName}/>
            <div className='main-content'>
                <div className='container-chart'>
                    <Activity dataActivity={userDataActivity.data.sessions}/>
                    <div className='content-chart-performance'>
                        <AverageSession dataAverageSession={userDataAverageSession.data.sessions}/>
                        <Perfomance dataPerformance={userDataPerformance.data.data}/>
                        <KPI dataKPI={userMainData.data}/>
                    </div>                    
                </div>
                <div className='container-personnalStat'>
                    <PersonnalStat dataPersonnal={userMainData.data.keyData}/>
                </div>
            </div>
        </div>
    )
}

export default Home