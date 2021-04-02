import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./MessageSender.css";
import SidebarRow from "./SidebarRow";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //some db stuff

    setInput("");
    setImageURL("");
  };

  return (
    <div className="MessageSender">
      <div className="MessageSender__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="MessageSender__input"
            placeholder="what is in your mind ?"
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Image Uploader (optional)"
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="MessageSender__bottom">
        <div className="MessageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>
        <div className="MessageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h4>Photos/Videos</h4>
        </div>
        <div className="MessageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h4>Live Video</h4>
        </div>
      </div>
      
    </div>
  );
}

export default MessageSender;
