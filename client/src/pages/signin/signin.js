import React, { Component } from "react";

import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

import "./signin.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
          />

          <FormInput
            required
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
