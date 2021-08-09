import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import {TodoListStore} from './pages/todoListe';

function App() {
  return (
    <Provider store={store}>
      <TodoListStore/>
      {/* <TodoListe/> */}
    </Provider>
  );
}

export default App;
