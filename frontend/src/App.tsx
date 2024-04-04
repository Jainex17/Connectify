import { Users } from './components/Users'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Teams } from './components/Teams';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
