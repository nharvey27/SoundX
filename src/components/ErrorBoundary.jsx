import React, { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="text-center">
          Oops something broke. <i className="material-icons">error_outline</i>
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
