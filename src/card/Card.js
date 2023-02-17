import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className="card__container">
      <div class="card__icon-container">
        <FontAwesomeIcon icon={faUsersLine} />
      </div>
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__text">{props.description}</p>
        <a href="www.google.se" className="btn btn-primary">
          Mer information
        </a>
      </div>
    </div>
  );
};

export default Card;
