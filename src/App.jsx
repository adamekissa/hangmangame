import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import { words } from './Data/Data';

function App() {
  const [buttonText, setButtonText] = useState("");
  const [missCount, setMissCount] = useState(0);
  const [theWord, setTheWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const guessDisplay = generateHangmanDisplayLetters(buttonText, theWord);

  function generateHangmanDisplayLetters(guessedLetters, wordToGuess) {
    const displayLetters = [];
    for (const letter of wordToGuess) {
      if (guessedLetters.includes(letter)) {
        displayLetters.push(letter);
      } else {
        displayLetters.push("_ ");
      }
    }
    return displayLetters;
  }

  function getClickedText() {
    document.addEventListener('click', e => {
      e.target.disabled = true;
      setButtonText([...buttonText, e.target.innerText]);
      if (!theWord.includes(e.target.innerText)) {
        setMissCount(missCount + 1);
      }
      if (missCount === 10) {
        alert("You lose!");
        location.reload();
      }
    })
  }

  function freshGame() {
    location.reload();
  }


  return (
    <>
      <div>
        <h2>Welcome to the hangman game</h2>
        <h3>{guessDisplay}</h3>
        <p>NUmber of misses: {missCount}</p>
        <div className='button--div'>
          <Button callBackFn={getClickedText} text="a" />
          <Button callBackFn={getClickedText} text="b" />
          <Button callBackFn={getClickedText} text="c" />
          <Button callBackFn={getClickedText} text="d" />
          <Button callBackFn={getClickedText} text="e" />
          <Button callBackFn={getClickedText} text="f" />
          <Button callBackFn={getClickedText} text="g" />
          <Button callBackFn={getClickedText} text="h" />
          <Button callBackFn={getClickedText} text="i" />
          <Button callBackFn={getClickedText} text="j" />
          <Button callBackFn={getClickedText} text="k" />
          <Button callBackFn={getClickedText} text="l" />
          <Button callBackFn={getClickedText} text="m" />
          <Button callBackFn={getClickedText} text="n" />
          <Button callBackFn={getClickedText} text="o" />
          <Button callBackFn={getClickedText} text="p" />
          <Button callBackFn={getClickedText} text="q" />
          <Button callBackFn={getClickedText} text="r" />
          <Button callBackFn={getClickedText} text="s" />
          <Button callBackFn={getClickedText} text="t" />
          <Button callBackFn={getClickedText} text="u" />
          <Button callBackFn={getClickedText} text="v" />
          <Button callBackFn={getClickedText} text="w" />
          <Button callBackFn={getClickedText} text="x" />
          <Button callBackFn={getClickedText} text="y" />
          <Button callBackFn={getClickedText} text="z" />
        </div>
        <Button callBackFn={freshGame} text="New Game" />
      </div>
    </>
  )
}

export default App
