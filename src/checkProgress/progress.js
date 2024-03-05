export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWinOrLose(
  correctLetters,
  wrongLetters,
  healt,
  selectedWord
) {
  let status = "win";
  const wordArray = selectedWord.trim().toLowerCase().split(" ");

  for (let word of wordArray) {
    for (let letter of word) {
      if (!correctLetters.includes(letter)) {
        status = "";
        break;
      }
    }
  }

  if (healt === 0 || wrongLetters.length === 5) status = "lose";

  return status;
}
