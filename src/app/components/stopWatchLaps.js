import React, { useEffect, useState } from "react";
import {
  formatTimeStamp,
  getHighestTimeStamp,
  getLowestTimeStamp,
  timeStampDiff,
} from "../helpers/utils";
import { LapItem, List } from "../styles/componentStyles";

const StopWatchLaps = (props) => {
  const { stopWatchDetials } = props;

  const highestTimeStampIndex = stopWatchDetials
    ? getHighestTimeStamp(stopWatchDetials.started, stopWatchDetials.laps)
    : null;
  const lowestTimeStampIndex = stopWatchDetials
    ? getLowestTimeStamp(stopWatchDetials.started, stopWatchDetials.laps)
    : null;

  return (
    <List noPad>
      {stopWatchDetials.laps.length > 0 &&
        stopWatchDetials.laps
          .map((item, index) => (
            <LapItem
              key={index}
              color={
                stopWatchDetials.laps.length > 1 &&
                highestTimeStampIndex === index
                  ? "#4dcb63"
                  : stopWatchDetials.laps.length > 1 &&
                    lowestTimeStampIndex === index
                  ? "#ff2323"
                  : null
              }
            >
              <span>Lap {index}</span>
              <div
                dangerouslySetInnerHTML={{
                  __html: formatTimeStamp(stopWatchDetials.started, item),
                }}
              />
            </LapItem>
          ))
          .reverse()}
    </List>
  );
};

export default StopWatchLaps;
