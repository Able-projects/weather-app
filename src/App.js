import './App.css';
import store from './store'
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom'
import Main from './components/main'
import Login from './components/auth'
import 'antd/dist/antd.css';
import setAuthToken from './store/setAuthToken'
//import jwt_decode from "jwt-decode"
import CrudCompany  from './components/crudCompany'
import CrudManager from './components/crudManager'
if (localStorage.token) {
  setAuthToken(localStorage.token);
  //const decoded = jwt_decode(localStorage.token);
  // const currentTime = Date.now()/1000;
  // if(decoded.exp<currentTime) {
  //    // store.dispatch(logoutUser());
  //     window.location.href = '/';
  // }
}
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Main}/>
          <Route exact path='/auth' component={Login}/>
          <Route exact path='/company' component={CrudCompany}/>
          <Route exact path='/company/:id' component={CrudManager}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
