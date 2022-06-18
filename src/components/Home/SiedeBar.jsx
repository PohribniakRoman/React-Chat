import { useState } from "react";
import { Form, Offcanvas } from "react-bootstrap";
import Contact from "./Contact";
import Menu from "./Menu";
import SearchList from "./menu__items/SearchList";

export default function SideBar() {
  const [show, setShow] = useState(false);
  const [searchList, updtaeSearchList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="sidebar">
      <div className="sidebar__nav mt-3 mb-2">
        <div className="sidebar__menu" onClick={handleShow}>
          <span></span>
        </div>
        <Form.Control
          type="text"
          size="sm"
          id="search"
          style={{backgroundColor:"#f5f5f5",border:"none"}}
          placeholder="Search"
          onInput={(e)=>{
            const toFind = e.target.value.toLowerCase(); 
            if(toFind.trim()){
            const arr = ["roman pohribniak","lamer","assdasdasdas","eeeeeee","qweqweqweee","roman gay"]
            const sort = arr.map(name=>{
            const diff = name.length - toFind.length; 
              if(diff >= 0){
                for(let i = 0;i <= diff;i++){
                  const compare = name.split("").splice(i,toFind.length).join("");
                  if(toFind === compare){
                    return name
                  }
                }
              }
              return null
            })
            const res = [];
            sort.forEach(e=>{if(e){res.push(e)}})
            updtaeSearchList([...res]);
          }else{
            updtaeSearchList([]);

          }
          }}
        />
      </div>
      {searchList.length === 0? "":<SearchList users={searchList}/>}
        <Contact title={"Roman Pohribniak"} avatar={"https://lh3.googleusercontent.com/ogw/ADea4I7NtRPcp7qRVbLmZB4kVLBw59I0sIrWbWulWA3w7A=s32-c-mo"} lastMessage="Hello,it's me!" date="12.02.2012"/>

      <Offcanvas show={show} onHide={handleClose}>
        <Menu />
      </Offcanvas>
    </div>
  );
}
