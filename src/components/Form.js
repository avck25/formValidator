import React, { Component } from 'react';


class Form extends Component {
    render() {
        return (
            <div className="form">
                {this.props.children}
            </div>
        );
    }
}

export default Form;