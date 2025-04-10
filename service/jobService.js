// services/jobService.js
const jobRepository = require('../repository/jobRepository');

const addJob = async (jobData) => {
  try {
    const newJob = await jobRepository.createJob(jobData);
    return newJob;
  } catch (err) {
    throw new Error(err.message);
  }
};








const getJobs = async () => {
  try {
    const jobs = await jobRepository.getAllJobs();
    return jobs;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateStatus = async (jobId, status) => {
  try {
    const updatedJob = await jobRepository.updateJobStatus(jobId, status);
    return updatedJob;
  } catch (err) {
    throw new Error(err.message);
  }
};







const deleteJob = async (jobId) => {
  try {
    await jobRepository.deleteJobById(jobId);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  addJob,
  getJobs,
  updateStatus,
  deleteJob,
};
