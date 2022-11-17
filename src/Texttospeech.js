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
function Texttospeech() 


{ 
 const [convertsmall, setConvertsmall] = useState(false); 
  const [convert, setConvert] = useState(true); 
  const [download, setDownload] = useState(false);    
  const [data, setData] = useState([]); 
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [engine, setEngine] = useState("neural"); 
  const [language, setLanguage] = useState("en-US"); 
  const [voice, setVoice] = useState("Amy"); 
  const [inputtext, setInputext] = useState(""); 
  
  async function textToSpeech() 
  {
    var requestOptions = 
    {
      method: 'POST',         
      dataType: "text",   
      async: "true",  
      body: JSON.stringify({ engine: engine,
        language: language,
        voice: voice,
        inputtext: inputtext,
     }),  
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
     <div className="col-9 border-left" id="popup-content">
     <div className="modal-header">
         <h5 className="modal-title text-primary open-sans fw-bold" id="newModalLabel">
             Text to Speech Demonstrationn
         </h5>
         <button  onClick={handleClose} type="button" className="btn-close" ></button>
     </div>


       <div className="modal-body">
         <div className="row mt-4">
             <label className="fw-bold open-sans">Engine</label>
             <div className="row pt-3 ps-3">

           


                 <div className="col-6">
                     <input   type="radio"  className="radio align-top" defaultChecked  name="engine" value="neural" id="flexRadioDefault1"/>
                     <div className="d-inline-block">
                         <label className="form-check-label open-sans align-top ps-2" >
                             Neural
                         </label>
                         <div className="form-info ps-2">Produces the most natural human-like speech possible
                         </div>
                     </div>
                 </div>

                 <div className="col-6">
                     <input name="engine"  value={engine}  onChange={(e) => setEngine(e.target.value)} className="radio align-top" type="radio"  id="flexRadioDefault2"/>
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
              
               {
         convertsmall?
          <div id="reconvert" className="d-inline">
                  <button type="submit" className="text-uppercase button button-sm button-sm-primary px-22p" onclick="textToSpeech()" id="convert" disabled="">
                                Convert <i className="fa-solid fa-spinner fa-spin d-none"></i>
                   </button>
               </div>         
         :null
        }
           </div>  
       </div>
       </div>   
       <div className="modal-footer">
       {
         convert?<button type="submit" className="button btn-listen text-uppercase" onClick={textToSpeech} id="convert" disabled="">
         convert <i className="fa-solid fa-spinner fa-spin d-none"></i>
                </button>
         :null
        }

        {
         download?
         <div>
         <a  rel="noreferrer"  target="_blank" href={data.url.replace(/"/g, "")}>
           <button  type="button" className="button btn-listen text-uppercase"  
         variant="primary"  >
            <i className="fa-solid fa-play float-start p-1" id="playIcon"></i>
            Download 
         </button></a>
         
         <a  rel="noreferrer"  target="_blank" href={data.url.replace(/"/g, "")}>
            <button  type="button" className="button btn-listen text-uppercase"  
         variant="primary" >
            <i className="fa-solid fa-play float-start p-1" id="playIcon"></i>
            Listen 
         </button></a>
         </div>
         :null
        }


        
        

    </div>    
     </div>

     

     
  );
}




export default Texttospeech;
