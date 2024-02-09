import logo from "../../assets/logo.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  )
}

export default Logo