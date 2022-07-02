import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/stopWatch.context";
import { formatTimeStamp } from "../helpers/utils";
import PauseIcon from "../icons/pauseIcon";
import { ListItem } from "../styles/componentStyles";

const StopWatchListItem = ({ item }) => {
  const history = useHistory();
  const { state } = useContext(AppContext);
  const [timer, setTimer] = useState(null);
  const runningStopWatches = state?.runningStopWatches;

  const stopWatchDetails = (id) => {
    history.push(`/stopWatch/${id}`);
  };

  useEffect(() => {
    let interval;

    if (runningStopWatches.includes(item.__id)) {
      interval = setInterval(() => {
        setTimer((time) => time + 1);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <ListItem
      active={runningStopWatches.includes(item.__id)}
      onClick={() => stopWatchDetails(item.__id)}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: formatTimeStamp(item.started),
        }}
      />
      {runningStopWatches.includes(item.__id) && <PauseIcon />}
    </ListItem>
  );
};

export default StopWatchListItem;
