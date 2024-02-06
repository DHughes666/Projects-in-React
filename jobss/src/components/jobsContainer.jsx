import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import { getAllJobs } from "../features/allJobs/allJobs";
import Job from "./job";
import Wrapper from "../assets/wrappers/JobsContainer";
import Loading from "./Loading";
import PageBtnContainer from "./pageBtnContainer";

const JobsContainer = () => {
    const {jobs, isLoading, page, totalJobs, numOfPages} = 
        useSelector((store) => store.allJobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return (
            <Wrapper>
                <Loading center/>
            </Wrapper>
        );
    };

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        )
    }


    return (
        <Wrapper>
            <h5>
                {totalJobs} job{jobs.length > 1 && 's'} found
            </h5>
            <div className="jobs">
                {jobs.map((job) => {
                    return <Job key={job._id} {...job}/>;
                })}
            </div>
            {numOfPages > 1 && <PageBtnContainer />}
        </Wrapper>
    )

};

export default JobsContainer;