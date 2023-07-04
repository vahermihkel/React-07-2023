//import logo from './logo.svg';
import './App.css';
// curly brackets
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <img className="pilt" src="https://director.ee/wp-content/uploads/2019/05/i_6_NOBE-3.jpg" alt="" />
      <button className="nupp">Lisa toode</button>
      <button className="nupp">Ostukorvi</button>

      <Routes>
        <Route path="avaleht" element={ <div>Olen avalehel</div> } />
        <Route path="lisa-toode" element={ <div>Olen toote lisamise lehel</div> } />
        <Route path="ostukorv" element={ <div>Olen ostukorvi lehel</div> } />
      </Routes>
    </div>
  );
}

export default App;
