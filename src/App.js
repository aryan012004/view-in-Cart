import logo from './logo.svg';
import './App.css';
import Cart from './Components/Cart';
import {Provider} from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Cart/>
    </div>
    </Provider>
  );
}

export default App;
