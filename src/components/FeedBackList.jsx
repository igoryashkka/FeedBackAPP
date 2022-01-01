import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";
import FeedBackItem from "./FeedBackItem";

function FeedBackList() {

  const {FeedBack} = useContext(FeedBackContext)

  if (!FeedBack || FeedBack.length === 0) {
    return <p>No feddback yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {/* //why item include data */}
        {FeedBack.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// FeedBackList.propTypes = {
//   FeedBack: PropTypes.arrayOf(
//     PropTypes.shape({
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };
export default FeedBackList;
