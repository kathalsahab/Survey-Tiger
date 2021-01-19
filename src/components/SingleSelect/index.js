import React, { useState } from "react";
import {
   Button,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   Input,
} from "reactstrap";

function SingleSelect() {
   const [options, setoptions] = useState(["", ""]);
   const [question, setquestion] = useState("");
   const setOptionInArray = (value, optionIdx) => {
      console.log(value);
      options[optionIdx] = value;
      setoptions([...options]);
   };
   const isQuestionAddPublishDisabled = () =>
      question.trim() === "" ||
      options.find((opt) => opt.trim() === "") !== undefined;
   return (
      <div className="question-container">
         <InputGroup className="input-grp">
            <InputGroupAddon addonType="prepend">
               <InputGroupText>?</InputGroupText>
            </InputGroupAddon>
            <Input
               placeholder="Your Question"
               onChange={(e) => setquestion(e.target.value)}
               value={question}
            />
         </InputGroup>
         <p className="options-text">Options</p>
         {options.map((option, optionIdx) => (
            <InputGroup className="input-grp" key={optionIdx}>
               <Input
                  placeholder={`Option ${optionIdx + 1}`}
                  value={option}
                  onChange={(e) => setOptionInArray(e.target.value, optionIdx)}
               />
               <InputGroupAddon addonType="append">
                  <InputGroupText>+</InputGroupText>
                  <InputGroupText>-</InputGroupText>
               </InputGroupAddon>
            </InputGroup>
         ))}
         <div>
            <Button
               className="survey-main-btn"
               disabled={isQuestionAddPublishDisabled()}
            >
               Add Questions
            </Button>
            <Button
               className="survey-main-btn"
               disabled={isQuestionAddPublishDisabled()}
            >
               Publish
            </Button>
         </div>
      </div>
   );
}

export default SingleSelect;
