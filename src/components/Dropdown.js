import React, {useState} from 'react';
import '../css/Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown () {
    const [state, setState] = useState(false);
    const showDropdown=()=> {
        setState(true);
    }

    const hideDropdown=()=> {
        setState(false);
    }
    return (
        <div className="dropdown">
            <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <div>AuditionMaterials</div>         
                {state ?(                
                <ul className= "menu-ul" onMouseEnter={showDropdown}>
                    <li><Link to="/PerformanceVar" className="peformance">Performance and Variations</Link></li>
                    <li id="class"><Link to="/ClassFootage" className="class">Class</Link></li>
                </ul>):null}
            </div>
        </div>
    )
}

export default Dropdown;