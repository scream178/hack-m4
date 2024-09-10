function generateResume() {
  var form = document.getElementById("resumeForm");
  // Collect form data
  var formData = new FormData(form);
  // Extract values
  var name = formData.get("name");
  var email = formData.get("email");
  var education = formData.get("education");
  var experience = formData.get("experience");
  var skills = formData.get("skills");
  // Check if any field is empty
  if (!name || !email || !education || !experience || !skills) {
    alert("Please fill out all the fields.");
    return;
  }
  // Create resume content
  var resumeData = {
    name: name,
    email: email,
    education: education,
    experience: experience,
    skills: skills,
  };
  var resumeContent = "\n        <h1>"
    .concat(resumeData.name, '</h1>\n        <h3>Email: <a href="mailto:')
    .concat(resumeData.email, '">')
    .concat(
      resumeData.email,
      "</a></h3>\n        <h3>Education</h3>\n        <p>"
    )
    .concat(
      resumeData.education,
      "</p>\n        <h3>Work Experience</h3>\n        <p>"
    )
    .concat(resumeData.experience, "</p>\n        <h3>Skills</h3>\n        <p>")
    .concat(resumeData.skills, "</p>\n    ");
  // Display resume
  var resumeDiv = document.getElementById("resume");
  resumeDiv.innerHTML = resumeContent;
}
