'use strict';

const router = require('express').Router();

const { service:serviceModel } = require(__BASE + 'models/');

router.get('/service', async (request, response) => {
  const result = await serviceModel.findAndCountAll();
  response.send(result);
});

router.get('/service/:id', async (request, response) => {
  const service = await serviceModel.findById(request.params.id);
  response.send(service);
});

router.post('/service', async (request, response) => {
  const newService = serviceModel.create(request.body);
  response.send(newService);
});

router.delete('/service/:id', async (request, response) => {
  const service = await serviceModel.findById(request.params.id);
  response.send(service.destroy());
});

module.exports = router;
