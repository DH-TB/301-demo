import express from 'express';
import homework from '../../controller/homeworkController';
import paper from '../../controller/paperController';

const router = express.Router();

router.get('/api/homeworkDefinitions',homework.getHomework);
router.post('/api/paper',paper.addPaper);

router.get('/api/papers',paper.getAll);
router.get('/api/papers/:id',paper.getOne);
router.put('/api/papers/:id',paper.updatePaper);
router.delete('/api/papers/:id',paper.deletePaper);

module.exports = router;



