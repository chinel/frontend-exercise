import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/stopWatch.context";
import { formatTimeStamp } from "../helpers/utils";
import Master from "../layout/master";
import {
  createStopWatch,
  fetchStopWatches,
} from "../services/stopwatch.service";
import {
  Button,
  ErrorMessage,
  List,
  ListItem,
  Loader,
} from "../styles/componentStyles";

const HomePage = () => {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [stopWatches, setStopWatches] = useState([]);
  const [error, setError] = useState("");

  const stopWatchDetails = (id) => {
    history.push(`/stopWatch/${id}`);
  };

  const newStopWatch = async () => {
    try {
      const timeStamp = new Date().getTime();
      console.log({ started: timeStamp });
      const data = await createStopWatch({ started: timeStamp });
      const res = await data.json();
      dispatch({
        type: "ADD_STOP_WATCH",
        payload: res.__id,
      });
      history.push(`/stopWatch/${res.__id}`);
    } catch (error) {
      setError("Unable to create stop watch!!. Try refreshing the page");
    }
  };

  const fetchMoreStopWatches = () => {
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStopWatches(currentPage);
        const res = await data.json();
        if (data.ok) {
          setCurrentPage(res.meta.currentPage);
          setTotalPages(res.meta.totalPages);
          setStopWatches((prev) => [...prev, ...res.result]);
          setError("");
        }
      } catch (error) {
        setError("Oops an error occured!!. Try refreshing the page");
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <Master>
      <Button onClick={newStopWatch}>New</Button>
      <List>
        {stopWatches.length > 0 ? (
          stopWatches.map((item, index) => (
            <ListItem key={index} onClick={() => stopWatchDetails(item_._id)}>
              {formatTimeStamp(item.started)}
            </ListItem>
          ))
        ) : (
          <Loader />
        )}

        {/* <ListItem active={true}>
          Hello <PauseIcon />
        </ListItem> */}
      </List>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {stopWatches.length > 0 && currentPage !== totalPages && (
        <Button onClick={fetchMoreStopWatches}>More</Button>
      )}
    </Master>
  );
};

export default HomePage;
