import { useState } from "react"

export default function DisplayInput({ text, value, handleBlur }) {
  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  function handleClickText() {
    setShowInput(true)
  }

  function handleInputBlur() {
    setShowInput(false);
    handleBlur(inputValue)
  }

  return (
    <>
    {
      showInput ? <input onBlur={handleInputBlur} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> : <p onClick={handleClickText}>{text}</p>
    }
    </>
  )
}
