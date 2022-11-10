import { Component } from 'react'
import './App.css';
import QuizBar from './components/QuizBar';

class App extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="App">
        <QuizBar />
      </div>
    )
  }
}

export default App
