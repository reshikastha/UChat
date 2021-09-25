import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import Chat from './component/Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    //BEM naming convention
    <div className="app">
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
    </div>
  );
}

export default App;
