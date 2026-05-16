import { useState, useEffect } from "react";
import "./GradeCalculator.css";

const GradeCalculator = () => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [result, setResult] = useState("");
  const [statusClass, setStatusClass] = useState("");

  useEffect(() =>{
    if (grade === ""){
      setResult("");
    } else if (grade >= 98 && grade <= 100){
      setResult("Congratiolations - With Highest Honors!");
    } else if (grade >= 95 && grade < 98){
      setResult("Congratiolations - With High Honors!"); 
    } else if (grade >= 90 && grade < 95){
      setResult("Congratiolations - With Honors!");
    } else if(grade >=80 && grade <90){
       setResult("Congratiolations - Good Job!");
    } else if (grade >= 76 && grade < 80){
      setResult("Congratiolations - Passed");
    }else if (grade < 76){
      setResult("Failed")
    }else{
      setResult("Invalid grade, mamuroko");
    }
  }, [grade]);

  return (
    <div className="wrapper">
      <div className="card">
        <h1>🎓 Grade Evaluator</h1>
        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <div className={`result-box ${statusClass}`}>
          <h2>👤 {name || "No name yet"}</h2>
          <h2>📊 {grade || "No grade yet"}</h2>
          <h2>📌 {result || "Waiting for input"}</h2>
        </div>
      </div>
    </div>
  );
};

export default GradeCalculator;