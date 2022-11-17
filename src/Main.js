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
function Main() 
{  

  const [data, setData] = useState([]);
  const [audio, setAudio] = useState("https://recitepro.s3.amazonaws.com/a098bba1d47b41adbd6747176465d58e.mp3");   
  const [isPlaying, setIsPlaying] = useState(false); 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const [posts, setPosts] = useState([]);  
  const [convert, setConvert] = useState(true); 
  const [download, setDownload] = useState(false); 
  const [engine, setEngine] = useState(""); 
  const [language, setLanguage] = useState(""); 
  const [voice, setVoice] = useState(""); 
  const [inputtext, setInputext] = useState(""); 

  function  playPause(){
    if (isPlaying) {
      // Pause the song if it is playing
      audio.pause();
    } else {
      // Play the song if it is paused
      audio.play();
    }
    // Change the state of song
    setIsPlaying({ isPlaying: !isPlaying });
  }
  

   async function signUp() 
   {
    let input={engine,language,voice,inputtext}
    var requestOptions = 
    {
      method: 'POST',      
     // mode: "no-cors",      
      dataType: "text",   
      async: "true",    
      body: '{"key1": "val1","key2": 22,"key3": 15,"key4": "val4"}',
     // crossDomain: "true",
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json" }
  };
    fetch("https://gs5p08c7od.execute-api.us-east-1.amazonaws.com/test", requestOptions)
    .then(response => response.json()) 
    .then((json) => {
      console.log(json);
      setData(JSON.parse(json.body));
      setConvert(false);
      setDownload(true);
    })
    .catch(error => console.log('error', error));    
   };




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
    <div className="mt-18p" id="search-box">
      <InputGroup type="text" name="search" placeholder="Enter an API"/>

    <Form>
      <Form.Group >
        <Form.Control type="text" className="search-api"  placeholder="Enter an API" />
      </Form.Group>
    </Form>
    </div>


    

    <div className="mt-33p mb-36p">
      <p className="open-sans fs-12">Configurations helps change a group of system settings across your computers in
        one-click.
        Click
        on one of the
        settings below to get started.</p>
    </div>
    <div id="configurations">
              <ul
                className="settingList border-start border-secondary border-5 ps-3 mb-36p d-inline-block align-top h-fit-content">
                <p className="fw-bold text-uppercase fs-16" >Text extraction from image</p>                 
                <span onClick={handleShow}>Image to text</span>
              </ul>
              <ul
                className="settingList border-start border-primary border-5 ps-3 mb-36p d-inline-block align-top h-fit-content">
                <p className="fw-bold text-uppercase fs-16">Speech to text</p>
                Speech to text  
              </ul>

              <ul
                className="settingList border-start border-warning border-5 ps-3 mb-36p d-inline-block align-top h-fit-content">
                <p className="fw-bold text-uppercase fs-16">Text to speech</p>                 
                <span onClick={handleShow}>Text to speech</span>
              </ul>

              <ul
                className="settingList border-start border-danger border-5 ps-3 mb-36p d-inline-block align-top h-fit-content">
                <p className="fw-bold text-uppercase fs-16">Image recognition</p>                
                <span onClick={handleShow}>Object recognition from image</span>
                  
              </ul>

              <ul
                className="settingList border-start border-danger border-5 ps-3 mb-36p d-inline-block align-top h-fit-content">
                <p className="fw-bold text-uppercase fs-16">Comprehend</p>             
                <span onClick={handleShow}>Comprehend</span>                 
              </ul>

            
             
              
    </div>

    <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
            
    <div className="row open-sans">   
      <div className="col-2" id="popup-sidebar">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="nav-item py-2 mb-3 flex-column navbar-nav fw-bold ps-32 py-4"  
      >

          <Tab eventKey="Text" title="Text to speech">
          <span className="nav-link"> Text to speech</span>
        </Tab>
        <Tab eventKey="Speech" title="Speech to Text">
        <span className="nav-link">Speech to Text</span>
        </Tab>
        <Tab eventKey="extract" title="Text extract" >
        <span className="nav-link"> Text extract</span>
        </Tab>
        <Tab eventKey="recognition" title="Image recognition" >
        <span className="nav-link"> Image recognition</span>
        </Tab>
      </Tabs>
      </div> 
      <div className="col-9 border-left" id="popup-content">
      <div className="modal-header">
          <h5 className="modal-title text-primary open-sans fw-bold" id="newModalLabel">
              Text to Speech Demonstration
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


        <div className="modal-body">
          <div className="row mt-4">
              <label className="fw-bold open-sans">Engine</label>
              <div className="row pt-3 ps-3">
                  <div className="col-6">
                      <Form.Check    type="radio"  className="radio align-top" defaultChecked  name="engine" value="neural" id="flexRadioDefault1"/>
                      <div className="d-inline-block">
                          <label className="form-check-label open-sans align-top ps-2" >
                              Neural
                          </label>
                          <div className="form-info ps-2">Produces the most natural human-like speech possible
                          </div>
                      </div>
                  </div>

                  <div className="col-6">
                      <Form.Check name="engine"  value={engine}  onChange={(e) => setEngine(e.target.value)} className="radio align-top" type="radio"  value="standard" id="flexRadioDefault2"/>
                      <div className="d-inline-block">
                          <label className="form-check-label open-sans align-top ps-2" >
                              Standard
                          </label>
                          <div className="form-info ps-2">Produces natural-sounding speech
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="row mt-4">
            <div className="col-6">
                <label className="fw-bold open-sans pb-2 ms-n3">Language</label>
                <br/>
                <select name="language"  value={language}  onChange={(e) => setLanguage(e.target.value)}  className="modal-select" id="language">
                    <option value="en-US">English, US</option>
                </select>
            </div>

            <div className="col-6">
                <label className="fw-bold open-sans pb-2">Voice</label>
                <br/>
                <select name="voice" value={voice}  onChange={(e) => setVoice(e.target.value)} className="modal-select" id="voice">
                    <option value="Amy">Amy, Female</option>
                    <option value="Matthew">Matthew, Male</option>
                    <option value="Joanna">Joanna, Female</option>
                </select>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col">
                <label  className="fw-bold open-sans pb-2">
                    Input Text
                </label>
                <textarea value={inputtext}  onChange={(e) => setInputext(e.target.value)} name="input_text" className="form-control textarea" id="exampleFormControlTextarea1" rows="5" placeholder="English, US" maxLength="500"  required="" spellCheck="false"></textarea>
            </div>
        </div>

        <div className="mt-3 mb-5">
        <div className="form-info d-inline-block">
          <span id="inputLength">500</span> Characters   remaining
            </div>
            <div className="d-inline-block float-end">
                <button type="button" className="text-uppercase button button-sm" >Clear text</button>
                <div id="reconvert" className="d-inline"></div>
            </div>
        </div>
        </div>       
      </div>
    </div>

        </Modal.Body>
        <Modal.Footer>
        <p>
          {isPlaying? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>

        <button onClick={playPause}>
          Play | Pause
        </button>

        <audio controls>
          <source src="https://texttospeech-by-shail.s3.amazonaws.com/abc123.mp3?AWSAccessKeyId=ASIA6C2KN2KENZZLSRUJ&Expires=1668511577&Signature=ghl%2FY22vAJM1cU9XGUtvIqvTb2c%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCq2P5iWpu6jpB2QOVUHgJ3Xpue04Z8wdOw5MDrHx2nrAIgEwyQ9ogxmklzM5AK8jpise79pCTLcrksFzpFHDfLlXkqhwMI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5NjgxMzQzNDk0NDgiDD7lkGZWLzZNMdL1UirbApIollHmPRhhSq4eyp%2BJnexr%2FW0s%2BIMgXmavco6OIRo0YngUcbsmws9SqDOu%2BzkXvGz63tJ2A%2FLLJ39WrA%2FUZmJM5gQXNTa15dXDvd3NJOaOAUHuTaNsxxMm9LY4UWd1frOVeIqSPMLigUErn4iLtnL1pReC4m3oDIRUDaiM%2BnbR%2BbePszpjRW0Ev8tHxxxnDRnVm7xu%2FEZeX3LAG13LLYFFg0wLtQ9colZ5Yz8MJqkj4twHHVMXyGkG551WFQh%2FSu%2BvM%2BvAmWO3JisattlvNy9FOh%2BUeeu1%2F5kJZFDYI8IrPMORj6MxaKLbpwe0S%2B3fcHzE1w8uYMdCnmTiFoYjWq%2Bqq1qCHSigVAd4qMNg%2FOs7cCHwBAtoJGcZJOK5ZSA4%2BXQSvYoXqpuEWjZ8pc9uE8HzPeGqP9sdBqyilHVVHaUthq8p0En4MEBySfxd3tChr6F6rCJrENi7g5RQMNTnzZsGOp4B24jeKfU2i%2BY68XcebcE12HVq2dVffeTCpydzTjUK95kOBXbVtSkCDGWKaregVfPjgDqIJfKahTFqDyYLQMZWA9vvgjMNAW2Ghf4jZ1CV2VKKMSKnM1ALqLnftoLKd%2FYY7rIAFyXc6mowHE%2B%2BPBBamziHUKbGFEdCrHN1LeKUneZ%2BzY6hL6PkMzhopJPNV5%2BFBLjOmjQcLBd9EzpCWME%3D" type="audio/mpeg"/>
        </audio>



         {
          convert?<Button name="convert" className="button btn-listen text-uppercase"  
          variant="primary" onClick={signUp} >
          convert 
          </Button>
          :null
         }
          {
          download?<div className="modal-footer">  
         

            <a  rel="noreferrer"  target="_blank" href={data.url.replace(/"/g, "")}>
            <Button  type="button" className="button btn-listen text-uppercase"  
          variant="primary" onClick={signUp} >
             <i className="fa-solid fa-play float-start p-1" id="playIcon"></i>
             Download 
          </Button></a>

          <a  rel="noreferrer"  target="_blank" href={data.url.replace(/"/g, "")}>
            <Button  type="button" className="button btn-listen text-uppercase"  
          variant="primary" onClick={signUp} >
             <i className="fa-solid fa-play float-start p-1" id="playIcon"></i>
             Listen 
          </Button></a>

          </div>
          :null
         }      
         
             
        </Modal.Footer>
      </Modal>   
  </div>
  );
}




export default Main;
