import { useState } from "react"

export default function Counter({ render, stuff }) {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      {render(value)}
      {stuff}
    </div>
  )
}
