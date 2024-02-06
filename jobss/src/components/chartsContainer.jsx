import { useState } from "react";
import { useSelector } from "react-redux";

import BarChartComp from "./barChart";
import AreaChartComp from "./areaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
    const [barChart, setBarChart] = useState(true);
    const {monthlyApplications: data} = useSelector(
        (store) => store.allJobs
    );

    const chartHandler = () => {
        setBarChart(!barChart)
    }

    return (
        <Wrapper>
            <h4>Monthly Application</h4>
            <button type="button" onClick={chartHandler}>
                {barChart ? 'Area Chart' : 'Bar Chart'}
            </button>
            {barChart ? <BarChartComp data={data}/> : <AreaChartComp data={data}/>}
        </Wrapper>
    )
};

export default ChartsContainer;