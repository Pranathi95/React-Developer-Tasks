import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import UsersList from './UsersList';

let userList = [];

const AddUser = () => {
	
	const [username , setUsername] = useState('');
	const [age , setAge] = useState('');

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handleAgeChange = (event) => {
		setAge(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		//validate username and age

		if(!username || !age) {
			console.log('Please enter a username and age.');
			return;
		}
		if(age < 0){
			console.log('Please enter valid age.');
			return;
		}

		//add the new user object

		const newUser = {
			username,
			age,
		};

		//add new user to list
		userList.push(newUser);

	
		//clear input fields
		setUsername('');
		setAge('');

	};
	return (
		<div>
			<Card className={classes.card}>
				<form onSubmit={handleSubmit} className={classes.form}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" value={username} onChange={handleUsernameChange} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" value={age} onChange={handleAgeChange} />
					<Button type="submit">
						Add User
					</Button>
				</form>
			</Card>
			<UsersList userList={userList} />
		</div>
	);
};

export default AddUser;
