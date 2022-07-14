import { USER_MAIN_DATA , USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../dataMock/mock.js'

function getUserMainData(id){
    const data = USER_MAIN_DATA.find( value => value.id.toString() === id );
    const mainData = {data}
    return mainData;
}

function getUserActivity(id){
    const data = USER_ACTIVITY.find( value => value.id.toString() === id)
    const dataActivity = {data}
    return dataActivity;
}

function getUserAverageSessions(id){
    const data = USER_AVERAGE_SESSIONS.find( value => value.userId.toString() === id)
    const dataAverageSession = {data}
    return dataAverageSession;
}

function getUserPerformance(id){
    const data = USER_PERFORMANCE.find( value => value.userId.toString() === id)
    const dataPerfomance = {data};
    return dataPerfomance;
}

const getData = async (id, categorie) => {
    switch (categorie) {
        case 'activity': return getUserActivity(id);
        case 'averagesession': return getUserAverageSessions(id);
        case 'performance': return getUserPerformance(id);
        default: return getUserMainData(id);
    }
}

export default getData