import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const userStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(3,1fr)",
	gridGap: "1rem",
};

function Users(props) {
	const users = props.users;
	const loading = props.loading;
	if (loading) {
		return <Spinner></Spinner>;
	} else {
		return (
			<div style={userStyle}>
				{users.map((user) => {
					return <UserItem key={user.id} user={user}></UserItem>;
				})}
			</div>
		);
	}
}
export default Users;
