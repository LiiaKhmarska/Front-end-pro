import { Component } from "react";

export class ClearResultButton extends Component{
    constructor(props) {
        super(props)
    }

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