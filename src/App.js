import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import Chat from './component/Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {useState} from 'react'
import Login from './component/Login';
import { useStateValue } from './StateProvider';


function App() {
const[{user},dispatch]= useStateValue();

  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login/>
      ):(
        <div className="app_body">
          <Router>
            <Sidebar/>
            <Switch>
              <Route path='/rooms/:roomId'>  
              <Chat/>
              </Route>
              <Route path ='/'>
              <Chat/>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
