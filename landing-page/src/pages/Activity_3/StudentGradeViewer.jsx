import { useState, useEffect } from "react";
import StudentCard from "../../components/StudentCard";
import "./StudentGradeViewer.css";

function StudentGradeViewer() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

useEffect(() => {
  fetch("/students.json")
    .then((response) => response.json())
    .then((data) => {
      setStudents(data);
    })
    .catch((error) => {
      console.log("Error loading JSON:", error);
    });
}, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="viewer-container">
      <h1>Student Grade Record Viewer</h1>
      <p className="subtitle">
        Displaying student records from a JSON file using React Hooks.
      </p>

      <input
        className="search-box"
        type="text"
        placeholder="Search student name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cards-container">
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            subject={student.subject}
            grade={student.grade}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentGradeViewer;