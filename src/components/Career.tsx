import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Career <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Academic Foundation</h4>
                <h5>Apeejay School, Jalandhar (CBSE)</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed Class X with 72.8%. Developed an early interest in computers, technology, and problem-solving while building the academic foundation for engineering and higher studies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary (Non-Medical)</h4>
                <h5>Apeejay School, Jalandhar (CBSE)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed Class XII with 63.2%. The non-medical discipline strengthened my analytical mindset and mathematics foundation, preparing me to pursue Computer Science Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Lovely Professional University, Punjab</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Joined Lovely Professional University for B.Tech in CSE (2025–2029). Started developing practical knowledge in programming, software engineering, databases, and core computer science fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building Through Projects</h4>
                <h5>Saylor Academy &amp; Practical Labs</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Pursuing 3rd semester, focusing on hands-on technical solutions: Automatic Drip Irrigation, Laser Telegram Alert System, and Fitness Tracking App. Earned Saylor.org CS105 (Python) &amp; CS403 (Modern Database Systems) certifications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Exploring Cybersecurity</h4>
                <h5>Ethical Hacking &amp; Defensive Security</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Expanding expertise across software development, embedded hardware, and cybersecurity. Focus is directed toward ethical hacking, vulnerability assessment, application security, and defensive hardening.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
