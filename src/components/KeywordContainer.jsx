import classNames from "classnames";
import PropTypes from "prop-types";

function KeywordContainer({ onKeyPress, wrongLetters, correctLetters }) {
  const alphabet = "abcçdefghıijklmnoöprsştuüvyz";
  return (
    <div className="z-20 text-white">
      <div className="keyboard flex items-center justify-center flex-wrap max-w-[360px] gap-2.5">
        {alphabet.split("").map((letter, index) => (
          <button
            className={classNames(
              "w-10 h-10 rounded-lg bg-white text-black font-serif",
              {
                "!bg-black/50 text-red-500 pointer-events-none":
                  wrongLetters.includes(letter.toLocaleLowerCase("tr-TR")),
                "!bg-black/50 !text-green-500 pointer-events-none":
                  correctLetters.includes(letter.toLocaleLowerCase("tr-TR")),
              }
            )}
            key={index}
            onClick={() => onKeyPress(letter.toLocaleLowerCase("tr-TR"))}
            id={letter}
          >
            {letter.toLocaleUpperCase("tr-TR")}
          </button>
        ))}
      </div>
    </div>
  );
}

KeywordContainer.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  wrongLetters: PropTypes.array.isRequired,
  correctLetters: PropTypes.array.isRequired,
};

export default KeywordContainer;
