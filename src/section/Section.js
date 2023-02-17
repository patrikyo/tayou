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
        <Card
          title="kvalitet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card
          title="kompetens"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card
          title="historik"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
};

export default Section;
