import { useEffect, useState } from "react";

export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({})

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    })
  }, [])

  return dimensions;

}