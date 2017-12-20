import React, { Component } from 'react';


class Input extends Component {


    render() {
        let errorMessage = this.props.hasError ? <h5>{this.props.errorMessage}</h5> : '';
        return (
            <div className="Input">
                {errorMessage}
                <label>{this.props.name}</label>
                <input value={this.props.value} onBlur={this.props.blur} onChange={this.props.change} name={this.props.name} />

            </div>
        );
    }
}

export default Input;