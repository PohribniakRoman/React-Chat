import { useState } from "react";
import { GrEmoji } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import Emoji from "./Emoji";

function sendMessageByEnter(messageValue, setMessageValue, setHeight, event) {
  if (
    event.key === "Enter" &&
    !event.shiftKey &&
    messageValue.trim().length > 0
  ) {
    setMessageValue("");
    setHeight(50);
    event.target.style.height = "21px";
  }
}

function sendMessage(messageValue, setMessageValue){
  if(messageValue.trim().length > 0){
    setMessageValue("");
  }
}

function setTextareaHeight(setHeight, setMessageValue, event) {
  const element = event.target;
  setMessageValue(element.value);
  element.style.height = "0px";
  element.style.height = `${element.scrollHeight}px`;
  setHeight(29 + element.scrollHeight);
}

export default function ChatFooter() {
  const [height, setHeight] = useState(29);
  const [isEmojiListShown, setEmojiListStatus] = useState(false);
  const [messageValue, setMessageValue] = useState("");

  return (
    <div className="chat__footer" style={{ height: `${height}px` }}>

      <div className="chat__footer--input">
        <textarea
          placeholder="Write a message..."
          className="chat__footer--message"
          value={messageValue}
          onInput={(e) => {setTextareaHeight(setHeight, setMessageValue, e)}}
          onKeyUp={(e) => {sendMessageByEnter(messageValue, setMessageValue, setHeight, e);}}/>
      </div>
      
      <div className="chat__footer--emoji">
        <GrEmoji onClick={() => {setEmojiListStatus(!isEmojiListShown)}}/>
        <div className="chat__footer--emoji-model" style={{ display: `${isEmojiListShown ? "" : "none"}` }}>
          <Emoji value={messageValue} updateFunc={setMessageValue} />
        </div>
      </div>
      
      <div className="chat__footer--sendmsg" onClick={()=>{
        sendMessage(messageValue, setMessageValue)
      }}>
        <FiSend />
      </div>
    </div>
  );
}
