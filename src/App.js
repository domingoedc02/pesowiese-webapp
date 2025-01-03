import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import WithData from "./CustomRoute";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />}/>
            {/*<Route path="/dashboard" element={<Dashboard/>}/>*/}
            <Route path="/dashboard" element={<WithData Component={Dashboard}/>}/>
            <Route path="/transactions" element={<Dashboard/>}/>
            <Route path="/insights" element={<Dashboard/>}/>
            <Route path="/settings/customize" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
