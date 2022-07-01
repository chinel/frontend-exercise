import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { formatTimeStamp } from "../helpers/utils";
import PauseIcon from "../icons/pauseIcon";
import Master from "../layout/master";
import { fetchStopWatches } from "../services/stopwatch.service";
import {
  Button,
  ErrorMessage,
  List,
  ListItem,
  Loader,
  loadingAnimation,
} from "../styles/componentStyles";

const HomePage = () => {
  const history = useHistory();
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [stopWatches, setStopWatches] = useState([]);
  const [error, setError] = useState("");
  const stopWatchDetails = (id) => {
    history.push({
      pathname: "/stopWatch",
      ...(id && { state: { id } }),
    });
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
      <Button onClick={() => stopWatchDetails()}>New</Button>
      <List>
        {stopWatches.length > 0 ? (
          stopWatches.map((item) => (
            <ListItem
              key={item._id}
              onClick={() => stopWatchDetails(item_._id)}
            >
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
