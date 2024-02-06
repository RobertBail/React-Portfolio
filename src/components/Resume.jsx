import './Resume.css';
import myResume from "../assets/RESUMEmod3.pdf";
export default function Resume() {
    return (
      <div className="Resume">
        <h1>Resume</h1>
        <div className="resume-block">
                        <h5>Skills</h5>
                        Node.js, Express.js, React, MongoDB, Mongoose, MySQL, Sequelize, JavaScript, JQuery, HTML, CSS, Bootstrap, Bulma, REST API, Git
                    </div>
                    <div className="resume-block">
                        <h5>Education</h5>
                        <ul className="resume-list">
                            <li>2024 - Full-stack Coding Boot Camp Certificate, edX/University of Adelaide</li>
                            <li>2012 - Bachelor of Communication, University of SA</li>
                        </ul>
                    </div>
        <p className="text">Download Rob Bailey's resume:</p>
        <form method="get" action={myResume} target="_blank">
                            <button type="submit" className="btn btn-info">
                                Download Resume
                            </button>
                        </form>
        <p className="text">See more on Rob Bailey's LinkedIn:</p>
        <a
        href="https://www.linkedin.com/in/rob-bailey-64bba5102/"
        target="_blank"
        rel="noreferrer"
        >
        <button className="btn btn-info">
        LinkedIn
        </button>
        </a>
        
      </div>
    );
  }