import { Component } from 'react';
import './App.css'
import emojis from './Components/emojis.json';
import { ShowResult } from './Components/ShowResult';

class App extends Component{

  state = {
    counter: [
      { id: 'i1', count: 0 },
      { id: 'i2', count: 0 },
      { id: 'i3', count: 0 },
      { id: 'i4', count: 0 },
      { id: 'i5', count: 0 },
    ],
    winnerEmoji: '',
    winnerCount: 0,
    showResult: false,
    btnActive: false
  }

  componentDidMount() {
      const storedValue = localStorage.getItem('emojiesCounter');
    if (storedValue) {
      this.setState(JSON.parse(storedValue));      
    }
  }

  handleClick(id) {
       this.setState(({ counter }) => ({
      counter: counter.map(item => {
        if (item.id === id) {
          (item.count++)
          return item
        } else {
          return item
        }
      })
       }))
      this.setState({ btnActive: true },
      () => localStorage.setItem('emojiesCounter', JSON.stringify(this.state)))
  }


  handleClearResults() {
    this.setState(({ counter }) => ({
      counter: counter.map(item => {
        item.count = 0;
        return item
      })
    }));
    this.setState({
      winnerCount: '',
      winnerEmoji: 0,
      showResult: false,
      btnActive : false
    },
      () => localStorage.setItem('emojiesCounter', JSON.stringify(this.state))
    )    
  }

  handleShowResults() {
    const resultTable = this.state.counter;
    let winnerCount = resultTable[0].count;
    let winnerID = resultTable[0].id;
    resultTable.forEach(item => {
      if (winnerCount < item.count ) {
        winnerCount = item.count;
        winnerID = item.id
      }
   });
    const winnerEmoji = emojis.find(item => item.id === winnerID).emoji;
    this.setState({
      winnerCount: winnerCount,
      winnerEmoji: winnerEmoji,
      showResult : true
    });    
  }

  render() { 
    return (
      <div className='container'>
        <div className='wrapper'>
        <h2>Голосування за найкращій смайлик</h2>
         <ul>
                    {emojis.map(item => (
                        <li key={item.id} onClick={()=> this.handleClick(item.id)}>
                            {item.emoji}
                            <div className="showCount">{this.state.counter.find(elem =>elem.id ===item.id).count}</div>
                        </li>
                    ))}
          </ul>
          <button className="show-btn"
            onClick={this.handleShowResults.bind(this)}
            disabled={!this.state.btnActive}>
           Показати результат
          </button>
          <button className="clear-btn"
            onClick={this.handleClearResults.bind(this)}
            disabled={!this.state.btnActive}>
          Очистити</button>
        </div>
        {this.state.showResult &&
          <ShowResult winnerEmoji={this.state.winnerEmoji} winnerCount={this.state.winnerCount} />
        }
      </div>
    
     
    )
  }
}

export default App
