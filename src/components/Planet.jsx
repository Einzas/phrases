import planet from "../assets/imgs/planeta 1.png";
import "./styles/Planet.css";
function Planet({ author }) {
  return (
    <div>
      <img src={planet} alt="Planet" />
      <p className="author">Fuente: {author}</p>
    </div>
  );
}

export default Planet;
