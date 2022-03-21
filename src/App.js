import './App.css';
import {Route} from 'react-router'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Nav} exact/>
    </div>
  );
}

export default App;
