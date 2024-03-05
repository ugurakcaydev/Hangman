import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";
import KeywordContainer from "./components/KeywordContainer";
import Popup from "./components/Popup";
import countries from "./mock/countries";



let randomItem = countries[Math.floor(Math.random() * countries.length)];
let selectedWord = randomItem.title.trim().toLocaleLowerCase("tr-TR")
let selectedImg = randomItem.img;

function App() {
  const [healt, setHealt] = useState(5);
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  const onKeyPress = (letter) => {
    if (playable) {
      if (selectedWord.trim().toLocaleLowerCase().includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters((currentLetters) => [...currentLetters, letter]);
        } else {
          //Zaten Bu Harfe Bastın
          //console.log("zaten bastın true");
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters((currentLetters) => [...currentLetters, letter]);
          setHealt(healt - 1);
        } else {
          //Zaten hatalı kelime basıyorsun
          //console.log("zaten bastın false");
        }
      }
    }
  };

  function playAgain() {
    setPlayable(true);
    setHealt(5);
    setCorrectLetters([]);
    setWrongLetters([]);
    randomItem = countries[Math.floor(Math.random() * countries.length)];
    selectedWord = randomItem.title.trim().toLocaleLowerCase("tr-TR");
    selectedImg = randomItem.img;
  }

  return (
    <>
      <div className="mainContainer relative min-w-[400px] h-full  ">
        <img
          className="absolute top-0 left-0 h-full object-cover z-10 "
          src="/img/bg.jpg"
          alt=""
        />
        <div className="relative w-full h-full flex flex-col items-stretch justify-between bg-white/10 z-20 px-5 py-20 gap-y-24 text-white ">
          <Header
            wrongLetters={wrongLetters}
            healt={healt}
            selectedImg={selectedImg}
          />
          <GameContainer
            selectedWord={selectedWord}
            correctLetters={correctLetters}
          />
          <KeywordContainer
            onKeyPress={onKeyPress}
            healt={healt}
            wrongLetters={wrongLetters}
            correctLetters={correctLetters}
          />
          <Popup
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
            selectedWord={selectedWord}
            setPlayable={setPlayable}
            healt={healt}
            playAgain={playAgain}
          />
        </div>
      </div>
    </>
  );
}
export default App;
