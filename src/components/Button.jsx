import "./styles/Button.css";
import bg from "../assets/imgs/Vector.png";
function Button({ handleSetPhrase }) {
  return <button className="btn-circular" onClick={handleSetPhrase}></button>;
}

export default Button;
