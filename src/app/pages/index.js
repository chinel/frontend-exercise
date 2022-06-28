import React from "react";
import PauseIcon from "../icons/pauseIcon";
import Master from "../layout/master";
import { Button, List, ListItem } from "../styles/componentStyles";
const HomePage = () => {
  return (
    <Master>
      <Button>New</Button>
      <List>
        <ListItem>Hello</ListItem>
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
