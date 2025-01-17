import React from 'react'

class Day17 extends Components {
    constructor(props){
        super(props);
        this.state= { hasError: false};
    }


    static  getDerivedStateFromError(error) {
        return { hasError: true };
      }
      componentDidCatch(error, info) {
        console.error("Error caught by ErrorBoundary:", error, info);
      }
    
      render() {
        if (this.state.hasError) {
          return <h2>Something went wrong. Please try again later.</h2>;
        }
        return this.props.children;
      }
    }
    
export default ErrorBoundary;