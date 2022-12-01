import React, { useState,useRef } from 'react';
import './Home.css';
import './all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Body from './Body';
class Header extends React.Component  {   
  constructor()
  {    
    super();    
    this.state={    
      useRef:"",
      language:"",
      voice:"",
      inputtext:"",
    }
    this.textInput = React.createRef();    
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    console.log('Click happened');  
    this.textInput.current.focus();  }

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
  <div className="body">   
   <div className="container-fluid">
    <div className="mt-5 margin-bottom">
      <p className="font-montserrat fw-bold fs-26">Aloha<span className="text-black-50 fw-light">Technology</span></p>
       
      </div>
      <hr className="hr"/>

      <div className="text-end py-12p">
      <div  onClick={this.focusTextInput}  className="d-inline-block px-12p ico" id="search-ico">
        <svg id="search_black_24dp_1_" data-name="search_black_24dp (1)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path id="Path_15" data-name="Path 15" d="M0,0H24V24H0Z" fill="none"></path>
          <path id="Path_16" data-name="Path 16" d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z"></path>
        </svg>
      </div>

      <div className="d-inline-block px-12p ico">
        <svg id="sort_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path id="Path_17" data-name="Path 17" d="M0,0H24V24H0Z" fill="none"></path>
          <path id="Path_18" data-name="Path 18" d="M3,18H9V16H3ZM3,6V8H21V6Zm0,7H15V11H3Z"></path>
        </svg>
      </div>

      <div className="d-inline-block px-12p ico">
        <svg id="filter_list_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path id="Path_19" data-name="Path 19" d="M0,0H24V24H0Z" fill="none"></path>
          <path id="Path_20" data-name="Path 20" d="M10,18h4V16H10ZM3,6V8H21V6Zm3,7H18V11H6Z"></path>
        </svg>
      </div>
    </div>

    
    <div className="d-flex align-items-stretch mb-3">
      <div className="d-none d-md-block mt-3">
        <svg className="hamburger ico" id="sort_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path id="Path_17" data-name="Path 17" d="M0,0H24V24H0Z" fill="none"></path>
          <path id="Path_18" data-name="Path 18" d="M3,18H21V16H3ZM3,6V8H21V6Zm0,7H21V11H3Z"></path>
        </svg>
        <div className="verticle-text font-oswald d-block">
          <p className="text-uppercase fs-24 fw-light">API SEARCH</p>
        </div>
      </div>
      <div className="vl d-none d-md-block mt-3 margin-left"  >
      </div>
      {/* Add Body page  */}
      <Body refProp={this.textInput}/>
    </div>    
   </div>
    <MessengerCustomerChat pageId="100087949407012" appId="472672598095481"/>
   </div>
   );
  }  
}
export default Header;
