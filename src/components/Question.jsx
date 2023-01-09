import React from "react";
import { nanoid } from "nanoid";

export default function Question(props) {
  const elements = props.question.answers.map((answer) => {
    let id = null;
    if (props.question.checked) {
      if (props.question.correct === answer) {
        id = "correct";
      } else if (props.question.selected === answer) {
        id = "incorrect";
      } else {
        id = "not-selected";
      }
    }

    return (
      <button
        className={
          answer === props.question.selected ? "btn btn-selected" : "btn"
        }
        key={nanoid()}
        id={id}
        onClick={() => props.handleClickAnswer(props.id, answer)}
      >
        {answer}
      </button>
    );
  });

  return (
    <div className="question-container">
      <h2>{props.question.question}</h2>
      {elements}
      <hr className="line" />
    </div>
  );
}
