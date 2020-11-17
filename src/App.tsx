import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/home/Home';
import Auth from './components/auth/Auth';
import './App.css';
import { getCurrentUserOperation } from './redux/user/operation';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserOperation());
  }, [dispatch]);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
