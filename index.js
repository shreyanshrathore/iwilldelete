const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static('dist'))
app.use(bodyParser.json());

// Sample route
// app.get('/', (req, res) => {
//   res.send('Hello, this is your backend server!');
// });

// Define your routes and APIs here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
