import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {store} from './store/index';
import NavBar from './shared/components/NavBar';
import Home from './pages/Home';

import './App.css';
import NotFound from './pages/NotFound';
import Business from './pages/Business';
import Tech from './pages/Tech';
import Science from './pages/Science';
import Entertainment from './pages/Entertainment';
import Health from './pages/Health';
import Sports from './pages/Sports';





function App() {
  return (
    <Router>
      <div className="App">
      <Provider store={store}>
        <NavBar />
        <main className='main_content'>
          <Routes>
            <Route path="/" element={<Home />}/>    
            <Route path="/business/:query" element={<Business />} />
            <Route path="/tech/:query" element={<Tech />} />
            <Route path="/science/:query" element={<Science />} />
            <Route path="/entertainment/:query" element={<Entertainment />} />
            <Route path="/health/:query" element={<Health />} />
            <Route path="/sports/:query" element={<Sports />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </Provider>
    </div>
    </Router>
    
  );
}

export default App;
