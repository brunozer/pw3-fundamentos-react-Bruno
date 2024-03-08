import { useState, useEffect } from 'react';
import axios from 'axios';
function Users(){
const [users, setUsers]= useState([])
useEffect(()=> {
    axios.get('https://reqres.in/api/users?page=1')
    .then(res => {
      console.log(res)
      setUsers(res.data.data);
    })
    .catch(err=>{
      console.log(err)
    })
  },[]);
  return(
    <>
        {
        users.map(user=> (
          <div className='App'>
            <div className='cardUser'>
            <img className='imgUser' src={user.avatar} alt='imagem'></img>
            <h3>{user.first_name}</h3>
            <p>{user.email}</p>
            </div>
          </div>  
        ))

        }
    </>
  )
}

export default Users;