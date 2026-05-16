import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MCO_LandingPage.css";

function MCO_LandingPage() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const members = [
    {
      name: "Sunny Corpin",
      role: "Developer",
      image: "/images/Corpin.jpg",
    },
    {
      name: "Rodrigo Capongcol",
      role: "UI Designer",
      image: "/images/Capongcol.jpg",
    },
    {
      name: "Johnloyd Derio",
      role: "Researcher",
      image: "/images/Derio.jpg",
    },
    {
      name: "Sean Casiracan",
      role: "Presenter",
      image: "/images/Casiracan.jpg",
    },
  ];

  const activities = [
    {
      title: "Activity 1",
      name: "Group Landing Page",
      description: "Overview of our group and introduction of members.",
      path: "/activity1",
      icon: "👥",
    },
    {
      title: "Activity 2",
      name: "Student Grade Calculator",
      description: "Uses useState, useEffect, and if-else conditions.",
      path: "/activity2",
      icon: "🎓",
    },
    {
      title: "Activity 3",
      name: "Student Grade Record Viewer",
      description: "Displays student records from a JSON file using props and reusable components.",
      path: "/activity3",
      icon: "📁",
    },
    {
      title: "Activity 4",
      name: "Harry Potter API Viewer",
      description: "Displays API data using React hooks, loader cards, and reusable components.",
      path: "/activity4",
      icon: "⚡",
    },
  ];

  return (
    <div className="mco-page">
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="navbar">
        <div className="nav-logo">
          <img src="/images/school-logo.png" alt="School Logo" />
          <h2>MCO Portfolio</h2>
        </div>

        <div className="nav-links">
          <a href="#members">Members</a>
          <a href="#activities">Activities</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="tag">Major Course Output</p>
          <h1>React Activities Compilation</h1>
          <p>
            A modern portfolio-style landing page that compiles our React
            activities using components, props, hooks, JSON data, API fetching,
            loaders, and interactive UI design.
          </p>

          <div className="project-info">
            <div className="info-card">
              <h4>Instructor</h4>
              <p>Charl Alvarado</p>
            </div>

            <div className="info-card">
              <h4>School</h4>
              <p>Northwest Samar State University</p>
            </div>

            <div className="info-card">
              <h4>Department</h4>
              <p>College of Computer Studies</p>
            </div>

            <div className="info-card">
              <h4>Course</h4>
              <p>BS Information Technology</p>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#activities" className="hero-btn">
              View Activities
            </a>
            <a href="#members" className="secondary-btn">
              Meet Members
            </a>
          </div>
        </div>

        <div className="hero-card">
         
          <h2>Application Development and Emerging Technologies</h2>
          <h2>Group 2</h2>
      
          <span>React Project</span>

          <div className="live-clock">
            <h4>{dateTime.toLocaleTimeString()}</h4>
            <p>{dateTime.toDateString()}</p>
          </div>
        </div>
      </section>

      <section className="members-section" id="members">
        <p className="tag">Our Team</p>
        <h2>Meet Our Members</h2>
        <p className="section-subtitle">
          The team behind this Major Course Output.
        </p>

        <div className="members-grid">
          {members.map((member, index) => (
            <div className="member-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="activities-section" id="activities">
        <p className="tag">Compilation</p>
        <h2>Our Activities</h2>
        <p className="section-subtitle">
          Click each card to open and view the activity.
        </p>

        <div className="activity-grid">
          {activities.map((activity) => (
            <Link to={activity.path} className="activity-card" key={activity.title}>
              <div className="activity-icon">{activity.icon}</div>
              <h4>{activity.title}</h4>
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>
              <span>Open Activity →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MCO_LandingPage;