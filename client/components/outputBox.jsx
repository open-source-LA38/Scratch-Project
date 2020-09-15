import React, { Component } from "react";
import axios from "axios";

class OutputBox extends Component {
  constructor(props) {
    super(props);
    this.checkNow = this.checkNow.bind(this);
  }

  checkNow() {
    //triggered by onsubmit
    return axios
      .post(
        "http://localhost:3000/main/checkNow",
        {
          url_id: this.props.url_id,
          url: this.props.url,
        }
      )
      .then((status) =>
        // console.log(this.props.dispatchCheckStatus))

        this.props.dispatchCheckStatus({
          status: status.data.status,
          url_id: this.props.url_id,
        })
      )
      .catch((err) => {
        console.error(err.messsage);
      });
  }


  // key={this.props.url_id}
  // url={this.props.url}
  // status={this.props.status}
  // dispatchCheckStatus={this.props.checkStatus}

  render() {
    return (
      <div>
      {/* <h1>hellllo outputbox</h1> */}
        <div className="outputBox" url_id={this.props.url_id}>
          url: {this.props.url}
          status: {this.props.status} 
          {/* <h1>{this.props.username}</h1>
          <h1>{this.props.key}</h1> */}
          <button onClick={this.checkNow}>check now</button>
          <button>uptime</button>
        </div>
      </div> 
    );
  }
}

export default OutputBox;
