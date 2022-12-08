import './Home.css';
import './all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component,useState, useEffect } from 'react';


function Translate(props) 
{ 
  const [convertsmall, setConvertsmall] = useState(false); 
  const [convert, setConvert] = useState(true); 
  const [download, setDownload] = useState(false);    
  const [data, setData] = useState([]); 
  const [count, setCount] = useState(0);
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [language, setLanguage] = useState("en"); 
  const [voice, setVoice] = useState("hi"); 
  const [inputtext, setInputext] = useState(""); 
  
  async function textToSpeech() 
  {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json; charset=utf-8");
var requestOptions = {
  method: 'POST',    
  headers: myHeaders, 
  body: JSON.stringify({ 
    SourceLanguageCode: language,
    TargetLanguageCode: voice,
    text: inputtext,
 }), 
  redirect: 'follow'
};

fetch("https://9yocx5i14k.execute-api.ap-southeast-1.amazonaws.com/prod", requestOptions)
  .then(response => response.json())
  .then(result =>{  console.log(JSON.stringify(result) );
    setData(result);
    setDownload(true);
    setConvert(false);
  })
  .catch(error => console.log('error', error));
  
  };

  return (
     <div className="col-9 border-left" style={{ overflow: 'hidden' }} id="popup-content">
     <div className="modal-header">
         <h5 className="modal-title text-primaryy open-sans fw-bold" id="newModalLabel">
         Language Translate  Demonstration
         </h5> 
         <button  onClick={() => props.setShow(false)} type="button" className="btn-close"  ></button>
     </div>
     <div className="row">
     <div className="modal-body">
         <div className="row mt-4">
           <div className="col-6">
               <label className="fw-bold open-sans pb-2 ms-n3">Source language</label>
               <br/>
               <select name="language"  value={language}  onChange={(e) => {if(voice!=e.target.value) {setLanguage(e.target.value);} }}  className="modal-select" id="language">
                  <option value="hi">Hindi</option>
                   <option value="en">English, US</option>
                   <option value="mr">Marathi</option>
                   <option value="gu">Gujrati</option>
                   <option value="te">Telugu</option>
                   <option value="ta">Tamil</option>
               </select>
           </div>

           <div className="col-6">
               <label className="fw-bold open-sans pb-2">Target language</label>
               <br/>
               <select name="voice" value={voice}  onChange={(e) =>{if(language!=e.target.value) {setVoice(e.target.value);} }} className="modal-select" id="voice">
                   <option value="en">English, US</option>
                   <option value="hi">Hindi</option>
                   <option value="mr">Marathi</option>
                   <option value="gu">Gujrati</option>
                   <option value="te">Telugu</option>
                   <option value="ta">Tamil</option>
               </select>
           </div>
       </div>
       <div className="row mt-4">
           <div className="col">
               <label  className="fw-bold open-sans pb-2">
                   Input Text
               </label>
               <textarea value={inputtext}  
               onChange={(e) => {               
               setInputext(e.target.value);setCount(e.target.value.length);}} name="input_text" 
               className="form-control textarea" id="exampleFormControlTextarea1"
                rows="5" placeholder="" maxLength={5000}  required="" spellCheck="false"></textarea>
           </div>
       </div>
       <div className="mt-3 mb-5">
       <div className="form-info d-inline-block">
         <span id="inputLength">{5000-count}</span> Characters   remaining
           </div>
           <div className="d-inline-block float-end">
               <button onClick={(e) => setInputext('')}  type="button" className="text-uppercase button button-sm" >Clear text</button>            
          </div>  
       </div>

       
       <div className="row mt-4">
           <div className="col">
               <label  className="fw-bold open-sans pb-2">
                   Translate Text
               </label>



               <textarea value={data}  name="translate_text" 
                className="form-control textarea" id="exampleFormControlTextarea1" rows="5" 
                placeholder="" maxLength="5000"  required="" spellCheck="false" ></textarea>
           </div>
       </div>


       {
         download?
         <div className="mt-3 mb-5">
           <div className="d-inline-block float-end">
               <button onClick={(e) =>{ setData('');setConvert(true);setDownload(false);}}  type="button" className="text-uppercase button button-sm" >Clear text</button>            
          </div>  
       </div>
         :null
        }       
       </div>   
       <div className="modal-footer">
       {
         convert?<button type="submit" className="button btn-listen text-uppercase" onClick={textToSpeech} id="convert" disabled="">
         Translate <i className="fa-solid fa-globe p-1"></i>
                </button>
         :null
        }
        {
         download?
         <div>
           <button  type="button" className="button btn-listen text-uppercase"  
         variant="primary"  onClick={(e) =>{ setData('');setConvert(true);setDownload(false);}}  >
            <i className="fa-solid fa-rotate-right p-1" id="playIcon"></i>
            Reset 
         </button>
         </div>
         :null
        }    
      </div>
      </div>           
     </div> 
  );
}
export default Translate;
