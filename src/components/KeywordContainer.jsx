import classNames from "classnames";
import PropTypes from "prop-types";

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
                  wrongLetters.includes(letter.toLowerCase()),
                "!bg-black/50 !text-green-500 pointer-events-none":
                  correctLetters.includes(letter.toLowerCase()),
              }
            )}
            key={index}
            onClick={() => onKeyPress(letter.toLowerCase())}
            id={letter}
          >
            {turkishToUpper(letter)}
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
