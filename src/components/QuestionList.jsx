import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function QuestionList(props) {
  const [questions, setQuestions] = React.useState([])
  const [checked, setChecked] = React.useState(false)
  const [correct, setCorrect] = React.useState(0)

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=5`)
      .then((res) => res.json())
      .then((data) => {
        let q = []
        data.results.forEach(question =>{
          q.push({id: nanoid(), answers:shuffleArray([...question.incorrect_answers, question.correct_answer]), question: question.question, correct: question.correct_answer, selected: null, checked:false})
        })
        setQuestions(q)
      });
  }, []);

  console.log(questions);
  console.log(correct);

  const questionElements = questions.map((question) => {
    return (
      <Question
        key={question.id}
        question={question}
        id={question.id}
        handleClickAnswer={handleClickAnswer}
      />
    );
  }) 

  function handleClickAnswer(id, answer) {
    setQuestions(questions => questions.map(question =>{
      return question.id === id 
        ? {...question, selected: answer} 
        : question
    }))
  }

  function handleCheckAnswers() {
    let selected = true;
    questions.forEach(question => {
      if (question.selected === null) {
        selected = false;
        return
      }
    })
    if(!selected) {
      return
    }

    setQuestions(questions.map(question => ({...question, checked: true})))
    setChecked(true)

    questions.forEach(question => {
      if (question.correct === question.selected) {
        setCorrect(prevCorrect => prevCorrect+1)
        return
      }
    })
  }

  function handlePlayAgain() {

  }

  return (
    <div>
      {questionElements}
      <button onClick={checked ? handlePlayAgain : handleCheckAnswers}>{checked ? "Play Again" : "Check answers"}</button>
    </div>
  );
}
