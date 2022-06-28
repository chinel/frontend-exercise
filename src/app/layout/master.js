import React from "react";
import { AppLayout } from "../styles/layoutStyles";
const Master = (props) => {
  return <AppLayout>{props.children}</AppLayout>;
};

export default Master;
