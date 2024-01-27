import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../components";
import FormRowSelect from "./formRowSelect";
import { handleChange, clearValues } from "../../features/job/jobSlice";


const AddJob = () => {
    const {
        isLoading, position, company, jobLocation, jobType, jobTypeOptions,
        status, statusOptions, isEditing, editJobId
    } = useSelector((store) => store.job);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!position || !company || !jobLocation) {
            toast.error('Please Fill Out All Fields');
            return;
        };
        
    };

    const handleJobInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({name, value}));
    }

    return (
        <Wrapper>
            <form className="form">
                <h3>{isEditing ? 'edit job' : 'add job'}</h3>
                
                <div className="form-center">
                    <FormRow 
                        type='text'
                        name='position'
                        value={position}
                        handleChange={handleJobInput}
                    />

                    <FormRow 
                        type='text'
                        name='company'
                        value={company}
                        handleChange={handleJobInput}
                    />

                    <FormRow 
                        type='text'
                        name='jobLocation'
                        labelText='job location'
                        value={jobLocation}
                        handleChange={handleJobInput}
                    />

                    {/* job status */}
                    <FormRowSelect 
                        name='status'
                        list={statusOptions}
                        value={status}
                        handleChange={handleJobInput}
                    />

                    {/* job type */}
                    <FormRowSelect 
                        name='jobType'
                        labelText='job type'
                        list={jobTypeOptions}
                        value={jobType}
                        handleChange={handleJobInput}
                    />

                    {/* btn container */}

                    <div className="btn-container">
                        <button
                            type="button"
                            className="btn btn-block clear-btn"
                            onClick={() => dispatch(clearValues())}
                        >
                            clear
                        </button>
                        <button
                            type="submit"
                            className="btn btn-block submit-btn"
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            submit
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    )
}

export default AddJob;