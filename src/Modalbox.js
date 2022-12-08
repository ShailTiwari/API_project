import React, { useState,useRef } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal,Button } from 'react-bootstrap';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Texttospeech from './Texttospeech';
import Speechtotext from './Speechtotext';
import Textextract from './Textextract';
import ImageRecognition from './ImageRecognition';
import Comprehend from './Comprehend';
import Comprehendmedical from './Comprehendmedical';
import Translate from './Translate';
import Chatbot from './Chatbot';
import Navbar from './Navbar';
function Modalbox(props) 
{ 
  
  const list = props.list;    
 // const history = useNavigate();
  const [show, setShow] = useState(false);  
  const [path,setPath] = useState(false);  
 // const handleShow = () => setShow(!show);  
  const handleClose = () => setShow(false);
  const [filterList, setFilterList] = useState(list);
  const handleSearch = (event) => {
    if (event.target.value === "") 
    {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };


  function handleShow(name) 
  {    
     setShow(!show);
     setPath(name);
     //console.log( `page loaded :, ${name}`);
   }


  return ( 
  <div>
    <div className="mt-18p" id="search-box">
      {/* {console.log(props)} */}
    <input  ref={props.searchBar.refProp}  className="search-api" placeholder="Enter an API"  name="query" type="text" onChange={handleSearch} />
    </div>
    <div className="mt-33p mb-36p">
      <p className="open-sans fs-12">Configurations helps change a group of system settings across your computers in
        one-click. Click on one of the settings below to get started.</p>
    </div> 
     <div id="configurations">
       {filterList &&
        filterList.map((item, index) => (
          <ul  key={index} className={'settingList border-start border-5 ps-3 mb-36p d-inline-block align-top h-fit-content ' + item.border}>
          <p className="fw-bold text-uppercase fs-16" >{item.title}</p>                 
          <span  onClick={() => handleShow(item.path)} > {item.content}</span>
        </ul>
        ))}  
    </div>  
       <Modal 
        dialogClassName="modal-90w" 
        aria-labelledby="example-custom-modal-styling-title"  show={show} onHide={handleClose} backdrop="static" > 
       <div  className="modal-dialog-centered">
       <div  className="modal-content  open-sans">
       <Modal.Body>
          <BrowserRouter>
          <div className="row open-sans"> 
          <Navbar path={path}/>  
          <Routes>
            <Route path='/Texttospeech' element={<Texttospeech show={show} setShow={setShow}/>}/>
            <Route path='/Speechtotext' element={<Speechtotext show={show} setShow={setShow}/>}/>
            <Route path='/Textextract' element={<Textextract show={show} setShow={setShow}/>}/>
            <Route path='/ImageRecognition' element={<ImageRecognition show={show} setShow={setShow}/>}/>
            <Route path='/Comprehend' element={<Comprehend show={show} setShow={setShow}/>}/>
            <Route path='/Comprehendmedical' element={<Comprehendmedical show={show} setShow={setShow}/>}/>
            <Route path='/Translate' element={<Translate show={show} setShow={setShow}/>} />
            <Route path='/Chatbot' element={<Chatbot show={show} setShow={setShow}/>} />
          </Routes>
          </div>
          </BrowserRouter>
          </Modal.Body>
        </div> 
        </div> 

        
      </Modal>
      </div>  
  );


}

export default Modalbox;
