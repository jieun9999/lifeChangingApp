import './App.css';
import {Routes, Route} from "react-router-dom";
import Overview from "../src/pages/Overview";
import Health from "../src/pages/Health";
import Money from "../src/pages/Money";
import Realtionship from "../src/pages/Relationship";
import Hobby from "../src/pages/Hobby";
import Settings from "../src/pages/Settings";
import Logout from "../src/pages/Logout";
import Menu from "../src/components/Menu";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path ="/" element ={<Overview/>}/>
    <Route path ="/health" element ={<Health/>}/>
    <Route path ="/money" element ={<Money/>}/>
    <Route path ="/relationship" element ={<Realtionship/>}/>
    <Route path ="/hobby" element ={<Hobby/>}/>
    <Route path ="/settings" element ={<Settings/>}/>
    <Route path ="/logout" element ={<Logout/>}/>
    </Routes>
    <div className='background'>
    <Menu/>
    </div>
    </div>
  );
}
export default App;
