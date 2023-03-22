<script>
  //import LoginButtons from '../components/LoginButtons.svelte';
  import JobListing from '../components/JobListing.svelte';
  import { jobListings } from '../data/jobListings.js';
</script>

<div class="container">
  <h1 style="margin-bottom:0;"><strong><i>CareerHub</i></strong></h1>
  <h1 style="margin-top:40px;">Job Listings</h1>

  <!--<LoginButtons />-->

  <div class="job-listings">
    {#each jobListings as jobListing}
      <JobListing
        jobTitle={jobListing.title}
        jobDescription={jobListing.description}
        jobLocation={jobListing.location}
        jobType={jobListing.type}
        jobSalary={jobListing.salary}
      />
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
  }

  h1 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .job-listings {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 40px;
  }
</style>
