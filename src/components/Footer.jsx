import './Footer.css';

const styles = {
  footerStyle: {
    background: 'green',
  },
  footerStyle: {
    fontSize: '30px',
  },
};


function Footer() {
  return (
    <footer style={styles.headerStyle} className="header">
      <h2 style={styles.headingStyle}>Thanks for viewing!</h2>
    </footer>
  );
}

export default Footer;