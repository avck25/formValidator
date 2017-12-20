import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import validator from 'email-validator'

class App extends Component {
  constructor() {
    super();
    this.state = {
      formValues: {
        firstName: {
          value: '',
          errorMessage: 'required',
          error: false
        },
        lastName: {
          value: '',
          errorMessage: 'required',
          error: false
        },
        email: {
          value: '',
          errorMessage: 'valid email',
          error: false
        }
      },
      submit: false
    }

  }

  checkError = (objName) => {
    let hasError = false;
    let newState = Object.assign({}, this.state);
    if (newState.formValues[objName].errorMessage === 'required' && !newState.formValues[objName].value) {
      newState.formValues[objName].error = true;
      hasError = true;
    } else if (newState.formValues[objName].errorMessage === 'valid email' && newState.formValues[objName].value !== '' && !validator.validate(newState.formValues[objName].value)) {
      newState.formValues[objName].error = true;
      hasError = true;
    } else {
      if (newState.formValues[objName].error) {
        newState.formValues[objName].error = false;
      }
      hasError = false;
    }

    this.setState(newState);
    return hasError;
  }


  blur = (e) => {

    this.checkError(e.target.name);

  }

  changeHandler = (e) => {

    let newState = Object.assign({}, this.state);
    newState.formValues[e.target.name].value = e.target.value;
    if (newState.formValues[e.target.name].error) {
      newState.formValues[e.target.name].error = false;
    }
    this.setState(newState);

  }

  handleSubmittion = () => {

    if (this.state.submit) {
      console.log('submitted');
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    let hasError = Object.keys(this.state.formValues).filter((v) => this.checkError(v));

    let newSubmit = this.state;
    if (!hasError.length) {
      newSubmit.submit = true;

    }
    this.setState(newSubmit);
    this.handleSubmittion();
  }

  render() {
    return (
      <div className="App">
        <form >
          <Input
            name='firstName'
            value={this.state.formValues.firstName.value}
            errorMessage={this.state.formValues.firstName.errorMessage}
            hasError={this.state.formValues.firstName.error}
            change={this.changeHandler}
            blur={this.blur}
          />
          <Input
            name='lastName'
            value={this.state.formValues.lastName.value}
            errorMessage={this.state.formValues.lastName.errorMessage}
            hasError={this.state.formValues.lastName.error}
            change={this.changeHandler}
            blur={this.blur}
          />
          <Input
            name='email'
            value={this.state.formValues.email.value}
            errorMessage={this.state.formValues.email.errorMessage}
            hasError={this.state.formValues.email.error}
            change={this.changeHandler}
            blur={this.blur}
          />
          <button onClick={this.onSubmit}>submit</button>
        </form>

      </div>
    );
  }

}


export default App;
