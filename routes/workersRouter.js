var express = require('express'),
    workerModel = require('../model/workerModel'),
    router = express.Router();

router.get('/', workerModel.getAll.bind(workerModel));

router.post('/', workerModel.create.bind(workerModel));

router.put('/:id', workerModel.update.bind(workerModel));

router.delete('/:id', workerModel.delete.bind(workerModel));

module.exports = router;