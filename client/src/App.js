import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Product from './components/Product';
import CategoryItems from './components/CategoryItems';
import Result from './components/Result';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {

  return (
    <Router >
      <Route render={(props) => <NavBar {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      <Route exact path="/signup" render={(props) => <Signup {...props} />} />
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/product/:id" render={(props) => <Product {...props} />} />
      <Route exact path="/products/:id" render={(props) => <CategoryItems {...props} />} />
      <Route exact path="/result/:id" render={(props) => <Result {...props} />} />
    </Router >
  );
};

export default App;


