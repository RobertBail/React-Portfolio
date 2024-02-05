import img1 from "../assets/01.png";
import img2 from "../assets/02.png";
import img3 from "../assets/03.png";
import img4 from "../assets/04.png";
import img5 from "../assets/05.png";
import img6 from "../assets/06.png";
import './Portfolio.css';

export default function Portfolio() {
    return (
      <div className="Portfolio">
        <h1>Portfolio</h1>
        <div className="row gx-0 py-4" >
          <div className="row gx-0">
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
             <div className="s4_1">
             <img src={img1} alt="" className="img-fluid" />
             </div>
             <div className="overlay">
              <div className="text">
              <h3>Tech Blog</h3>
              <p>An app which enables a developer to write and publish blog posts.
                The author can also edit and delete their posts, and readers can add comments.</p>
                <a
                        href="https://the-tech-blog-rb-89aab8dd6437.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-success">
                          See More
                        </button>
                      </a>
                      <a
                        href="https://github.com/RobertBail/Tech-Blog"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-secondary">
                        GitHub repo
                        </button>
                      </a>
               </div>
             </div>
          </div>
        </div>
      </div>
      <div className="row gx-0 py-4">
          <div className="row gx-0">
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
             <div className="s4_1">
             <img src={img2} alt="" className="img-fluid" />
             </div>
             <div className="overlay">
              <div className="text">
              <h3>Note-Taker</h3>
              <p>An app which enables a user to write and save notes.
                Each note is saved in a list on the left side of the page. The user can also delete each note.</p>
                <a
                        href="https://note-taker-rb-fa3eeac28624.herokuapp.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-success">
                          See More
                        </button>
                      </a>
                      <a
                        href="https://github.com/RobertBail/Note-Taker"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-secondary">
                        GitHub repo
                        </button>
                      </a>
               </div>
             </div>
          </div>
        </div>
      </div>
      <div className="row gx-0 py-4">
          <div className="row gx-0">
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
             <div className="s4_1">
             <img src={img3} alt="" className="img-fluid" />
             </div>
             <div className="overlay">
              <div className="text">
              <h3>Weather Dashboard</h3>
              <p>A weather application which allows the user to search any major town and city in the world, and see the relevant weather forecast for the upcoming five days. 
                The app also saves each location the user searched for, which they can click on and see its weather forecast again. This wasn't fully acheived. It was one of the more challenging projects early on.</p>
                <a
                        href="https://robertbail.github.io/Weather-Dashboard/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-success">
                          See More
                        </button>
                      </a>
                      <a
                        href="https://github.com/RobertBail/Weather-Dashboard"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-secondary">
                        GitHub repo
                        </button>
                      </a>
               </div>
             </div>
          </div>
        </div>
      </div>
      <div className="row gx-0 py-4">
          <div className="row gx-0">
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
             <div className="s4_1">
             <img src={img4} alt="" className="img-fluid" />
             </div>
             <div className="overlay">
              <div className="text">
              <h3>Work-Day Scheduler</h3>
              <p>This app will allow the user to write and save events during their workday. The coloured time-blocks weren't fully acheived.</p>
                <a
                        href="https://robertbail.github.io/Work-Day-Scheduler/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-success">
                          See More
                        </button>
                      </a>
                      <a
                        href="https://github.com/RobertBail/Work-Day-Scheduler"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-secondary">
                        GitHub repo
                        </button>
                      </a>
               </div>
             </div>
          </div>
        </div>
      </div>
      <div className="row gx-0 py-4">
          <div className="row gx-0">
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
             <div className="s4_1">
             <img src={img5} alt="" className="img-fluid" />
             </div>
             <div className="overlay">
              <div className="text">
              <h3>Code-Quiz</h3>
              <p>This application features a timed quiz based on coding concepts. 
                At the end of the quiz, the user is able to save their name and score.</p>
                <a
                        href="https://robertbail.github.io/code-quiz-RB/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-success">
                          See More
                        </button>
                      </a>
                      <a
                        href="https://github.com/RobertBail/code-quiz-RB"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-secondary">
                        GitHub repo
                        </button>
                      </a>
               </div>
             </div>
          </div>
        </div>
      </div>
      <div className="row gx-0 py-4">
          <div className="row gx-0">
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
             <div className="s4_1">
             <img src={img6} alt="" className="img-fluid" />
             </div>
             <div className="overlay">
              <div className="text">
              <h3>Password-Generator</h3>
              <p>The purpose of this project was to create a prompt which generates random passwords for the user. 
                It was an introduction to methods such as Math.floor(Math.random()) and for loops.</p>
                <a
                        href="https://robertbail.github.io/Password-Generator/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-success">
                          See More
                        </button>
                      </a>
                      <a
                        href="https://github.com/RobertBail/Password-Generator"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-secondary">
                        GitHub repo
                        </button>
                      </a>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
    
    );
  }





