import './Home.css';
import './all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component,useState, useEffect } from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import 
{
  Container, Row, Col, Form, InputGroup ,Modal ,Tab,Tabs,ListGroup, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'react-bootstrap';
function Chatbot(props) 
{  

  const [show, setShow] = useState(false);
  const [engine, setEngine] = useState(""); 
  const [language, setLanguage] = useState(""); 
  const [voice, setVoice] = useState(""); 
  const [inputtext, setInputext] = useState(""); 
  const handleClose = () => setShow(false);
// console.log(props);
  return (
     <div className="col-9 border-left" id="popup-content">
     <div className="modal-header">
         <h5 className="modal-title text-primaryy open-sans fw-bold" id="newModalLabel">
         Chatbot for DevOps and software development
         </h5>
         <button  onClick={() => props.setShow(false)} type="button" className="btn-close"  ></button>
     </div>


       <div className="modal-body">
          <ListGroup>
            <ListGroup.Item  variant="info" >Use Lex Chatbot and get activity in Slack useing chatbot DevOps    
              <a href='https://app.slack.com/client/T04D242HA3T/C04CM2QC6AZ' target="_blank">
                <Button variant="success">Open Slack</Button>{' '} 
              </a> 
            </ListGroup.Item>
          </ListGroup>
       </div>       
     </div>
  );
}
export default Chatbot;
