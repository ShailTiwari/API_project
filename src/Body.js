import './Home.css';
import './all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component,useState, useEffect } from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import {
  Container, Row, Col, Form, InputGroup ,Modal ,Tab,Tabs, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'react-bootstrap';
import Modalbox from './Modalbox';
function Main(props) 
{
  
  const list = [
    // {id: 1, path: 'Textextract', border: 'border-secondary', title: 'Text extraction from image', content: 'Image to text'},
    // {id: 2, path: 'Speechtotext', border: 'border-primary', title: 'Speech to text', content: 'Speech to text'},
    // {id: 4, path: 'ImageRecognition', border: 'border-danger', title: 'Image recognition', content: 'Object recognition from image'},
    // {id: 5, path: 'Comprehend', border: 'border-danger', title: 'Comprehend', content: 'Comprehend'},
    {id: 3, path: 'Texttospeech', border: 'border-warning', title: 'Text to speech', content: 'Text to speech'},
    {id: 6, path: 'Translate', border: 'border-success', title: 'Translate', content: ' customizable language translation'},
    {id: 7, path: 'Chatbot', border: 'border-defult', title: 'Chatbot', content: 'DevOps and software development chatbot'}
  ];  




  
  return (
    <div className="w-100">   
    <hr/>
    <div className="">
      <p className="text-uppercase fs-96 fw-light d-inline-block font-oswald mb-0">Explore</p>

      <div className="d-inline-block bs-dotted ms-32p ps-32">
        <p className="fs-48 font-oswald">160 </p>
        <p className="font-montserrat fs-16">APIs</p>
      </div>

      <div className="d-inline-block bs-dotted ms-32p ps-32">
        <p className="fs-48 font-oswald">24</p>
        <p className="font-montserrat fs-16">Platforms</p>
      </div>

      <div className="d-inline-block bs-dotted ms-32p ps-32">
        <p className="fs-48 font-oswald">200</p>
        <p className="font-montserrat fs-16">Resources</p>
      </div>
    </div>

    <hr/>

    <div className="mt-80p" id="search">
      <p className="open-sans fs-12 fw-bold">Search for an API</p>
    </div>
      
    {/* <Modalbox list={list} searchBar={props.ref} /> */}
    {console.log(props)}
    <Modalbox list={list} searchBar={props} />
    </div>
  );
}




export default Main;
