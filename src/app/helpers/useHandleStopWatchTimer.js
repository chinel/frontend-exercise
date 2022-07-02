import { useEffect, useState } from "react";

const useHandleStopWatchTimer = (runningStopWatches, id, state) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    let interval;

    if (runningStopWatches.includes(id)) {
      interval = setInterval(() => {
        setTimer((time) => time + 1);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, state]);

  return { timer, setTimer };
};

export default useHandleStopWatchTimer;
