import { Component } from "react";

export class ShowResult extends Component{
    constructor(props) {
        super(props)
        this.state = {
            winnerCount : props.winnerCount,
            winnerEmoji : props.winnerEmoji
        }
       
    }

  static getDerivedStateFromProps(props, state) {
    if (props.winnerCount !==  state.winnerCount) {
      return {
          winnerCount: props.winnerCount,
          winnerEmoji : props.winnerEmoji
      };
    }
    return null; 
  }

    render() {
                  
        return (
            <div className='result-container'>
          <h2>Результати голосування</h2>
          <h3>Переможець: </h3>
          <p>{this.state.winnerEmoji}</p>
          <h3>кількість голосів: {this.state.winnerCount} </h3>
        </div>
        )
    }
}


