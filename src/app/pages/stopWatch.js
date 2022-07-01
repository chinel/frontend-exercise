import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AppContext } from "../context/stopWatch.context";
import { formatTimeStamp } from "../helpers/utils";
import Master from "../layout/master";
import {
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
  Timer,
} from "../styles/componentStyles";

const StopWatchPage = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const [stopWatchDetials, setStopWatchDetails] = useState(null);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(null);
  const runningStopWatches = state.runningStopWatches;

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

  const pauseOrResumeStopWatch = async () => {
    runningStopWatches.includes(stopWatchDetials.__id)
      ? dispatch({
          type: "REMOVE_STOP_WATCH",
          payload: stopWatchDetials.__id,
        })
      : dispatch({
          type: "ADD_STOP_WATCH",
          payload: stopWatchDetials.__id,
        });
    try {
      const timeStamp = new Date().getTime();
      await toggleStopWatch({ time: timeStamp }, stopWatchDetials.__id);
      await fetchStopWatchDetails();
    } catch (error) {
      console.log(error);
      setError("Unable to toggle stop watch!!. Try refreshing the page");
    }
  };

  const resetWatch = async () => {
    try {
      const timeStamp = new Date().getTime();
      await resetStopWatch({ started: timeStamp }, stopWatchDetials.__id);
      await fetchStopWatchDetails();
    } catch (error) {
      console.log(error);
      setError("Unable to reset stop watch!!. Try refreshing the page");
    }
  };

  return (
    <Master>
      {stopWatchDetials ? (
        <React.Fragment>
          <Timer
            dangerouslySetInnerHTML={{
              __html: formatTimeStamp(timer),
            }}
          ></Timer>
          <ButtonWrapper>
            <ButtonWrapper>
              <Button>Lap</Button>
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
          </ButtonWrapper>
          <List noPad>
            {stopWatchDetials.laps.length > 0 &&
              stopWatchDetials.laps.map((item, index) => (
                <LapItem key={index}>
                  <span>Lap 1</span>
                  <span>10:0:0:302</span>
                </LapItem>
              ))}
          </List>

          <DeleteButton>Delete</DeleteButton>

          <ButtonWrapper>
            <Button onClick={() => history.push("/")}>Home</Button>
            <Button onClick={resetWatch}>Reset</Button>
          </ButtonWrapper>
        </React.Fragment>
      ) : (
        <Loader />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Master>
  );
};

export default StopWatchPage;
