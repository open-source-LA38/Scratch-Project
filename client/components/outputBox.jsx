import React, { Component } from 'react';

class OutputBox extends Component {
  constructor(props) {
    super(props);
  }

  


  render () {
    return (
      <div className="outputBox">
        url: {this.props.urlObj.url}
        status: {this.props.urlObj.status}
        <button>check now</button>
        <button>uptime</button>
      </div>
    )
  }
}

export default OutputBox;
