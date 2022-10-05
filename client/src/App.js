import Login from "./components/Login";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import Signup from "./components/Signup";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
