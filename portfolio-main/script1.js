const button = document.getElementById("changeColorBtn");

button.addEventListener("click", function() {
    // Array of nice gradient backgrounds
    const gradients = [
        "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
        "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
        "linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)",
        "linear-gradient(120deg, #f9d423 0%, #ff4e50 100%)",
        "linear-gradient(120deg, #43cea2 0%, #185a9d 100%)",
        "linear-gradient(120deg, #ffecd2 0%, #fcb69f 100%)"
    ];
    
    function sendEmail() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const recipient = "a03480748044@gmail.com"; // Your email

      const subject = encodeURIComponent("Portfolio Contact Form: " + name);
      const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }
    // Pick a random gradient
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    // Change the body background
    document.body.style.background = randomGradient;
});