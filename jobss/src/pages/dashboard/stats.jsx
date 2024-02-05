import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import Wrapper from "../../assets/wrappers/StatsContainer";
import { showStats } from "../../features/allJobs/allJobs";


const Stats = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showStats());
    },[]);

    return (
        <Wrapper>Stats</Wrapper>
    )
}

export default Stats;