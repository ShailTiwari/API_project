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
} from 'react-bootstrap'
class Lex extends React.Component { 
  constructor()
  {
    super();
    this.state={    
      sessionkey:false,    
      input:false,    
      messages:false,
      messagesDiv:false,
      show:false,
      handleClose:false,
      engine:"",
      language:"",
      voice:"",
      inputtext:"",

    }
  
  }

  componentDidMount()
  {(
    function(d, m){
    var kommunicateSettings = {"appId":"2e64faa2a71626fed9b3ed52df22e4453","popupWidget":true,"automaticChatOpenOnNavigation":true};
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
  }

  
  render()
  {
    return (
      <div className="col-9 border-left" id="popup-content">
      <div className="modal-header">
          <h5 className="modal-title text-primary open-sans fw-bold" id="newModalLabel">
            Conversational interfaces
          </h5>
          <button   onClick={this.handleClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
 
 
        <div className="modal-body">
        </div>       
      </div>
   );
  }  
}
export default Lex;
