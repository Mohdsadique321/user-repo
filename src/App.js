
import './screen/style.css';
import AppRouter from './screen/App-Router'
import { Provider } from 'react-redux';
import store from './store';
//



function App() {
  return (
    <div>
  <Provider store={store}>
<AppRouter /> 
</Provider>

 </div>
 
  );
}

export default App;
