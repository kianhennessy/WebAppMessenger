import '../App.css';
// allow for multipage applications
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AuthProvider } from '../contexts/AuthContext';

// import components
import Login from './Login';
import Message from "./Message";

function App () {
  return (
    <div style={{fontFamily: 'Arial'}}>

        <Router>
            <AuthProvider>
            <Switch>
                <Route path="/message" >
                    <Message/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
            </AuthProvider>
        </Router>
    </div>
  );
}
export default App;
