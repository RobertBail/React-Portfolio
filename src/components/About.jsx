import RBimg from "../assets/rbcessna2.png";
import './About.css';
export default function About() {
    return (
      <div className="About">
        <h1>About Me</h1>
        <img src={RBimg} alt="" className="img-fluid" />
        <p>
        I'm Robert Bailey. I'm 35. I live in Hampstead Gardens, SA. I have taken part in the edX/University of Adelaide 
        coding bootcamp to develop some more skills and knowledge specifically in web development. 
        I have found it an interesting mix of technical and creative.
        </p>
      </div>
    );
  }
