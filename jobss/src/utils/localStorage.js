const {v4: uuidv4} = require('uuid');


export const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result) : null;
    return user;
};

const jobId = uuidv4()



export const addJobsToLocalStorage = (jobs) => {
    const jobData = JSON.stringify(jobs);
    localStorage.setItem(jobId, jobData);
};

export const removeJobsFromLocalStorage = () => {
    localStorage.removeItem('jobs');
};

export const getJobsFromLocalStorage = () => {
    const result = localStorage.getItem('jobs');
    const jobs = result ? JSON.parse(result) : null;
    return jobs;
};