import { useEffect, useState } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }
    , 1000);
    return () => clearInterval(id);
  }, []);

  return { time };
};