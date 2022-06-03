import {AiOutlineSearch} from "react-icons/ai"
import {IoMdCall} from "react-icons/io"
import {BiFoodMenu} from "react-icons/bi"
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export default function ChatHeader({name,onlineStatus,}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


return <div className="chat__header">
      <div className="chat__header--wrap">
      <div className="chat__header--content">
        <div className="chat__header--content-name">{name}</div>
        <div className="chat__header--content-status">{onlineStatus}</div>
      </div>
      <div className="chat__header--controls">
        <div className="chat__header--controls-search"><AiOutlineSearch/></div>
        <div className="chat__header--controls-call"><IoMdCall /></div>
        <div className="chat__header--controls-info" onClick={handleShow} ><BiFoodMenu/></div>
      </div>
      </div>
      <Offcanvas placement="end" show={show} onHide={handleClose} >
        <Offcanvas.Header>
          <Offcanvas.Title>{name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        </Offcanvas.Body>
      </Offcanvas>

    </div>;
  }
  