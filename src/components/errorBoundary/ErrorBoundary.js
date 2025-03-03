import React from "react";
import { Component } from "react";
import ErrorMessage from "../errorMessage";

class ErrorBondary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return this.props.children;
  }
}

export default ErrorBondary;
