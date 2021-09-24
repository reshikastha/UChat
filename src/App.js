import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import Chat from './component/Chat';

function App() {
  return (
    //BEM naming convention
    <div className="app">
     <div className="app_body">
       <Sidebar/>
    <Chat/>
     </div>
    </div>
  );
}

export default App;
