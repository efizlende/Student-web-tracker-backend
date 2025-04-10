const jobService = require('../service/jobService');

// Adicionar candidatura
const addJob = async (req, res) => {
  try {
    const newJob = await jobService.addJob(req.body);
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};







// Listar todas
const getJobs = async (req, res) => {
  try {
    const jobs = await jobService.getJobs();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};








// Atualizar status
const updateStatus = async (req, res) => {
  try {
    const updatedJob = await jobService.updateStatus(req.params.id, req.body.status);
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};







// Deletar candidatura
const deleteJob = async (req, res) => {
  try {
    await jobService.deleteJob(req.params.id);
    res.json({ message: 'Deletado com sucesso!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};







// Filtrar empregos
const filterJobs = async (req, res) => {
  try {
    const { status, startDate, endDate } = req.query;
    const jobs = await jobService.getFilteredJobs(status, startDate, endDate);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar empregos filtrados." });
  }
};


module.exports = {
  addJob,
  getJobs,
  updateStatus,
  deleteJob,
  filterJobs
};
