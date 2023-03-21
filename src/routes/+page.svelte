<script>
  import JobListing from '../components/JobListing.svelte';
  import { jobListings } from '../data/jobListings.js';
</script>

<h1>Job Listings</h1>

{#each jobListings as jobListing}
  <JobListing
    jobTitle={jobListing.title}
    jobDescription={jobListing.description}
    jobLocation={jobListing.location}
    jobType={jobListing.type}
    jobSalary={jobListing.salary}
  />
{/each}
