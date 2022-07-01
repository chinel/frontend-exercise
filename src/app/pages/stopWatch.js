import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { formatTimeStamp } from "../helpers/utils";
import Master from "../layout/master";
import { fetchStopWatch } from "../services/stopwatch.service";
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
  const { id } = useParams();
  const [stopWatchDetials, setStopWatchDetails] = useState(null);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(null);

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

    if (stopWatchDetials) {
      interval = setInterval(() => {
        setTimer((time) => time + 1);
      }, 1);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

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
              <Button color="#340e0d" textColor="#fd4438">
                Stop
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
            <Button>Reset</Button>
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
