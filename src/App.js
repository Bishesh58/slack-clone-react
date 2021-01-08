import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './Components/Chat';
import { useState } from 'react';
import Login from './Components/Login';


function App() {

  //initially there will be no user so that user can login, then the state will have user
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          //you cannot have two child to return so wrap header & div with one parent fragment(<>)
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
              </Route>
            </Switch>
          </div>
        </>
        )}
        
      </Router>
    </div>
  );
}

export default App;
