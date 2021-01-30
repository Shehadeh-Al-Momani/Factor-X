import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './pictures/factorx.gif';
import Dropdown from 'react-bootstrap/Dropdown'
import { GiShoppingCart } from 'react-icons/gi';

const NavBar = () => {
  let history = useHistory();
  const [categories, setCategories] = useState([]);
  const getAllCategories = () => {
    axios
      .get('http://localhost:5000/categories')
      .then((res) => {
        setCategories(res.data)
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };


  const handleInput = (e) => {
    if (e.key === 'Enter') {
      history.push(`/result/${e.target.value}`)
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <div>
      <nav className="topnav navbar navbar-expand-md" >
        <ul >
          <li><img src={logo} alt="" width="80" height="50" className="d-inline" /></li>
          <li><Link to='/' >Home</Link></li>
          <li>
            <div id="navbarCollapse" className="collapse navbar-collapse">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">All Categories</a>
                  <div className="dropdown-menu dropdown-menu-right">
                    {
                      categories.map((e, i) => {
                        return <li key={i}>
                          <Link to={`/products/${e.id}`} className="dropdown-item text-dark" >{e.name}</Link>
                        </li>
                      })
                    }
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className='d-flex p-3'>
            <form className="container ">
              <div className="input-group" >
                <div class="search">
                  <input type="text" className="form-control col-xs-2" placeholder="Search for anything" aria-label="Search for anything" aria-describedby="basic-addon1" onKeyPress={(e) => handleInput(e)} />
                </div>
                <button class="btn btn-success">Search</button>
              </div>
            </form>
          </li>
          <li><Link to='/login' >Log in</Link></li>
          <li><Link to='/signup' >Sign Up</Link></li>
          <li><Link to='/logout' >Log out</Link></li>
        </ul>
      </nav>
    </div >
  );
};



export default NavBar;

{/* <div className="input-group-text" id="basic-addon1">
                  <Dropdown>
                    <Dropdown.Toggle variant="primery" id="dropdown-basic">  All Categories</Dropdown.Toggle>
                    <Dropdown.Menu>
                      {
                        categories.map((e, i) => {
                          return <div key={i}>
                            <Dropdown.Item><Link className="text-dark" to={`/products/${e.id}`}>{e.name}</Link></Dropdown.Item>
                          </div>
                        })
                      }
                    </Dropdown.Menu>
                  </Dropdown>
                </div> */}