import { Component } from 'react'
import './App.css';
import QuizBar from './components/QuizBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cardStyle: "Random"
    }
  }

  userChoice = (cardStyle)=>{
    this.setState({
      cardStyle //cardStyle: cardStyle
    })
  }

  render(){
    return (
      <div className="App">
        <QuizBar userChoice={this.userChoice}/>
      </div>
    )
  }
}

export default App
