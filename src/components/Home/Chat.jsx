import ChatBody from "./chat/ChatBody";
import ChatFooter from "./chat/ChatFooter";
import ChatHeader from "./chat/ChatHeader";

export default function Chat() {
    return <div className="chat">
        <ChatHeader name={"Alisa"} onlineStatus={"last seen recently"}/>
        <ChatBody/>
        <ChatFooter/>
    </div>
}