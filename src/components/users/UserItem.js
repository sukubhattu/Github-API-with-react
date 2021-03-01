import React from "react";

function UserItem(props) {
	const { avatar_url, html_url, login } = props.user;
	return (
		<div className="card text-center">
			<img
				src={avatar_url}
				className="round-img"
				style={{ width: "60px" }}
				alt="random text"
			/>
			<h3>{login}</h3>
			<div>
				<a href={html_url} className="btn btn-dark btn-sm my-1">
					More
				</a>
			</div>
		</div>
	);
}

export default UserItem;
