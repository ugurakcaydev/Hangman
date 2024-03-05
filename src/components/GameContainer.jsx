import classNames from "classnames";
import PropTypes from "prop-types";
import "../App.css";

function turkishToUpper(letter) {
  const turkishChars = {
    i: "İ",
    ı: "I",
    ğ: "Ğ",
    ü: "Ü",
    ş: "Ş",
    ö: "Ö",
    ç: "Ç",
  };
  return turkishChars[letter] || letter.toUpperCase();
}
function GameContainer({ selectedWord, correctLetters }) {
  // Boşluğa göre kelimeleri böler
  const words = selectedWord.toLowerCase().split(" ");
  return (
    <div className="w-full flex items-center justify-center z-20 min-h-[144px] ">
      <div className="max-w-[350px] flex items-center justify-center gap-3 flex-wrap">
        {words.map((word, wordIndex) => (
          <div
            key={wordIndex}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            {word.split("").map((letter, index) => (
              <div
                key={index}
                className={classNames(
                  "w-10 h-10 flex items-center justify-center border border-black/40 bg-blue-500/60 text-white",
                  {
                    "!bg-blue-600": correctLetters.includes(
                      letter.toLowerCase()
                    ),
                  }
                )}
              >
                {/* {correctLetters.includes(letter.toLowerCase())
                  ? letter.toUpperCase()
                  : ""} */}
                <div
                  className={classNames(
                    "w-full h-full flex items-center justify-center opacity-0 ",
                    {
                      "opacity-100 transition-opacity duration-700 ease-in-out ":
                        correctLetters.includes(letter.toLowerCase()),
                    }
                  )}
                >
                  {turkishToUpper(letter)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

GameContainer.propTypes = {
  selectedWord: PropTypes.string.isRequired,
  correctLetters: PropTypes.array.isRequired,
};

export default GameContainer;
