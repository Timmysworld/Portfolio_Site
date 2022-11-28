import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import {
  // BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <main>
      <Routes>
          <Route path='/' element={<Main/>}/>
      </Routes>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
