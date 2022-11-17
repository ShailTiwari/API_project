import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
function Navbar() 
{
  return (
    <div className="col-2"> 
        <ul className="navbar-nav fw-bold ps-32 py-4" id="modal-navbar">
            <li className="nav-item py-2">
                <NavLink className="nav-link" to="/Texttospeech">Text to speech</NavLink>
            </li>
            <li className="nav-item py-2">                
              <NavLink className="nav-link" to="/Speechtotext">Speech to text</NavLink>
            </li>
            <li className="nav-item py-2">                
               <NavLink className="nav-link" to="/Textextract">Text extract</NavLink>
            </li>
            <li className="nav-item py-2">                
               <NavLink className="nav-link" to="/ImageRecognition">Image recognition</NavLink>
            </li>
            <li className="nav-item py-2">                
              <NavLink className="nav-link" to="/Comprehend">Comprehend</NavLink>
            </li>
            <li className="nav-item py-2">                
              <NavLink className="nav-link" to="/Comprehendmedical">Comprehend Medical</NavLink>
            </li>
        </ul>  
   
   </div>
  );
}
export default Navbar;
