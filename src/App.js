import './App.css';
import Header from './components/Header/index.js'
import AddInput from './components/AddInput/index.js';
import React , { useState } from 'react'
function App() {
  const [ isInputShow,SetIsInputShow ] = useState(false)
  return (
    <div className="App">
      <Header openInput={()=> SetIsInputShow(!isInputShow)}/>
      <AddInput isInputShow={isInputShow}/>
    </div>
  );
}

export default App;
