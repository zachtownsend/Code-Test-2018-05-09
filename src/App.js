import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './layouts/Index';
import FormPage from './layouts/FormPage';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Route path="/" exact component={Index} />
          <Route path="/page-2/" exact component={FormPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
