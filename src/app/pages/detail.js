import React from "react";
import Master from "../layout/master";
import {
  Button,
  ButtonWrapper,
  DeleteButton,
  LapItem,
  List,
  Timer,
} from "../styles/componentStyles";

const DetailsPage = () => {
  return (
    <Master>
      <Timer>00:00:00.320</Timer>
      <ButtonWrapper>
        <ButtonWrapper>
          <Button>Lap</Button>
          <Button color="#340e0d" textColor="#fd4438">
            Stop
          </Button>
        </ButtonWrapper>
      </ButtonWrapper>
      <List noPad>
        <LapItem>
          <span>Lap 1</span>
          <span>10:0:0:302</span>
        </LapItem>
        <LapItem>
          <span>Lap 1</span>
          <span>10:0:0:302</span>
        </LapItem>
        <LapItem>
          <span>Lap 1</span>
          <span>10:0:0:302</span>
        </LapItem>
        <LapItem>
          <span>Lap 1</span>
          <span>10:0:0:302</span>
        </LapItem>
      </List>

      <DeleteButton>Delete</DeleteButton>

      <ButtonWrapper>
        <Button>Home</Button>
        <Button>Reset</Button>
      </ButtonWrapper>
    </Master>
  );
};

export default DetailsPage;
