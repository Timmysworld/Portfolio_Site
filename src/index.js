import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import Main from './components/Main';
// import About from './pages/About/About';
import About from './components/pages/About/About'
import Projects from './components/pages/Projects/Projects';
import Blogs from './components/pages/Blog/Blogs';
import Contact from './components/pages/Contact/Contact';
import Navbar from './components/Navbar'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App/> */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<App/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='contact' element={<Contact/>}/>
      {/* </Route>     */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
