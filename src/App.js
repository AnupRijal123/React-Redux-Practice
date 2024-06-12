import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <hr></hr>
        <HooksCakeContainer />
        <hr></hr>
        <IceCreamContainer />
        <hr></hr>
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
//Provider gives access to redux store for the components inside of it