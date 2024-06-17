import { useState, useEffect, useRef } from 'react'
import './App.css'
import Timer from './components/Timer/Timer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  const [count, setCount] = useState(0);
  const [showTimer, setShowTimer] = useState(false)

  const persistantValue = useRef();

  useEffect(() => {
    // console.log("count Changed", count);
  }, [count])

  // useEffect(() => {
  //   console.log("Tuscias use Effect array");

  //   return () => {
  //     console.log("Cleanup");
  //   }
  // }, [])

  function handleClick() {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <button onClick={() => persistantValue.current = 9}>change useRef value</button>
      <button onClick={() => console.log(persistantValue.current)}>log persistantValue</button>
      <button onClick={handleClick}>click me</button>
      <h1>{count}</h1>
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      {
        showTimer && <Timer />
      }
      <VideoPlayer />
    </div>
  )
}

export default App
