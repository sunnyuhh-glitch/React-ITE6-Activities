function StudentCard({ name, subject, grade }) {
  let status = "";
  let statusClass = "";

  if (grade >= 98 && grade <= 100) {
    status = "Congratiolations - With Highest Honors!";
    statusClass = "excellent";
  } else if (grade >= 95 && grade < 98) {
    status = "Congratiolations - With High Honors!";
    statusClass = "passed";
  } else if (grade >= 90 && grade < 95) {
    status = "Congratiolations - With Honors!";
    statusClass = "passed";
  } else if (grade >=80 && grade <90) {
    status = "Congratiolations - Good Job!";
    statusClass = "passed";
  } else if (grade >= 76 && grade < 80) {
    status = "Congratiolations - Passed";
    statusClass = "passed";
  } else {
    status = "Failed";
    statusClass = "failed";
  }

  return (
    <div className={`student-card ${statusClass}`}>
      <h2>{name}</h2>
      <p>Subject: {subject}</p>
      <p>Grade: {grade}</p>
      <h3>{status}</h3>
    </div>
  );
}

export default StudentCard;