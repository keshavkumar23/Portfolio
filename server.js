// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(express.static(__dirname));
// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017", {dbName: "PortFolioEnquiry", useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Create a schema for the form data
const inquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

//creating model for our database
const Inquiry = mongoose.model('Inquiry', inquirySchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-inquiry', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Save the form data to MongoDB
    await Inquiry.create({
        name,
        email,
        message,
    })
    console.log("Your query has been submitted.");
    res.redirect("/");
  } catch (error) {
    res.status(500).send('Error submitting inquiry.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
