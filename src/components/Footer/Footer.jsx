import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

function Footer() {
	return (
		<div className="footer">
			<hr />

			<div className="cont">
				<img src={Github} alt="" />
				<img src={Instagram} alt="" />
				<img src={LinkedIn} alt="" />
			</div>
			<div className="logo">
				<img src={Logo} alt="" />
			</div>
			<div className="blur blur-l"></div>
			<div className="blur blur-r"></div>
		</div>
	);
}

export default Footer;
