import '../App.css';
// allow for multipage applications
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from '../contexts/AuthContext';

// import components
import Login from './Login';
import Message from "./Message";

function App () {
  return (
    <div style={{fontFamily: 'Arial'}}>

        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/message" element={<Message/>}/>
            </Routes>
            </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
