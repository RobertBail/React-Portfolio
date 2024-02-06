//import './Header.css';

const styles = {
  headerStyle: {
    background: 'yellow',
    height:'70px'
  },
  headingStyle: {
    fontSize: '50px',
    marginLeft: '10px'
  },
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Rob Bailey's Portfolio</h1>
    </header>
  );
}

export default Header;