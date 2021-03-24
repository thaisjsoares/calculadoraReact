import { Component } from "react";

class Button extends Component {

    handleClick() {
        const {onClick, disabled} = this.props;
        if (onClick && !disabled) {
            onClick();
        }
    }

    render() {
        const cssButtonClass = this.props.disabled ? "button disabled" : "button";
        return (
            <div className={cssButtonClass} onClick={this.handleClick.bind(this)}>
                {this.props.display}
            </div>
        )
    }
}

export default Button;
