/* Email Form Display*/

document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

  // Send form data to the backend (backend is running at localhost:5000)
  try {
    const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok) {
        alert("Message sent successfully!");
    } else {
        alert("Failed to send message. Please try again.");
    }
} catch (error) {
    console.error("Error sending message:", error);
    alert("An error occurred. Please try again later.");
}
});