import React, { useState,useRef } from 'react';
import './Home.css';
import './all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Body from './Body';
function Header() 
{
  const ref = useRef(null);
  const handleClick = () => 
  {
    console.log("ref clicked");
    ref.current.focus();
  };


  return (
  <div className="body">   
   <div className="container-fluid">
    <div className="mt-5 margin-bottom">
      <p className="font-montserrat fw-bold fs-26">Aloha<span className="text-black-50 fw-light">Technology</span></p>
       
      </div>
      <hr className="hr"/>

      <div className="text-end py-12p">
      <div onClick={handleClick} className="d-inline-block px-12p ico" id="search-ico">
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
      <Body 

      refProp={ref}/>
    </div>    
   </div>
   </div>
  );
}

export default Header;
