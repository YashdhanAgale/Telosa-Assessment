// login form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
      }

      // login success
      alert("Login successful!");
      window.location.href = "dashboard.html";
    });
  }
});
