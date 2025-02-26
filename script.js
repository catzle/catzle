document.getElementById("submissionForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const textValue = document.getElementById("text").value;
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyJKL4BmkQROPegDcmihBUmV9dRFPODqLZIhx4FU3W_fUs-_zBYIfL-UqIJqyftqaxqfA/exec";

  if (textValue.trim() !== "") {
    fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({ text: textValue }),
      headers: { "Content-Type": "application/json" }
    })
    .then(() => {
      document.getElementById("submittedText").innerHTML = 
        `<strong>Submitted Text:</strong> ${textValue}`;
      document.getElementById("message").textContent = "Submission successful!";
      document.getElementById("text").value = "";
      document.getElementById("writeAgain").classList.remove("hidden");
    })
    .catch(() => {
      document.getElementById("message").textContent = "Error submitting!";
    });
  }
});
