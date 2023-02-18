import '../App.css';
// allow for multipage applications
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from '../contexts/AuthContext';

// import components
import Login from './Login';

function App () {
  return (
    <div style={{fontFamily: 'Arial'}}>

        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
            </Routes>
            </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
