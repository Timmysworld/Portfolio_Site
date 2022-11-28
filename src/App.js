import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import {
  // BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <Routes>
          <Route path='/' element={<Main/>}/>
      </Routes>

    </div>
  );
}

export default App;
