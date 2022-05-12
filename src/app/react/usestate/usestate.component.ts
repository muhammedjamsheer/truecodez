import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usestate',
  templateUrl: './usestate.component.html',
  styleUrls: ['./usestate.component.scss']
})
export class UsestateComponent implements OnInit {


  codes: any = {}
  constructor() { }

  ngOnInit() {
    this.gethighlihtcodes()
  }

  gethighlihtcodes() {
 this.codes.usestate_eg1 =
 `
 import React from 'react'
 import { useState } from 'react'
 
 function Home() {
   const [name, setName] = useState("Muhammed");
   const changename = () => {
     setName('Jamsheer')
   }
   return (
     <div>
       <p>Change name when a button clicks</p>
       <button className='btn btn-info' onClick={changename}>Change Name</button>
       <h5>{name}</h5>
     </div>
   )
 }
 
 export default Home
 `;
 this.codes.usestate_eg2 =
 `
 import React from 'react'
 import { useState } from 'react'
 
 function Home() {
   const [count, setCount] = useState(0);
   const incrementcount = () => {
    setCount(count + 1)
  }
  const decrementcount = () => {
    setCount(count - 1)
  }
   return (
     <div>
      <p>Change count increment and decrement</p>
      <button className='btn btn-info' onClick={incrementcount}>+</button>
      <span>{count}</span>
      <button className='btn btn-info' onClick={decrementcount}>-</button>
     </div>
   )
 }
 
 export default Home
 `;

 this.codes.usestate_eg3 =
 `
 import React from 'react'
 import { useState } from 'react'
 
 function Home() {
  const [show, setShow] = useState(false);
  const togglecontent=()=>{
    setShow(!show)
  }
   return (
     <div>
     <p>Hide and show</p>
     <button className='btn btn-info' onClick={togglecontent}>change</button>
     { show && <p>My name is jamsheer</p>}
     </div>
   )
 }
 
 export default Home
 `;
  }
}
