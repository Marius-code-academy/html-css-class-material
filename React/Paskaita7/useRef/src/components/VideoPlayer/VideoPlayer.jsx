import { useRef } from "react"

export default function VideoPlayer() {

  // Senas budas
  const videoPlayer = document.querySelector("video");
  // Naujas budas
  const videoPlayerRef = useRef()

  return (
    <div>
      <video ref={videoPlayerRef} src="/src/assets/videoplayback.mp4"></video>
      <br />
      <button onClick={() => videoPlayerRef.current.play()}>Play</button>
      <button onClick={() => videoPlayerRef.current.pause()}>Pause</button>
    </div>
  )
}
