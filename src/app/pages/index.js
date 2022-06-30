import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PauseIcon from "../icons/pauseIcon";
import Master from "../layout/master";
import { fetchStopWatches } from "../services/stopwatch.service";
import { Button, List, ListItem } from "../styles/componentStyles";
const HomePage = () => {
  const history = useHistory();
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [stopWatches, setStopWatches] = useState([]);
  const stopWatchDetails = (id) => {
    history.push({
      pathname: "/stopWatch",
      ...(id && { state: { id } }),
    });
  };
  console.log(totalPages);
  console.log(currentPage);
  const fetchMoreStopWatches = () => {
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStopWatches(currentPage);
      const res = await data.json();
      setCurrentPage(res.meta.currentPage);
      setTotalPages(res.meta.totalPages);
      setStopWatches((prev) => [...prev, ...res.result]);
    };

    fetchData();
  }, [currentPage]);
  return (
    <Master>
      <Button onClick={() => stopWatchDetails()}>New</Button>
      <List>
        <ListItem onClick={() => stopWatchDetails(1)}>Hello</ListItem>
        <ListItem>Hello</ListItem>
        <ListItem active={true}>
          Hello <PauseIcon />
        </ListItem>
      </List>

      {currentPage !== totalPages && (
        <Button onClick={fetchMoreStopWatches}>More</Button>
      )}
    </Master>
  );
};

export default HomePage;
