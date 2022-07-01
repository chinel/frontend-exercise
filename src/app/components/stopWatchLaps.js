import React from "react";
import { timeStampDiff } from "../helpers/utils";
import { LapItem, List } from "../styles/componentStyles";

const StopWatchLaps = (props) => {
  const { stopWatchDetials } = props;
  const laps = stopWatchDetials ? stopWatchDetials.laps.reverse() : [];

  return (
    <List noPad>
      {stopWatchDetials.laps.length > 0 &&
        laps.map((item, index) => (
          <LapItem key={index}>
            <span>Lap {stopWatchDetials.laps.length - index}</span>
            <div
              dangerouslySetInnerHTML={{
                __html: timeStampDiff(stopWatchDetials.started, item),
              }}
            />
          </LapItem>
        ))}
    </List>
  );
};

export default StopWatchLaps;
