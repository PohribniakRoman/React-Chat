import { Offcanvas } from "react-bootstrap";


export default function Menu() {
  return (
    <>
      <Offcanvas.Header>
        <div className="menu__cont">
          <div className="menu__icon"></div>
          <div className="menu__cont--info">
            <div className="menu__name">Roman Pohribniak</div>
            <div className="menu__status">Online</div>
          </div>
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul>
          <li>Contacts</li>
          <li>Settings</li>
          <li>Night mode</li>
          <li>Log out</li>
        </ul>
      </Offcanvas.Body>
    </>
  );
}
