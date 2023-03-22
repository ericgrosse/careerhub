<div class="login-buttons">
  <div class="row">
    <button class="applicant-login">Login as Applicant</button>
    <button class="employer-login">Login as Employer</button>
  </div>
  <div class="row">
    <button class="applicant-signup">Signup as Applicant</button>
    <button class="employer-signup">Signup as Employer</button>
  </div>
</div>

<style>
  .login-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  button {
    width: 150px;
    margin: 3px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
  }

  .applicant-login {
    background-color: #007bff;
  }

  .applicant-signup {
    background-color: #0048ff
  }

  .employer-login {
    background-color: #007bff;
  }

  .employer-signup {
    background-color: #0048ff;
  }
</style>
