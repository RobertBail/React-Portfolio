//import './Footer.css';

const styles = {
  footerStyle: {
    background: 'green',
  },
  footertextStyle: {
    fontSize: '30px',
  },
  
};


function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h2 style={styles.footertextStyle}>Thanks for viewing!</h2>
    </footer>
  );
}

export default Footer;