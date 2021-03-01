import React from "react";

function Navbar(props) {
	return (
		<div className="navbar bg-primary">
			<h2>
				<i className={props.icon}></i> &nbsp;
				{props.title}
			</h2>
		</div>
	);
}

export default Navbar;
