import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h3>Welcome to the hangman game</h3>

        <div className='button--div'>
          <Button text="a" />
          <Button text="b" />
          <Button text="c" />
          <Button text="d" />
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
