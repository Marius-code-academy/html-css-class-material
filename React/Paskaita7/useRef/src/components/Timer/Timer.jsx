import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  const timerIntervalRef = useRef();

  useEffect(() => {
    timerIntervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    console.log("uzdeda intervala");

    return () => {
      clearInterval(timerIntervalRef.current);
    };
  }, []);

  return (
    <div>
      <h3>{time}</h3>
      <button
        onClick={() => {
          clearInterval(timerIntervalRef.current);
          console.log(timerIntervalRef.current);
          timerIntervalRef.current = null;
        }}
      >
        Pause timer
      </button>
      <button
        onClick={() => {
          if (!timerIntervalRef.current) {
            timerIntervalRef.current = setInterval(() => {
              setTime((prev) => prev + 1);
            }, 1000);
          }
        }}
      >
        Play timer
      </button>
    </div>
  );
}
