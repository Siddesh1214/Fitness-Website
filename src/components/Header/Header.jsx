import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from '../../assets/bars.png';

function Header() {
  const mobile = window.innerWidth <= 768 ?true: false;
  
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen(true);
  }
	return (
		<div className='header'>
      <img src={Logo} alt="" className="logo" />
      {isOpen === false && mobile === true ? (
        <div style={{background:"var(--appColor)", padding:'0.5rem', borderRadius:'5px'}}>
          <img src={Bars} style={{ width:'1.5rem', height:'1.5rem'}} onClick={showMenu} alt="" />
        </div>
      ) :
			<ul className='header-menu'>
				<li onClick={()=>setIsOpen(false)}>Home</li>
				<li onClick={()=>setIsOpen(false)}>Programs</li>
				<li onClick={()=>setIsOpen(!true)}>Why us</li>
				<li onClick={()=>setIsOpen(!true)}>Plans</li>
				<li onClick={()=>setIsOpen(!true)}>Testimonials</li>
			</ul>
      }
			{/* <div class="hamburger-menu" onClick={showMenu}>
				<div class="bar"></div>
				<div class="bar"></div>
				<div class="bar"></div>
			</div> */}
		</div>
	);
}

export default Header;
