import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import StopWatchListItem from "../components/stopWatchListItem";
import { AppContext } from "../context/stopWatch.context";
import useFetchStopWatches from "../helpers/useFetchStopWatches";
import Master from "../layout/master";
import { createStopWatch } from "../services/stopwatch.service";
import {
  Button,
  ErrorMessage,
  List,
  Loader,
  ProgressMessage,
} from "../styles/componentStyles";

const HomePage = () => {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(false);
  const { fetchMoreStopWatches, totalPages, currentPage, stopWatches } =
    useFetchStopWatches(setError);

  const newStopWatch = async () => {
    setProgress(true);
    try {
      const timeStamp = new Date().getTime();
      const data = await createStopWatch({ started: timeStamp });
      const res = await data.json();
      setProgress(false);
      dispatch({
        type: "ADD_STOP_WATCH",
        payload: res.__id,
      });
      history.push(`/stopWatch/${res.__id}`);
    } catch (error) {
      setError("Unable to create stop watch!!. Try refreshing the page");
      setProgress(false);
    }
  };

  return (
    <Master>
      <Button onClick={newStopWatch}>New</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {progress && <ProgressMessage>Processing...</ProgressMessage>}
      <List>
        {stopWatches.length > 0 ? (
          stopWatches.map((item, index) => (
            <StopWatchListItem key={index} item={item} />
          ))
        ) : (
          <Loader />
        )}
      </List>

      {stopWatches.length > 0 && currentPage !== totalPages && (
        <Button onClick={fetchMoreStopWatches}>More</Button>
      )}
    </Master>
  );
};

export default HomePage;
