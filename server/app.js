import express from 'express';
import bodyParser from 'body-parser';

// Create an express application
const app = express();
// Use body parser middleware to parse JSON body data
app.use(bodyParser.json());

// Create an array of job listings
let jobListings = [
  {
    id: 1,
    title: 'Front-end Developer',
    description: 'We are looking for a talented Front-end Developer to join our growing team.',
    location: 'Austin',
    type: 'Full-time',
    salary: '$90,000 - $110,000 per year',
  },
  {
    id: 2,
    title: 'Back-end Developer',
    description: 'We are looking for a talented Back-end Developer to join our growing team.',
    location: 'San Antonio',
    type: 'Full-time',
    salary: '$110,000 - $130,000 per year',
  },
];

// Route to get all job listings
app.get('/jobListings', (req, res) => {
  res.json(jobListings);
});

// Route to get a specific job listing by id
app.get('/jobListings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const jobListing = jobListings.find(jobListing => jobListing.id === id);
  if (jobListing) {
    res.json(jobListing);
  } else {
    res.status(404).send('Job listing not found');
  }
});

// Route to create a new job listing
app.post('/jobListings', (req, res) => {
  const jobListing = req.body;
  jobListing.id = jobListings.length + 1;
  jobListings.push(jobListing);
  res.json(jobListing);
});

// Route to update an existing job listing
app.put('/jobListings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedJobListing = req.body;
  const index = jobListings.findIndex(jobListing => jobListing.id === id);
  if (index !== -1) {
    jobListings[index] = { ...jobListings[index], ...updatedJobListing };
    res.json(jobListings[index]);
  } else {
    res.status(404).send('Job listing not found');
  }
});

// Route to delete a job listing
app.delete('/jobListings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  jobListings = jobListings.filter(jobListing => jobListing.id !== id);
  res.status(204).send();
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
