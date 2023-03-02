const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors');

connectToMongo();
const app = express()
app.use(cors());
const port = 5000

app.use(express.json());

// Available routes
app.use('/api/contact', require('./routes/contact'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})