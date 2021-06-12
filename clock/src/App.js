import './App.css';
import Clock from './Pages/Clock'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   <Router>
     <Switch>
       <Route path='/'>
         <Clock></Clock>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
