import PropTypes from "prop-types";
import { checkWinOrLose } from "../checkProgress/progress";
import { useEffect } from "react";
import classNames from "classnames";
const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  healt,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (
    checkWinOrLose(correctLetters, wrongLetters, healt, selectedWord) === "win"
  ) {
    if (selectedWord === "türkiye") {
      finalMessage = "Tebrikler Kazandın 😃 ";
      finalMessageRevealWord = `as bayrakları assss trt trtrt tr tr auuu auuuu trtr auu tr as asa as `;
    } else {
      finalMessage = "Tebrikler Kazandın 123123123😃";
    }
    playable = false;
  } else if (
    checkWinOrLose(correctLetters, wrongLetters, healt, selectedWord) === "lose"
  ) {
    finalMessage = "Sanırım Kaybettin. 😕";
    finalMessageRevealWord = `...aradığımız ülke : ${selectedWord} `;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });
  return (
    <>
      {!playable && (
        <div
          className={classNames(
            "w-full h-full flex flex-col gap-y-3 items-center justify-center  bg-black/60 z-30 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  px-4 py-4",
            {
              hidden: playable,
            }
          )}
        >
          <div className="flex flex-col items-center justify-center flex-wrap max-w-[200px] gap-y-4 ">
            <div className="text-lg">{finalMessage}</div>
            <div className="text-lg text-center">{finalMessageRevealWord}</div>
            <button
              className="border-green-500 text-green-500 px-3  py-1.5 border-2 rounded-md"
              onClick={playAgain}
            >
              Tekrar Oyna
            </button>
          </div>
        </div>
      )}
    </>
  );
};
Popup.propTypes = {
  correctLetters: PropTypes.array.isRequired,
  wrongLetters: PropTypes.array.isRequired,
  selectedWord: PropTypes.string.isRequired,
  setPlayable: PropTypes.any,
  healt: PropTypes.number,
  playAgain: PropTypes.any,
};

export default Popup;
