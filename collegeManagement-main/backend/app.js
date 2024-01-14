const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://shreyaspatil:shreyas@lms.6ygfh9d.mongodb.net/?retryWrites=true&w=majority', {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //autoCreateIndexes: true 
 
});
const employee = require ("./route/employeeRoute");
app.use("/api",employee);

const admin = require("./route/adminRoute");
app.use("/api",admin);

const hod = require ("./route/hodRoute");
app.use("/api",hod);

const princi = require ("./route/princiRoute");
app.use("/api",princi);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(express.json());


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));