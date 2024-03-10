import './App.scss';
import { MyProvider } from './context/MyContext';
import Home from './page/Home';


function App() {

  return (
    <div className="App">
      <MyProvider>
        <Home />
      </MyProvider>
    </div>
  );
}

export default App;
