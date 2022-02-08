import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from './components/login';
import SignUp from './components/signup';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
        <Router>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </Router>
      <Footer />
    </div>
  );
}

export default App;
