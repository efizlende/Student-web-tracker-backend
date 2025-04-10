// controllers/jobController.js
const jobService = require('../service/jobService');

// Adicionar candidatura
exports.addJob = async (req, res) => {
  try {
    const newJob = await jobService.addJob(req.body);
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};







// Listar todas
exports.getJobs = async (req, res) => {
  try {
    const jobs = await jobService.getJobs();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};








// Atualizar status
exports.updateStatus = async (req, res) => {
  try {
    const updatedJob = await jobService.updateStatus(req.params.id, req.body.status);
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};








// Deletar candidatura
exports.deleteJob = async (req, res) => {
  try {
    await jobService.deleteJob(req.params.id);
    res.json({ message: 'Deletado com sucesso!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
