import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { showStats } from "../../features/allJobs/allJobs";
import { ChartsContainer, StatsContainer } from "../../components";


const Stats = () => {
    const {monthlyApplications} = useSelector(
        (store) => store.allJobs)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showStats());
    });

    return (
        <>
            <StatsContainer />
            {monthlyApplications.length > 0 && <ChartsContainer />}
        </>
    )
}

export default Stats;