import React, { useState,useContext,useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackForm() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setDisabled] = useState(true);
  const [rating, setRating] = useState(10);

const {addFeedBack,FeedBackEdit,updateFeedBack} = useContext(FeedBackContext)

useEffect(() => {
    if(FeedBackEdit.edit === true){
      setDisabled(false)
      setText(FeedBackEdit.item.text)
      setRating(FeedBackEdit.item.rating)

    }
}, [FeedBackEdit])

  const handleChange = (e) => {
    if (text === "") {
      setMessage(null);
      setDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Если для Eva.k не понравиться - я тебя убью!");
      setDisabled(true);
    } else {
      setDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
        const newFeedBack = {
            text,
            rating,
        }
        if(FeedBackEdit.edit === true) {
          updateFeedBack(FeedBackEdit.item.id,newFeedBack)
         } else{
            addFeedBack(newFeedBack)
          }
        
        setText('')
    }
  };

  return (
    <Card>
      <form onSubmit={HandleFormSubmit}>
        <h2>Оцените милость Eva.k ? </h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            placeholder="Write review ..."
            type="text"
            value={text}
            onChange={handleChange}
          />
          <Button type="submit" isDisabled={isDisabled} version="secondary">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;
