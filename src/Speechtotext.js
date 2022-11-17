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
function Speechtotext() 


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
         <h5 className="modal-title text-primary open-sans fw-bold" id="newModalLabel">
              Speech to Text Demonstration
         </h5>
         <button   onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>


       <div className="modal-body">
       </div>       
     </div>
  );
}




export default Speechtotext;
