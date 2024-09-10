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

    // Create resume content
    const resumeData: ResumeData = {
        name: name,
        email: email,
        education: education,
        experience: experience,
        skills: skills
    };

    const resumeContent = `
        <h2>${resumeData.name}</h2>
        <p>Email: <a href="mailto:${resumeData.email}">${resumeData.email}</a></p>
        <h3>Education</h3>
        <p>${resumeData.education}</p>
        <h3>Work Experience</h3>
        <p>${resumeData.experience}</p>
        <h3>Skills</h3>
        <p>${resumeData.skills}</p>
    `;

    // Display resume
    const resumeDiv = document.getElementById('resume') as HTMLDivElement;
    resumeDiv.innerHTML = resumeContent;
}
