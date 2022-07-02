import React, { memo, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import StopWatchLaps from "../components/stopWatchLaps";
import { AppContext } from "../context/stopWatch.context";
import useHandleStopWatchEvents from "../helpers/useHandleStopWatchEvents";
import {
  formatTimeStamp,
  getHighestTimeStamp,
  timeStampDiff,
} from "../helpers/utils";
import Master from "../layout/master";
import {
  createStopWatchLaps,
  deleteStopWatch,
  fetchStopWatch,
  resetStopWatch,
  toggleStopWatch,
} from "../services/stopwatch.service";
import {
  Button,
  ButtonWrapper,
  DeleteButton,
  ErrorMessage,
  LapItem,
  List,
  Loader,
  ProgressMessage,
  Timer,
} from "../styles/componentStyles";

const StopWatchPage = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const [stopWatchDetials, setStopWatchDetails] = useState(null);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(null);
  const [progress, setProgress] = useState(false);
  const runningStopWatches = state?.runningStopWatches;
  const { createLaps, deleteWatch, pauseOrResumeStopWatch, resetWatch } =
    useHandleStopWatchEvents(
      setProgress,
      setError,
      runningStopWatches,
      fetchStopWatchDetails
    );

  const fetchStopWatchDetails = async () => {
    try {
      const data = await fetchStopWatch(id);
      const res = await data.json();
      if (data.ok) {
        console.log(res);
        setStopWatchDetails(res.result);
        setTimer(res.result.started);
        setError("");
      }
    } catch (error) {
      setError("Oops an error occured!!. Try refreshing the page");
    }
  };

  useEffect(() => {
    fetchStopWatchDetails();
  }, [id]);

  useEffect(() => {
    let interval;

    if (runningStopWatches.includes(stopWatchDetials?.__id)) {
      interval = setInterval(() => {
        setTimer((time) => time + 1);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, state]);

  return (
    <Master>
      {stopWatchDetials ? (
        <React.Fragment>
          {/*timer*/}
          <Timer
            dangerouslySetInnerHTML={{
              __html: formatTimeStamp(timer),
            }}
          ></Timer>
          <ButtonWrapper>
            <Button onClick={createLaps}>Lap</Button>
            <Button
              onClick={pauseOrResumeStopWatch}
              color={
                runningStopWatches.includes(stopWatchDetials.__id)
                  ? "#340e0d"
                  : "#19340d"
              }
              textColor={
                runningStopWatches.includes(stopWatchDetials.__id)
                  ? "#fd4438"
                  : "#56fd38"
              }
            >
              {runningStopWatches.includes(stopWatchDetials.__id)
                ? " Stop"
                : "Start"}
            </Button>
          </ButtonWrapper>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {progress && <ProgressMessage>Processing...</ProgressMessage>}

          <StopWatchLaps stopWatchDetials={stopWatchDetials} />

          <DeleteButton onClick={deleteWatch}>Delete</DeleteButton>

          <ButtonWrapper>
            <Button onClick={() => history.push("/")}>Home</Button>
            <Button onClick={resetWatch}>Reset</Button>
          </ButtonWrapper>
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </Master>
  );
};

export default memo(StopWatchPage);
