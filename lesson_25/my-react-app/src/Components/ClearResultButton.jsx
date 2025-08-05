import { Component } from "react";

export class ClearResultButton extends Component{
    render() {
        return (
            <>
                <button className="clear-btn"
                            onClick={this.props.onClick}
                            disabled={this.props.btnActive}>
                          Очистити</button>
            </>
        )
    }
}