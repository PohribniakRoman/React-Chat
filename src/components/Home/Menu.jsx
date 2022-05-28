import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import ModelTemplate from "./menu__items/ModelTemplate";
import { FcContacts } from 'react-icons/fc';
import { FcSettings } from 'react-icons/fc';
import { FcImport } from 'react-icons/fc';
import { BsDot } from 'react-icons/bs';
import { FcNightPortrait } from 'react-icons/fc';

export default function Menu() {
  const [modalShow, setModalShow] = useState([false,null]);

  return (
    <>
      <Offcanvas.Header>
        <div className="menu__cont">
          <div className="menu__icon"></div>
          <div className="menu__cont--info">
            <div className="menu__name">Roman Pohribniak</div>
            <div className="menu__status"><BsDot/><span>Online</span></div>
          </div>
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className="menu">
          <li onClick={() => setModalShow([true,"contacts"])}><FcContacts/> Contacts</li>
          <li onClick={() => setModalShow([true,"settings"])}><FcSettings/> Settings</li>
          <li ><FcNightPortrait/> Night mode</li>
          <li><FcImport/> Log out</li>
        </ul>
      </Offcanvas.Body>

      <ModelTemplate
        show={modalShow[0]}
        content={modalShow[1]}
        onHide={() => setModalShow([false,null])}
      />
    </>
  );
}
