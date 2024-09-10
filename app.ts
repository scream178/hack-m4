interface ResumeData {
    name: string;
    email: string;
    education: string;
    experience: string;
    skills: string;
}

function generateResume(): void {
    const form = document.getElementById('resumeForm') as HTMLFormElement;

    // Collect form data
    const formData = new FormData(form);

    // Extract values
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const education = formData.get('education') as string;
    const experience = formData.get('experience') as string;
    const skills = formData.get('skills') as string;

    // Check if any field is empty
    if (!name || !email || !education || !experience || !skills) {
        alert('Please fill out all the fields.');
        return;
    }

    // Create resume content with editable fields and toggle button
    const resumeContent = `
        <div class="resume-content">
            <h2 contenteditable="true">${name}</h2>
            <p>Email: <a href="mailto:${email}" contenteditable="true">${email}</a></p>
            <h3 contenteditable="true">Education</h3>
            <p contenteditable="true">${education}</p>
            <h3 contenteditable="true">Work Experience</h3>
            <p contenteditable="true">${experience}</p>
            <h3 contenteditable="true">Skills</h3>
            <p contenteditable="true">${skills}</p>
        </div>
        <button id="editButton" onclick="toggleEdit()">Edit</button>
    `;

    // Display resume
    const resumeDiv = document.getElementById('resume') as HTMLDivElement;
    resumeDiv.innerHTML = resumeContent;
}

function toggleEdit(): void {
    const button = document.getElementById('editButton') as HTMLButtonElement;

    if (button.innerText === 'Edit') {
        button.innerText = 'Update';
        makeFieldsEditable(true);
    } else {
        button.innerText = 'Edit';
        makeFieldsEditable(false);

        // Show alert and redirect to index.html
        alert('Resume updated successfully!');
        window.location.href = 'index.html'; // Adjust the path as needed
    }
}

function makeFieldsEditable(editable: boolean): void {
    const fields = document.querySelectorAll('[contenteditable="true"]');
    fields.forEach(field => {
        field.setAttribute('contenteditable', editable.toString());
    });
}
