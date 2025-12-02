import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>Empower Your Learning Journey</h1>
          <p>
            StudyNotion helps students learn faster, stay on track, and 
            achieve their goals with personalized study tools and a clean, 
            distraction-free interface.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Explore Courses</button>
          </div>
        </div>
      </section>

      {/* BEAUTIFUL FEATURE SECTION */}
<section className="new-features">
  <h2 className="section-title">What Makes Us Special?</h2>

  <div className="card-grid">

    <div className="glass-card">
      <span className="icon">🚀</span>
      <h3>Boost Your Learning Speed</h3>
      <p>
        AI-assisted tools help you study smarter, understand faster, 
        and perform better in your exams.
      </p>
    </div>

    <div className="glass-card">
      <span className="icon">🎓</span>
      <h3>Expert-Level Guidance</h3>
      <p>
        Get structured study paths built by industry professionals 
        so you never feel lost in your learning journey.
      </p>
    </div>

    <div className="glass-card">
      <span className="icon">💡</span>
      <h3>Interactive & Practical</h3>
      <p>
        Learn by doing — quizzes, exercises, and challenges 
        to strengthen your concepts every day.
      </p>
    </div>

  </div>
</section>


    </div>
  );
}

export default Home;
