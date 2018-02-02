import express from 'express';
const router = express.Router();
import homework from '../../controller/homeworkController';
import paper from '../../controller/paperController';

router.get('/api/homeworkDefinitions',homework.get());

router.get('/api/papers',paper.getAll());
router.get('/api/papers/:id',paper.get());
router.post('/api/papers/:id',paper.post());
router.put('/api/papers/:id',paper.put());
router.delete('/api/papers/:id',paper.del());

module.exports = router;



