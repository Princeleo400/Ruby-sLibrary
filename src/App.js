import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Home';
import Home from './pages/Home/Home';
import ProtectedRoute from './routes/ProtectedRoute';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Dashboard from './pages/Dashboard/dashboard';
import AboutBooks from './pages/Dashboard/aboutBooks';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
              <Route path="/" element={<Index />  } />
              <Route path="/home" element={<Home />  } />
              <Route path="/login" element={<SignIn />  } />
              <Route path="/signup" element={<SignUp />  } />
              <Route path="/dashboard" element={<Dashboard />  } />
              <Route path="/aboutbook" element={<AboutBooks />  } />
              
              <Route element={<ProtectedRoute />}>
                {/* <Route path="/profile" element={<UserProfile />} /> */}
                
              </Route>
            </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
