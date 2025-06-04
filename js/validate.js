function validateForm() {
  const email = document.getElementById("email").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const tags = document.getElementById("tags").value;
  const upload = document.getElementById("upload").files.length;

  
  if (email.length < 5 || !email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email.");
    return false;
  }


  if (title.trim() === "") {
    alert("Please enter a title.");
    return false;
  }


  if (description.trim().length < 10) {
    alert("Description must be at least 10 characters.");
    return false;
  }


  if (tags.trim() === "") {
    alert("Please enter at least one tag.");
    return false;
  }


  if (upload === 0) {
    alert("Please upload your artwork.");
    return false;
  }

  // Radio button validation
  const aiSelected = document.querySelector('input[name="ai"]:checked');
  if (!aiSelected) {
    alert("Please select whether your artwork is AI-generated.");
    return false;
  }

  // If all validations pass
  alert("Submission successful!");
  return true;
}
