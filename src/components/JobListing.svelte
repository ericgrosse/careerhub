<script>
  export let jobTitle;
  export let jobDescription;
  export let jobLocation;
  export let jobType;
  export let jobSalary;
</script>

<div class="job-listing">
  <h2>{jobTitle}</h2>
  <p>{jobDescription}</p>
  <ul>
    <li><strong>Location:</strong> {jobLocation}</li>
    <li><strong>Type:</strong> {jobType}</li>
    <li><strong>Salary:</strong> {jobSalary}</li>
  </ul>
</div>
