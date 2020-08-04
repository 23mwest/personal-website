import React from 'react';
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { 
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

//import './App.css';


function App() {
  return (
    <div>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
    </HashRouter>
    </div>
  );
}

export default App;
