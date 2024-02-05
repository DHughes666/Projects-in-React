import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import Wrapper from "../../assets/wrappers/StatsContainer";
import { showStats } from "../../features/allJobs/allJobs";
import { Loading, ChartsContainer, StatsContainer } from "../../components";


const Stats = () => {
    const {isLoading, monthlyApplications} = useSelector(
        (store) => store.allJobs)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showStats());
    },[]);

    return (
        <>
            <StatsContainer />
            {monthlyApplications.length > 0 && <ChartsContainer />}
        </>
    )
}

export default Stats;