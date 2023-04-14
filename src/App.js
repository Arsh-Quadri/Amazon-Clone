import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './Firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in  
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])
  console.log("new>", user)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/checkout' element={<><Header /><Checkout /></>} />

          <Route path='/login' element={<Login />} />

          <Route path='/' element={<><Header /><Home /></>} />

        </Routes>

      </div>

    </Router>
  );
}

export default App;
