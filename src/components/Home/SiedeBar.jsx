import { useState } from "react";
import { Form, Offcanvas } from "react-bootstrap";
import Contact from "./Contact";
import Menu from "./Menu";

export default function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="sidebar">
      <div className="sidebar__nav mt-3 mb-2">
        <div className="sidebar__menu" onClick={handleShow}>
          <span></span>
        </div>
        <Form.Control
          type="password"
          size="sm"
          id="search"
          placeholder="Search"
        />
      </div>

        <Contact title={"Roman Pohribniak"} avatar={"https://lh3.googleusercontent.com/ogw/ADea4I7NtRPcp7qRVbLmZB4kVLBw59I0sIrWbWulWA3w7A=s32-c-mo"} lastMessage="Hello,it's me!" date="12.02.2012"/>

      <Offcanvas show={show} onHide={handleClose}>
        <Menu />
      </Offcanvas>
    </div>
  );
}
