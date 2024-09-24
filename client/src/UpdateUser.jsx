import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";


function UpdateUser() {
	  const { id } = useParams();
  	const [name, setName] = useState('');
		const [age, setAge] = useState('');
		const [email, setEmail] = useState('');
		const nav = useNavigate();
    useEffect(() => {
      axios
        .get("http://localhost:3005/getuser/"+id)
        .then( result => {
            setName(result.data.name)
            setAge(result.data.age)
            setEmail(result.data.email)
        })
        .catch((err) => console.log("couldn't fetch the users"));
    }, []);

    const update = () => {
      // e.preventDefault();
      		axios
						.put("http://127.0.0.1:3005/updateuser/"+id, { name, age, email })
						.then((result) =>{
              console.log(result);
            } 
            
          )
          .catch((err) => console.log(err));
          nav('/');

    }

  return (
    <div>
      <h1>
        UpdateUser
      </h1>
        <form  className='' onSubmit={update} >
          <input type="text" placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
          <input type="text" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
          <input type="text" placeholder="enter age" value={age} onChange={(e) => setAge(e.target.value)}/> <br />
          <button type='submit'>submit</button>
        </form>
      </div>
  )
}

export default UpdateUser