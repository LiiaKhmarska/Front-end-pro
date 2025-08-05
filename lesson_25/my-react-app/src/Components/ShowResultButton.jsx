import { Component } from "react";

export class ShowResultButton extends Component{
    render() {
        return(
            <>
            <button className="show-btn"
            onClick={this.props.onClick}
            disabled={this.props.disabled}
            >
           Показати результат
          </button>
            </>
        )
    }
}
   
