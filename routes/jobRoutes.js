const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/add-job', jobController.addJob);
router.get('/find-job', jobController.getJobs);
router.patch('/update-status/:id', jobController.updateStatus);
router.delete('/delete-job/:id', jobController.deleteJob);

module.exports = router;
