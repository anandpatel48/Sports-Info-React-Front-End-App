import './App.css';
import NBA from './components/NBA'
import MLB from './components/MLB'
import Main from './components/Main'
import BoxScore from './pages/BoxScore'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Main />} />
          <Route path = "/NBA" element= {<NBA />} />
          <Route path = "/boxscore" element= {<BoxScore />} >
            <Route path = ":id" element = {<BoxScore />} />
          </Route>
          <Route path = "/MLB" element= {<MLB />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
