import React from "react";
import { useHistory } from "react-router-dom";
import PauseIcon from "../icons/pauseIcon";
import Master from "../layout/master";
import { Button, List, ListItem } from "../styles/componentStyles";
const HomePage = () => {
  const history = useHistory();
  const stopWatchDetails = (id) => {
    history.push({
      pathname: "/stopWatch",
      ...(id && { state: { id } }),
    });
  };

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
      <Button>More</Button>
    </Master>
  );
};

export default HomePage;
