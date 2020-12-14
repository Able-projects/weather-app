import './App.css';
import store from './store'
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom'
import Main from './components/main'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Main}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
