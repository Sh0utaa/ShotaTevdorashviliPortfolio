document.querySelector('a[href="#four"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#four').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelectorAll('a[href="#three"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#three').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const mail = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseText = document.getElementById("formResponse");

  const data = {
    name: name,
    mail: mail,
    subject: "Portfolio",
    body: message
  };

  try {
    const response = await fetch("https://dlt-api.shotatevdorashvili.com/api/email/send-to-shota", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      responseText.style.color = "green";
      responseText.textContent = "Your message has been sent!";
      // Optionally clear the form
      document.getElementById("message").value = "";
    } else {
      const err = await response.text();
      responseText.style.color = "red";
      responseText.textContent = `Error: ${err}`;
    }
  } catch (error) {
    responseText.style.color = "red";
    responseText.textContent = "Failed to send message. Please try again later.";
    console.error("Email sending failed:", error);
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
  const mailElement = document.getElementById("shotatevdorashvilimail");
  mailElement.textContent = 'shota@shotatevdorashvili.com';
})