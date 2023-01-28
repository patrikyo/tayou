import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="card__container">
      <div class="card__icon-container">
        <FontAwesomeIcon icon={faUsersLine} />
      </div>
      <div className="card__body">
        <h2 className="card__title">Special title treatment</h2>
        <p className="card__text">
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
