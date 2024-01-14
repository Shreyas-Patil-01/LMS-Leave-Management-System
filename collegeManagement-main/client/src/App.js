import './App.css';
import Login from "./auth/Login";
import Staff from "./staff/Staff";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './admin/Admin';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/staff' element={<Staff />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
