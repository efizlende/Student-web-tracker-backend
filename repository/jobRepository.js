// repositories/jobRepository.js
const Job = require('../models/job');

const createJob = async (jobData) => {
  try {
    const newJob = await Job.create(jobData);
    return newJob;
  } catch (err) {
    throw new Error(err.message);
  }
};






const getAllJobs = async () => {
  try {
    const jobs = await Job.find();
    return jobs;
  } catch (err) {
    throw new Error(err.message);
  }
};







const updateJobStatus = async (jobId, status) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(jobId, { status }, { new: true });
    return updatedJob;
  } catch (err) {
    throw new Error(err.message);
  }
};






const deleteJobById = async (jobId) => {
  try {
    await Job.findByIdAndDelete(jobId);
  } catch (err) {
    throw new Error(err.message);
  }
};






const getFilteredJobs = async (status, startDate, endDate) => {
  let filter = {};

  if (status) {
    filter.status = status; 
  }

  if (startDate && endDate) {
    filter.appliedDate = {
      $gte: new Date(startDate), 
      $lte: new Date(endDate)    
    };
  }

  return await Job.find(filter).sort({ appliedDate: -1 }); 
};



module.exports = {
  createJob,
  getAllJobs,
  updateJobStatus,
  deleteJobById,
  getFilteredJobs
};


