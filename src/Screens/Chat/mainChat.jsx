import { ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import ChatScreen from "./ChatScreen";
import "./mainChat.css";

export default function MainChat() {
  const [minimised, setMinimised] = useState(true);
  const [toggle, showToggle] = useState(true);
  return (
    <div className={minimised ? "chat__minimised" : "chat"}>
      <div
        className={`toggle__arrow ${!minimised ? `` : `hidden`}`}
        onMouseEnter={() => showToggle(true)}
        onMouseLeave={() => showToggle(false)}
      >
        <div
          className="arrow__div"
          style={{
            height: "50%",
            display: !minimised ? "flex" : "none",
            color: toggle ? "black" : "transparent",
          }}
          onClick={() => setMinimised(true)}
        >
          <ArrowRight />
        </div>
      </div>
      <ChatScreen minimised={minimised} setMinimised={setMinimised} />
    </div>
  );
}