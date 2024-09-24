import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

function CreateUser() {
	const [name , setName] = useState();
	const [age, setAge] = useState();
	const [email, setEmail] = useState();
    const nav = useNavigate();
    const submit = (e) =>{
		e.preventDefault();
		axios.post('http://127.0.0.1:3005/createuser' , {name , age , email})
		.then(result => console.log(result))
		.catch(err => console.log(err))
        nav('/')
	}
	
  return (
		<div>
			<h1 className="text-center">CreateUser</h1>
			<form  className='' onSubmit={submit}>
				<input type="text" placeholder="enter name"  onChange={(e) => setName(e.target.value)}/> <br />
				<input type="text" placeholder="enter email" onChange={(e) => setEmail(e.target.value)}/> <br />
				<input type="text" placeholder="enter age" onChange={(e) => setAge(e.target.value)}/> <br />
                <button type='submit'>submit</button>
			</form>
		</div>
	);
}

export default CreateUser