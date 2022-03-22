import './App.css';
import {Route} from 'react-router'
import Nav from './components/Nav';
import Detail from './components/Detail';
import Head from './components/Head';

function App() {
  return (
    <div className="App">
      <Head/>
      <Route path='/' component={Nav} exact/>
      <Route path='/detail/:id' component={Detail} >
      </Route>
    </div>
  );
}

export default App;
