import { Modal } from "react-bootstrap";
import ContactsContent from "./ContactsContent";
import SettingsContent from "./SettingsContent";

export default function ModelTemplate(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.content === "contacts"?<ContactsContent/>:null}
      {props.content === "settings"?<SettingsContent/>:null}
    </Modal>
  );
}