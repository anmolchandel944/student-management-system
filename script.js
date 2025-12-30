let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let marks = document.getElementById("marks").value;

    if(name === "" || roll === "") {
        alert("Fill required fields");
        return;
    }

    students.push({name, roll, course, marks});
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function displayStudents(data = students) {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    data.forEach((s, index) => {
        list.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.roll}</td>
            <td>${s.course}</td>
            <td>${s.marks}</td>
            <td><button onclick="deleteStudent(${index})">Delete</button></td>
        </tr>`;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function searchStudent() {
    let search = document.getElementById("search").value.toLowerCase();
    let filtered = students.filter(s => s.name.toLowerCase().includes(search));
    displayStudents(filtered);
}

displayStudents();
