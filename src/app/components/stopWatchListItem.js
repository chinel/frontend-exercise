import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/stopWatch.context";
import useHandleStopWatchTimer from "../helpers/useHandleStopWatchTimer";
import { formatTimeStamp } from "../helpers/utils";
import PauseIcon from "../icons/pauseIcon";
import { ListItem } from "../styles/componentStyles";

const StopWatchListItem = ({ item }) => {
  const history = useHistory();
  const { state } = useContext(AppContext);
  const runningStopWatches = state?.runningStopWatches;
  useHandleStopWatchTimer(runningStopWatches, item.__id, state);
  const stopWatchDetails = (id) => {
    history.push(`/stopWatch/${id}`);
  };

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
