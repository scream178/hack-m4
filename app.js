function generateResume() {
    var form = document.getElementById('resumeForm');
    // Collect form data
    var formData = new FormData(form);
    // Extract values
    var name = formData.get('name');
    var email = formData.get('email');
    var education = formData.get('education');
    var experience = formData.get('experience');
    var skills = formData.get('skills');
    // Check if any field is empty
    if (!name || !email || !education || !experience || !skills) {
        alert('Please fill out all the fields.');
        return;
    }
    // Create resume content with editable fields and toggle button
    var resumeContent = "\n        <div class=\"resume-content\">\n            <h2 contenteditable=\"true\">".concat(name, "</h2>\n            <p>Email: <a href=\"mailto:").concat(email, "\" contenteditable=\"true\">").concat(email, "</a></p>\n            <h3 contenteditable=\"true\">Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3 contenteditable=\"true\">Work Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            <h3 contenteditable=\"true\">Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        </div>\n        <button id=\"editButton\" onclick=\"toggleEdit()\">Edit</button>\n    ");
    // Display resume
    var resumeDiv = document.getElementById('resume');
    resumeDiv.innerHTML = resumeContent;
}
function toggleEdit() {
    var button = document.getElementById('editButton');
    if (button.innerText === 'Edit') {
        button.innerText = 'Update';
        makeFieldsEditable(true);
    }
    else {
        button.innerText = 'Edit';
        makeFieldsEditable(false);
        // Show alert and redirect to index.html
        alert('Resume updated successfully!');
        window.location.href = 'index.html'; // Adjust the path as needed
    }
}
function makeFieldsEditable(editable) {
    var fields = document.querySelectorAll('[contenteditable="true"]');
    fields.forEach(function (field) {
        field.setAttribute('contenteditable', editable.toString());
    });
}
