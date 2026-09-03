import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Computer Science Engineering student at Lovely Professional University with a strong interest in software development, cybersecurity, and emerging technologies.
        </p>
        <div className="about-details">
          <p>
            I enjoy turning ideas into practical digital solutions through programming, web development, application design, and hands-on technical projects. Continuously developing my knowledge across databases, web technologies, embedded systems, and cybersecurity while exploring how technology solves real-world problems.
          </p>
          <p>
            My goal is to become a highly skilled cybersecurity professional and ethical hacker capable of identifying vulnerabilities, protecting digital systems, and creating secure, reliable technology solutions.
          </p>
          <div className="about-motto">
            <span>Learn. Build. Secure. Evolve.</span>
          </div>
          <div className="about-strengths">
            <h4>Core Strengths</h4>
            <div className="strengths-grid">
              <span>Problem Solving</span>
              <span>Continuous Learning</span>
              <span>Technical Curiosity</span>
              <span>Adaptability</span>
              <span>Attention to Detail</span>
              <span>Discipline</span>
              <span>Creativity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

