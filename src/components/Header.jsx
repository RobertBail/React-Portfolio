//import './Header.css';

const styles = {
  headerStyle: {
    background: 'green',
  },
  headingStyle: {
    fontSize: '50px',
  },
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Welcome!</h1>
    </header>
  );
}

export default Header;