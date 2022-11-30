import './Home.css';
import './all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component,useState, useEffect } from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import 
{
  Container, Row, Col, Form, InputGroup ,Modal ,Tab,Tabs, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'react-bootstrap';
function Comprehend(props) 
{  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [engine, setEngine] = useState(""); 
  const [language, setLanguage] = useState(""); 
  const [voice, setVoice] = useState(""); 
  const [inputtext, setInputext] = useState(""); 

  return (
     <div className="col-9 border-left" id="popup-content">
     <div className="modal-header">
     <h5 className="modal-title text-primaryy open-sans fw-bold" id="newModalLabel">
         Comprehend  Demonstration
         </h5>
         <button  onClick={() => props.setShow(false)} type="button" className="btn-close"  ></button>
     </div>


       <div className="modal-body">
       </div>       
     </div>
  );
}
export default Comprehend;
