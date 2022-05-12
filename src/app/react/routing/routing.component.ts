import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  codes: any = {}
  constructor() { }

  ngOnInit() {
    this.gethighlihtcodes()
  }

  gethighlihtcodes() {
    this.codes.istall_routing = `npm install react-router-dom`;
    this.codes.routersimple_nabbar =
      `
import React from 'react'

import './Header.css';
import { NavLink } from "react-router-dom";

function header() {
  return (
    <div className="header">
    <span> <NavLink to="home">Home</NavLink> </span>
    <span> <NavLink to="about">About</NavLink> </span>
    <span> <NavLink to="user">User</NavLink> </span>
  </div>
  )
}

export default header
 `;
 this.codes.routersimple_headercss =
 `
 .header {
  background-color: #4a4a8d;
  display: flex;
}
.header a{
  text-decoration: none;
  color: #ffffff;
}
.header span{
  padding: 15px;
  display: inline-flex;
  font-weight: bold;
}
.header span .active{
  color: red;
  border-bottom: 3px solid red;
}
`;
    this.codes.routersimple_appjs =
      `
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import User from './pages/User';
import About from './pages/About';
import Notfound from './pages/Notefound';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='page'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user" element={<User />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
  `;


  this.codes.router_urlparam_appjs =
  `
  import './App.css';
  import Header from './components/Header';
  import Home from './pages/Home';
  import User from './pages/User';
  import About from './pages/About';
  import Notfound from './pages/Notefound';
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Userdetails from './pages/Userdetails';
  
  function App() {
    return (
      <BrowserRouter>
        <Header />
        <div className='page'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="user" element={<User />} />
            <Route path="userdetails/:id" element={<Userdetails />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;
`;

this.codes.router_urlparam_userjs =
`
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchusers();
    }, [])
    
    const fetchusers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data)
    }
    return (
        <div>
            {users.map(user => (
                <div className="users" key={user.id}>
                    <div className='users-item'>
                        <div className="title">
                            <Link to={'/userdetails/{user.id}}>{user.name}</Link>
                        </div>
                        <div className="descr">
                            {user.email}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default User
`;

this.codes.router_urlparam_userdetailsjs =
`
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Userdetails.css';

function Userdetails() {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchusers();
    }, [id])

    const fetchusers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/{id}');
        setUser(response.data)
    }
    return (
        <div className="page details">
            <div className="title">
                {user.name}
            </div>
            <div className="body">
                Email {user.email}
            </div>
            <div className="body">
                Phone: {user.phone}
            </div>
        </div>
    )
}

export default Userdetails
`;
this.codes.router_searchparam_appjs =
`
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import User from './pages/User';
import About from './pages/About';
import Notfound from './pages/Notefound';
import Userinfo from './pages/Userinfo';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='page'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user" element={<User />} />
          <Route path="userinfo" element={<Userinfo />} /> 
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
`;
this.codes.router_searchparam_userjs =
`
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchusers();
    }, [])
    
    const fetchusers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data)
    }
    return (
        <div>
        <p>Navigation by using search parameters</p>
        <p><Link to='/userinfo'>Show all users</Link></p>
        {users.map(user => (
            <div className="users" key={user.id}>
                <div className='users-item'>
                    <div className="title">
                        <Link to={'/userinfo/?id={user.id}'}> {user.name}</Link>
                    </div>
                    <div className="descr">
                        {user.email}
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default User
`;
this.codes.router_searchparam_userinfojs =
`
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Userinfo() {
    const [users, setUsers] = useState([]);
    const [searchParams] = useSearchParams();
    const userid = searchParams.get('id');

    useEffect(() => {
        fetchusers();
    }, [])

    const fetchusers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data)
    }

    return (
        <div>
            {
                users.filter((userdata) => {
                    if (!userid) { return true }
                    return userdata.id === parseInt(userid)
                }).map(user => (
                    <div className="users" key={user.id}>
                        <div className='users-item'>
                            <div className="title">
                                {user.name}
                            </div>
                            <div className="descr">
                                {user.email}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Userinfo
`;
this.codes.router_navigatefn =
`
import React from 'react'
import { useNavigate } from 'react-router-dom'
function Userdata() {
    const navigate = useNavigate();

    return (
        <div className='card mt-4'>
            <div className='card-body'>
                <p className="btn btn-info" onClick={() => { navigate('/user') }}>Back</p>
            </div>
        </div>
    )
}

export default Userdata
`;

this.codes.router_navigationfn_appjs =
`
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import User from './pages/User';
import About from './pages/About';
import Notfound from './pages/Notefound';
import Userdetails from './pages/Userdetails';
import Userinfo from './pages/Userinfo';
import Userdata from './pages/Userdata';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='page'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user" element={<User />} />
          <Route path="userdetails/:id" element={<Userdetails />} />
          <Route path="userinfo" element={<Userinfo />} />  
          <Route path="userdata" element={<Userdata />} /> 
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
`;

this.codes.router_navigationfn_userjs =
`
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';

function User() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchusers();
    }, [])

    const fetchusers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data)
    }
    return (
        <div className='row'>
            <div className='col-lg-4'>
            <p>Routing by using navigate function and parameters</p>
                {users.map(user => (
                    <div className="users" key={user.id}>
                        <div className='users-item'>
                            <div className="title">
                            <p className="btn btn-info" onClick={() => { navigate('/userdata',{state:{data:user}}) }}>{user.name}</p>
                            </div>
                            <div className="descr">
                                {user.email}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default User
`;
this.codes.router_navigationfn_userinfojs =
`
import React from 'react';
import { useLocation } from "react-router-dom";
function Userdata() {

    const location = useLocation();
    const state = location.state || {};
    const user = state.data || {}
    console.log(user)

    return (
        <div className="page details">
            <div className="title">
                {user.name}
            </div>
            <div className="body">
                Email {user.email}
            </div>
            <div className="body">
                Phone: {user.phone}
            </div>
        </div>
    )
}

export default Userdata
`;
  }

}
