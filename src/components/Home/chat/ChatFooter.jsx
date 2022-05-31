import { useState } from "react";
import { ImAttachment } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FiSend } from "react-icons/fi";

export default function ChatFooter() {
  const [height, setHeight] = useState(29);
  const [isInputNull, updateInputStatus] = useState(true);

  return (
    <div className="chat__footer" style={{ height: `${height}px` }}>
      <div className="chat__footer--attach">
        <ImAttachment />
      </div>
      <div className="chat__footer--input">
        <textarea
          className="chat__footer--message"
          onInput={(e) => {
            e.target.style.height = "0px";
            e.target.style.height = `${e.target.scrollHeight}px`;
            setHeight(29 + e.target.scrollHeight);
            if (e.target.value.trim() !== "") {
              updateInputStatus(false);
            } else {
              updateInputStatus(true);
            }
          }}
          onKeyPress={e=>{
            if(e.key === "Enter" && !e.shiftKey){
              e.target.value = " "
            }
          }}
          placeholder="Write a message..."
        />
      </div>
      <div className="chat__footer--emoji">
        <GrEmoji />
      </div>
      {isInputNull ? (
        <div className="chat__footer--audio">
          <MdOutlineKeyboardVoice />
        </div>
      ) : (
        <div className="chat__footer--sendmsg">
          <FiSend />
        </div>
      )}
    </div>
  );
}
