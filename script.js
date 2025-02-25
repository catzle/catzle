document.getElementById("submissionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let textValue = document.getElementById("text").value;
  let messagePara = document.getElementById("message");
  let submittedTextDiv = document.getElementById("submittedText");
  let writeAgainBtn = document.getElementById("writeAgain");

  if (textValue.trim() === "") {
    messagePara.textContent = "Please enter some text.";
    return;
  }

  let url = "https://script.google.com/macros/s/AKfycbxS-12yflZFH1APVwWrhlKsu_TWQE9tcwry_uvPtpA512ou3UJiIKSz2JsmuDZ4EBE_/exec"; // Replace this with your actual Web App URL

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ text: textValue }),
  })
  .then(response => response.text())
  .then(data => {
    if (data === "Success") {
      submittedTextDiv.innerHTML = "<strong>Submitted Text:</strong> " + textValue;
      submittedTextDiv.style.display = "block";
      messagePara.textContent = "Submission successful!";
      document.getElementById("text").value = "";
      writeAgainBtn.classList.remove("hidden");
    } else {
      messagePara.textContent = "Error submitting. Try again.";
    }
  })
  .catch(error => {
    messagePara.textContent = "Network error. Try again.";
  });
});

document.getElementById("writeAgain").addEventListener("click", function() {
  document.getElementById("submittedText").style.display = "none";
  document.getElementById("message").textContent = "";
  this.classList.add("hidden");
});
