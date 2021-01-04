import './App.css';
import store from './store'
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom'
import Main from './components/main'
import Login from './components/auth'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Main}/>
          <Route exact path='/auth' component={Login}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
