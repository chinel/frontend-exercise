import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/stopWatch.context";
import { formatTimeStamp } from "../helpers/utils";
import { Timer } from "../styles/componentStyles";

const StopWatchTimer = ({ stopWatchDetials, runningStopWatches }) => {
  const { state } = useContext(AppContext);

  const [timer, setTimer] = useState(stopWatchDetials.started);

  useEffect(() => {
    let interval;

    if (
      stopWatchDetials &&
      runningStopWatches.includes(stopWatchDetials.__id)
    ) {
      interval = setInterval(() => {
        setTimer((time) => time + 1);
      }, 1);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, state]);
  return (
    <Timer
      dangerouslySetInnerHTML={{
        __html: formatTimeStamp(timer),
      }}
    ></Timer>
  );
};

export default StopWatchTimer;
