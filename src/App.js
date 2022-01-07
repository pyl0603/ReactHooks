import './App.css';
import Header from './components/Header/index.js'
import AddInput from './components/AddInput/index.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <AddInput isInputShow={true}/>
    </div>
  );
}

export default App;
