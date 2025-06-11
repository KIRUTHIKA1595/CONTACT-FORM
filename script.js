function submitForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;

    if (name && age && email && contact) {
        localStorage.setItem("userData", JSON.stringify({ name, age, email, contact }));
        alert(Thank you, ${name}! Your details have been submitted.);
    } else {
        alert("Please fill in all fields.");
    }
}

function viewDetails() {
    let data = localStorage.getItem("userData");
    if (data) {
        let user = JSON.parse(data);
        document.getElementById("details").innerHTML = `
            <strong>Name:</strong> ${user.name} <br>
            <strong>Age:</strong> ${user.age} <br>
            <strong>Email:</strong> ${user.email} <br>
            <strong>Contact:</strong> ${user.contact}
        `;
        document.getElementById("details").style.display = "block";
    } else {
        alert("No details found. Please submit the form first.");
    }
}
