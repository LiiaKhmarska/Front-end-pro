import { Component } from 'react';
import './App.css'
import emojis from './Components/emojis.json';
import { ShowResult } from './Components/ShowResult';
import { ShowResultButton } from './Components/ShowResultButton';
import { ClearResultButton } from './Components/ClearResultButton';

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
      this.setState(
        (prevState) => {          
        const updateCounter = prevState.counter.map((item) => {     
          if (item.id === id) {
            return {...item, count: item.count+1}
          }
          return item;
        })

        return {
          ...prevState,
          counter: updateCounter,
          btnActive: true
        }
      },
      () => localStorage.setItem('emojiesCounter', JSON.stringify(this.state))
  )}


  handleClearResults() {
    this.setState(
        (prevState) => {          
        const updateCounter = prevState.counter.map((item) =>({...item, count:0}))
        return {
          ...prevState,
          counter: updateCounter,
          winnerCount: '',
          winnerEmoji: 0,
          showResult: false,
          btnActive : false
        }
      },
      () => localStorage.setItem('emojiesCounter', JSON.stringify(this.state))
  )}

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
    },
      () => localStorage.setItem('emojiesCounter', JSON.stringify(this.state))
    );    
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
          <ShowResultButton onClick={this.handleShowResults.bind(this)} disabled={!this.state.btnActive} />
          <ClearResultButton onClick={this.handleClearResults.bind(this)} disabled={!this.state.btnActive}/>
        </div>
        {this.state.showResult &&
          <ShowResult winnerEmoji={this.state.winnerEmoji} winnerCount={this.state.winnerCount} />
        }
      </div>
         
    )
  }
}

export default App
