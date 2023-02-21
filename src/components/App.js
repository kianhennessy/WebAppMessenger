import '../App.css';
// allow for multipage applications
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from '../contexts/AuthContext';

// import components
import Message from "./Message";
import Login from './Login';

function App () {
  return (
    <div style={{fontFamily: 'Avenir'}}>
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
  )
}
export default App;
