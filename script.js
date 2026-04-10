function generateLetter() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;
  const skills = document.getElementById("skills").value;

  const output = document.getElementById("output");

  output.innerText = "Generating... ⏳";

  setTimeout(() => {
    const letter = `
Dear Hiring Manager at ${company},

I am ${name}, and I am excited to apply for the position of ${role}.

With my skills in ${skills}, I am confident in my ability to contribute effectively to your team. I am passionate about learning new technologies and delivering high-quality work.

I would welcome the opportunity to contribute to ${company} and grow professionally.

Thank you for considering my application.

Sincerely,
${name}
    `;

    output.innerText = letter;
  }, 1500);
}

function copyText() {
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}