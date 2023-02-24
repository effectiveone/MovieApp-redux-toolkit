import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "#0d2035" : "transparent",
      color: trigger ? "white" : "black",
      transition: trigger ? "0.3s" : "1.5s",
      boxShadow: "none",
      padding: "10px 0px",
    },
  });
};

const ScrollToChangeColor = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToChangeColor;
