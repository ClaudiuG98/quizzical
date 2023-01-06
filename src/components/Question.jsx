import React from "react";
import { nanoid } from "nanoid";

export default function Question(props) {

  const elements = props.question.answers.map((ans) => {
    return <button className="btn" key={nanoid()} id={props.id} onClick={() => props.handleClickAnswer(props.id, ans)}>{ans}</button>;
  });

  return (
    <div>
      <h2>{props.question.question}</h2>
      {elements}
      <hr />
    </div>
  );
}
