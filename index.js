let srNo = 1;
let totalScore = 0;

function addStudent() {
  const studentName = document.getElementById("studentName").value;
  const fatherName = document.getElementById("fatherName").value;
  const score = parseInt(document.getElementById("score").value);

  if (studentName && fatherName && !isNaN(score)) {
    const row = document.createElement("tr");
    const srNoCell = document.createElement("td");
    const studentNameCell = document.createElement("td");
    const fatherNameCell = document.createElement("td");
    const scoreCell = document.createElement("td");

    srNoCell.textContent = srNo++;
    studentNameCell.textContent = studentName;
    fatherNameCell.textContent = fatherName;
    scoreCell.textContent = score;

    row.appendChild(srNoCell);
    row.appendChild(studentNameCell);
    row.appendChild(fatherNameCell);
    row.appendChild(scoreCell);

    document.getElementById("studentsBody").appendChild(row);

    totalScore += score;
    document.getElementById("totalScore").textContent = totalScore;

    // Reset input fields
    document.getElementById("studentName").value = "";
    document.getElementById("fatherName").value = "";
    document.getElementById("score").value = "";
  }
}
