import Card from "../card/Card";
import "./Section.css";
const Section = (props) => {
  return (
    <div class="section__container container">
      <div class="section__header">
        {props.headingLevel === 2 ? (
          <h2>{props.header}</h2>
        ) : (
          <h3>{props.header}</h3>
        )}
      </div>
      <div class="section__body">{props.body}</div>
      <div class="section__card">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Section;
