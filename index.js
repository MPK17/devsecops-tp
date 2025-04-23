const express = require('express');
const app = express();
const winston = require('winston');

const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});

app.get('/', (req, res) => {
  logger.info("Root hit");
  res.send("Hello DevSecOps!");
});

app.get('/error', (req, res) => {
  logger.error("Erreur 500 simulée");
  res.status(500).send("Erreur interne");
});

app.listen(3000, () => {
  logger.info("App running on port 3000");
});
