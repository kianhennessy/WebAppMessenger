import './App.css';
// allow for multipage applications
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import components
import Login from './Login';

function App () {
  return (
    <div style={{fontFamily: 'Arial'}}>

        <Router>

            <Routes>
                <Route exact path="/login" element={<Login/>}/>
            </Routes>

        </Router>
    </div>
  );
}

export default App;
