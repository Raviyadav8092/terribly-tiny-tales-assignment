import logo from "./terribly.jpg";
import './Navbar.css';
function Navbar() {
    return (
     
<nav className="navbar navbar-light bg-dark">
  <a className="navbar-brand" href="#">
    <img src={logo} width="40" id="logo" className="d-inline-block align-top" alt="" /><span id="slash">{" "}|{" "}</span>
    <span id="demo">STORIES</span>
  </a>
  <button type="button" className="btn btn-warning" id="but">Courses</button>
</nav>
        
        
    );
  }
  
export default Navbar;
