import './Footer.css';

const styles = {
  footerStyle: {
    background: 'yellow',
    height: '60px',
  },
  footertextStyle: {
    fontSize: '30px',
    marginLeft: '10px',

  },
  
};


function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h2 style={styles.footertextStyle}>Thanks for viewing!
      <a
        href="https://github.com/RobertBail"
        target="_blank"
        rel="noreferrer"
        >
        <button className="btn btn-dark">
        Rob Bailey's Github
        </button>
        </a>
        </h2>
    </footer>
  );
}

export default Footer;