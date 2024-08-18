const express = require('express');
const app = express();
const port = 3001;
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World from server!');
});

app.get('/users-list/:id', (req, res) => {
  const id = req.params.id;
  // Get the user data from database
  const user = {
    id: 1,
    name: 'John Doe',
  };
  // Send the response to the client
  res.send({
    user: user,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});