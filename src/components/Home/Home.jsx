import Chat from "./Chat";
import SideBar from "./SiedeBar";

export default function Home() {
  return (
    <div className="home">
      <SideBar />
      <Chat />
    </div>
  );
}
