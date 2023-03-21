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

<style>
  .job-listing {
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 400px;
    width: 100%;
    text-align: left;
  }

  h2 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 5px;
  }

  li strong {
    width: 80px;
    display: inline-block;
  }
</style>
