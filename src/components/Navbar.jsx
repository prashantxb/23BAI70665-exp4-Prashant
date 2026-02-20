import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      background: "black",
      padding: "10px"
    }}>
      <Link style={{color:"white"}} to="/">Home</Link>
      <Link style={{color:"white"}} to="/projects">Projects</Link>
      <Link style={{color:"white"}} to="/analytics">Analytics</Link>
    </nav>
  );
};

export default Navbar;