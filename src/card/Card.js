import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="card">
      <div class="image">
        <FontAwesomeIcon icon={faUsersLine} />
      </div>
      <div className="card-body">
        <h2 className="card-title">Special title treatment</h2>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="www.google.se" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
