import ChatBody from "./chat/ChatBody";
import ChatFooter from "./chat/ChatFooter";
import ChatHeader from "./chat/ChatHeader";
import socket from "../../ws";

export default function Chat() {
    socket.emit("msgToClient")
    
    return <div className="chat">
        <ChatHeader name={"Alisa"} onlineStatus={"last seen recently"}/>
        <ChatBody/>
        <ChatFooter/>
    </div>
}