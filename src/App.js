import './App.css';
import HomePage from './pages/homepage.component';
import { Route } from 'react-router-dom';

const HatsPage = ()=> (
  <div>
    <h1>hats page</h1>
  </div>
);

function App() {
  return (
    <div>
        <Route component={HomePage}></Route>
    </div>
  );
}

export default App;
