import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Calls from './pages/Calls/Calls';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/calls' element={<Calls />}></Route>
      </Routes>
    </div>
  );
}

export default App;
