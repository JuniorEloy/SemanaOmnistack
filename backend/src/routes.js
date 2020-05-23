const express = require('express');

const ongController = require('./controllers/ongController');
const incidentsControl = require('./controllers/incidentController');
const profileControl = require('./controllers/profileController');
const sessionControl = require('./controllers/sessionController');
const routes = express.Router();

routes.post('/sessions', sessionControl.create);

routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

routes.get('/profile', profileControl.index);

routes.post('/incidents', incidentsControl.create);
routes.get('/incidents', incidentsControl.index);
routes.delete('/incidents/:id', incidentsControl.delete);

module.exports =  routes ;