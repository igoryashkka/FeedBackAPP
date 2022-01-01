import React from 'react'
import { useContext } from "react";
import FeedBackContext from "./context/FeedBackContext";
//why i get invalid velue when i do not use index : 0?
function FeedBackStats() {

    const {FeedBack} = useContext(FeedBackContext)

    let average = FeedBack.reduce((prev,curr) => {
        return prev + curr.rating
    },0
    )/FeedBack.length 

    average = average.toFixed(1).replace(/[.,]0$/,'')

    
    return (
        <div className='feedback-stats'>
            <h4>Reviews {FeedBack.length} </h4>
            <h4>Average Rating : {isNaN(average) ? 0 : average} </h4>
        </div>
    )
}



export default FeedBackStats
