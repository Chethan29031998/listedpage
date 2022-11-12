
import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav';


//what is state
//state is just the data stored/showed in ur component at particuler movement


function App() {
   
  
  return (
    <div classNameName="App">
      <Nav/>
 <Outlet/>
       
    </div>

    
);

}


export default App;
