import { useDispatch } from 'react-redux';
import {FaLocationArrow, FaBriefcase, FaCalendarAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import moment from 'moment';

import Wrapper from '../assets/wrappers/Job';
import JobInfo from './jobInfo';
import { deleteJob } from '../features/job/jobSlice';

const Job = (props) => {
    const {
        _id, position, company, jobLocation, jobType, createdAt, status
    } = props;

    const date = moment(createdAt).format('MMMM Do YYYY h:mm a');
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(deleteJob(_id));
    }

    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{company.charAt(0)}</div>
                <div className='info'>
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
            <div className='content'>
                <div className='content-center'>
                    <JobInfo icon={<FaLocationArrow />} text={jobLocation}/>
                    <JobInfo icon={<FaCalendarAlt />} text={date}/>
                    <JobInfo icon={<FaBriefcase />} text={jobType}/>
                    <div className={`status ${status}`}>{status}</div>
                </div>
                <footer>
                    <div className='actions'>
                        <Link 
                            to='/add-job'
                            className='btn edit-btn'
                            onClick={() => {
                                console.log('edit job')
                            }}
                        >Edit</Link>
                        <button
                            type='button'
                            className='btn delete-btn'
                            onClick={deleteHandler}
                        > Delete </button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    )
};

export default Job;