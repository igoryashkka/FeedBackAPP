import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [FeedBack, setFeedBack] = useState([
    {
      id: 2,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    
  ]);

  const [FeedBackEdit, setFeedBackEdit] = useState(
    {
      item : {},
      edit : false
    }
  )

  const deleteFeedBack = (id) => {
    if (window.confirm("Are you shure ? ")) {
      setFeedBack(FeedBack.filter((item) => item.id !== id));
    }
  };

  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    setFeedBack([newFeedBack, ...FeedBack]);
  };

  const updateFeedBack = (id, updItem) =>{
      setFeedBack(
        FeedBack.map((item) => (item.id === id ? {...item,...updItem} : item))
        )
  }

  const editFeedBack = (item) => {
    setFeedBackEdit({
      item,
      edit : true
    });
  };


  return <FeedBackContext.Provider value={{
    FeedBack,
    FeedBackEdit,
    deleteFeedBack,
    addFeedBack,
    editFeedBack,
    updateFeedBack,
    }}>{children}</FeedBackContext.Provider>;

};

export default FeedBackContext
