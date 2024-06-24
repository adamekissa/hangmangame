import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [buttonText, setButtonText] = useState("");
  const [count, setCount] = useState(0);
  const hiddenWord = ["a", "l", "w", "a", "y", "s"];

  function getClickedText() {
    document.getElementById('textButton').addEventListener('click', e => {
      setButtonText(e.target.innerText);
      // alert(e.target.innerText)
    })
    // e.target.disabled = true;
    console.log(buttonText);
  }

  return (
    <>
      <div>
        <h2>Welcome to the hangman game</h2>
        <p>{buttonText}</p>
        <h3>{hiddenWord.map(element => "_ ")}</h3>
        <p>NUmber of misses: 0</p>
        <div className='button--div'>
          <Button callBackFn={getClickedText} text="a" idc="textButton" />
          <Button callBackFn={getClickedText} text="b" idc="textButton" />
          <Button callBackFn={getClickedText} text="c" idc="textButton" />
          <Button callBackFn={getClickedText} text="d" idc="textButton" />
          <Button text="e" />
          <Button text="f" />
          <Button text="g" />
          <Button text="h" />
          <Button text="i" />
          <Button text="j" />
          <Button text="k" />
          <Button text="l" />
          <Button text="m" />
          <Button text="n" />
          <Button text="o" />
          <Button text="p" />
          <Button text="q" />
          <Button text="r" />
          <Button text="s" />
          <Button text="t" />
          <Button text="u" />
          <Button text="v" />
          <Button text="w" />
          <Button text="x" />
          <Button text="y" />
          <Button text="z" />
        </div>
      </div>
    </>
  )
}

export default App
