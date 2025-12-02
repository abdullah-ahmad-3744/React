import "./About.css";

function About() {
  return (
    <div className="about-wrapper">

      {/* TWO-COLUMN SECTION */}
      <section className="about-two-col">
        <div className="col-text">
          <h2>Our Purpose</h2>
          <p>
            We believe learning should feel simple, organized, and enjoyable.  
            StudyNotion focuses on providing well-structured content, smooth 
            UI experience, and tools that help learners stay motivated without stress.
          </p>
        </div>

        <div className="col-text">
          <h2>Our Vision</h2>
          <p>
            To build a modern study environment where every learner—whether a 
            beginner or a professional—can grow with clarity, confidence, 
            and focus. A platform made for real progress, not pressure.
          </p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>10K+</h3>
          <p>Active Learners</p>
        </div>

        <div className="stat-card">
          <h3>4.9★</h3>
          <p>User Satisfaction</p>
        </div>

        <div className="stat-card">
          <h3>120+</h3>
          <p>Learning Modules</p>
        </div>
      </section>

    </div>
  );
}

export default About;
