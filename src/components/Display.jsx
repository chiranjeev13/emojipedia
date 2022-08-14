import React from "react";

function display(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>

    // dfdlfdf
    // <div>
    //   <h2 className="emoji">{props.emoji}</h2>
    //   <h3 className="name">{props.name}</h3>
    //   <p className="meaning">{props.meaning}</p>
    // </div>
  );
}
export default display;
