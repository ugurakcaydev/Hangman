import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";
import KeywordContainer from "./components/KeywordContainer";
import Popup from "./components/Popup";

const words = [
  " Afganistan",
  " Almanya ",
  "Amerika Birleşik Devletleri ",
  "Amerikan Samoa ",
  " Andorra ",
  " Angola ",
  " Anguilla",

  " Arjantin",
  " Arnavutluk ",

  " Avustralya",
  " Avusturya",
  " Azerbaycan ",

  "Bahama Adaları ",
  " Bahreyn ",
  " Bangladeş",
  " Barbados ",
  " Belçika",
  " Belize ",
  " Benin ",
  " Bermuda",
  "Beyaz Rusya",

  "Birleşik Arap Emirlikleri",

  " Bolivya",
  "Bosna Hersek",

  " Brezilya ",

  " Bulgaristan ",

  " Burundi",

  "Cayman Adaları",
  " Cezayir",

  "Çek Cumhuriyeti",
  " Çin",

  " Danimarka ",

  "Dominik Cumhuriyeti",

  " Ekvator",
  "Ekvator Ginesi",
  "El Salvador ",
  " Endonezya",

  " Ermenistan",
  " Estonya",
  " Etiyopya",

  " Fas",

  "Fildişi Sahili",
  " Filipinler",
  " Filistin ",
  " Finlandiya ",

  " Fransa",

  " Gabon ",
  " Galler",
  " Gambiya ",
  " Gana",

  " Gine",

  " Grenada",
  " Grönland",

  "Güney Afrika",

  "Güney Kıbrıs Rum Yönetimi",
  "Güney Kore",
  " Gürcistan ",

  "Havai Adaları",
  " Hırvatistan ",
  " Hindistan ",
  " Hollanda",

  " Irak ",

  " İngiltere ",
  " İran ",
  " İrlanda",
  " İskoçya",
  " İspanya ",
  " İsrail",
  " İsveç ",
  " İsviçre",
  " İtalya",
  " İzlanda",

  " Jamaika",
  " Japonya",

  " Kuzey Kıbzrık Türk Cumhuriyeti",
  " Kamboçya",
  " Kamerun",
  " Kanada ",
  "Kanarya Adaları",
  " Karadağ ",
  " Katar ",
  "Kazakistan ",
  "Kenya ",
  "Kırgızistan ",

  "Kolombiya ",

  "Kongo ",
  "Kosova",
  "Kosta Rika ",
  "Kuveyt ",
  "Kuzey İrlanda ",
  "Kuzey Kore ",

  "Küba ",

  "Letonya ",

  "Libya ",

  "Litvanya ",
  "Lübnan ",
  "Lüksemburg ",

  "Macaristan",
  "Madagaskar",
  "Makau ",
  "Makedonya ",
  "Malavi ",
  "Maldiv Adaları ",
  "Malezya ",
  "Mali ",
  "Malta",
  "Marşal ,Adaları ",

  "Meksika",
  "Mısır",

  "Moğolistan",
  "Moldavya",
  "Monako",

  "Nauru",
  "Nepal",
  "Nijer",
  "Nijerya",
  "Nikaragua ",
  "Niue",
  "Norveç",
  "Orta Afrika Cumhuriyeti",

  "Özbekistan ",

  "Pakistan",
  "Palau Adaları",

  "Panama",
  "Papua Yeni Gine",
  "Paraguay",
  "Peru",
  "Polonya",
  "Portekiz",
  "Porto Riko",

  "Reunion",
  "Romanya ",
  "Ruanda ",
  "Rusya Federasyonu",

  "Samoa",
  "San Marino ",

  "Senegal",
  "Seyşeller",
  "Sırbistan",

  "Singapur",
  "Slovakya ",
  "Slovenya",
  "Solomon Adaları",
  "Somali",
  "Sri Lanka",
  "Sudan",

  "Suriye",
  "Suudi Arabistan",

  "Svaziland",

  "Şili",

  "Tacikistan",
  "Tanzanya",
  "Tayland",
  "Tayvan",
  "Togo",
  "Tonga",

  "Tunus",

  "Tuvalu",
  "Türkiye",
  "Türkmenistan ",

  "Uganda",
  "Ukrayna ",

  "Uruguay",

  "Ürdün",

  "Venezuela",
  "Vietnam ",
  "Virgin Adaları",

  "Yemen",
  "Yeni Kaledonya ",
  "Yeni Zelanda ",
  "Yunanistan ",
];

let selectedWord = words[Math.floor(Math.random() * words.length)]
  .trim()
  .toLowerCase();

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
    selectedWord = words[Math.floor(Math.random() * words.length)];
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
          <Header wrongLetters={wrongLetters} healt={healt} />
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
