import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useeffect',
  templateUrl: './useeffect.component.html',
  styleUrls: ['./useeffect.component.scss']
})
export class UseeffectComponent implements OnInit {


  codes: any = {}
  constructor() { }

  ngOnInit() {
    this.gethighlihtcodes()
  }

  gethighlihtcodes() {
 this.codes.useeffect =
 `
 import React, { useState, useEffect } from 'react';

 const App = () => {
   const [message, setMessage] = useState('Hi there, how are you?');
 
   useEffect(() => {
     console.log('trigger use effect hook');
 
     setTimeout(() => {
       setMessage("I'm fine, thanks for asking.");
     }, 1000)
   })
 
   return <h1>{message}</h1>
 };
 
 export default App;
 `;
 this.codes.useeffectcallapi =
 `
 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 
 function Home() {
   const [users, setUsers] = useState([]);

   const fetchusers = async () => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
     setUsers(response.data)
   }

   useEffect(() => {
     fetchusers();
   }, [])

   return (
     <div>
       <button className='btn btn-primary' onClick={fetchusers}>Fetch users</button>
       {users.map(user => (
         <div key={user.id}>{user.name}</div>
       ))}
     </div>
   )
 }
 export default Home
 `;
}

}
