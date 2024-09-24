import axios from 'axios';
import React , {useEffect, useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';


function Users() {
    const [users, setUsers] = useState([]);
        // console.log(users[0].Name);
        const nav = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3005/users').then(result => setUsers(result.data)).catch(err => console.log("couldn't fetch the users"));
    },[])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3005/deleteuser'+id).then(res => console.log(res)).catch(err => console.log(err)) 
        nav('/')
    }
    
    return (
		<div>
			<h1>Users</h1>
            <Link to="/create" className='btn btn-success m-2'>Add +</Link>
			<table className='table table-stripped border'>
				<thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>age</th>
                        <th>action</th>
                    </tr>
				</thead>
                <tbody>
                    {
                        users.map((user) => {
                          return (
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <Link to={`update/${user._id}`} className='btn btn-primary'>Update</Link>
                                            <button style={{marginLeft:'5px'}} className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
								);
                        })
                    }
                </tbody>
			</table>
		</div>
	);
    // function showID(id){
    //     alert(`${id}`)
    // }
}

export default Users