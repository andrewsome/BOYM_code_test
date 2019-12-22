const express = require('express'),
 cors = require('cors'),
 PORT = process.env.PORT || 4000,
 routes = require('./routes/router'),
 app = express();
 
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

app.use((req, res) => {
  res.status(404).send({ url:req.originalUrl + ' not found'});
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});