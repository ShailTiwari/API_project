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

function Modelbox() 
{       
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true); 
  const handleClose = () => setShow(false);
  const [data, setData] = useState([]);
  const [audio, setAudio] = useState("https://recitepro.s3.amazonaws.com/a098bba1d47b41adbd6747176465d58e.mp3");   
  const [isPlaying, setIsPlaying] = useState(false); 
  const [convert, setConvert] = useState(true); 
  const [download, setDownload] = useState(false); 
  const [engine, setEngine] = useState("neural"); 
  const [language, setLanguage] = useState("en-IN"); 
  const [voice, setVoice] = useState("Amy"); 
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
   // console.log({inputtext});
    var requestOptions = 
    {
      method: 'POST',      
     // mode: "no-cors",      
      dataType: "text",   
      async: "true",  
      body: JSON.stringify({ engine: engine,
        language: language,
        voice: voice,
        inputtext: inputtext,
     }),  
     
     
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
   <div>
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
         <button   onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>


       <div className="modal-body">
         <div className="row mt-4">
             <label className="fw-bold open-sans">Engine</label>
             <div className="row pt-3 ps-3"  onChange={(e) => setEngine(e.target.value)}>
                 <div className="col-6">
                     <Form.Check    type="radio"  className="radio align-top" defaultChecked  name="engine" 
                     value="neural" id="flexRadioDefault1"/>
                     <div className="d-inline-block">
                         <label className="form-check-label open-sans align-top ps-2" >
                             Neural
                         </label>
                         <div className="form-info ps-2">Produces the most natural human-like speech possible
                         </div>
                     </div>
                 </div>

                 <div className="col-6">
                     <Form.Check name="engine" className="radio align-top" type="radio"  value="standard" id="flexRadioDefault2"/>
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
               <option value="en-IN">English, Indian</option>
               <option value="en-US">English, US</option>
               </select>
           </div>

           <div className="col-6">
               <label className="fw-bold open-sans pb-2">Voice</label>
               <br/>
               <select name="voice" value={voice}   onChange={(e) => setVoice(e.target.value)} className="modal-select" id="voice">
               <option value="Amy">Amy, Female</option>
               <option value="Raveena">Raveena, Female</option>
               <option value="Kajal">Kajal, Female</option>
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




export default Modelbox;
