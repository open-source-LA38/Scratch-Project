import React, { Component } from "react";

class OutputBox extends Component {
  constructor(props) {
    super(props);
  }
  //   //https://javascript.info/async-await
  // checkNow () {
  //   //triggered by onsubmit
  //   let statusObj={};

  //   fetch('/main/checkNow', {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(url_Id),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       statusObj = {
  //         status: data.status,
  //         url_Id: url_Id
  //       }
  //     })
  //     .then(()=>props.dispatchCheckStatus(statusObj))
  //     .catch ((err) => {
  //       console.error(err.messsage);
  //     })

  //   const url_Id = this.props.urlObj.url_Id
  //get request to '/main/checkNow'
  //   try {
  //     const check = await fetch('/main/checkNow', {
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(url_Id),
  //     })
  //     //store response in state (dispatch to reducer)
  //     const data = await check.json(); //like .then() / receive sth like data = {status: 200}

  //     const statusObj = {
  //       status: data.status,
  //       url_Id: url_Id
  //     }

  //    await props.dispatchCheckStatus(statusObj);
  //   }

  //   catch (err) {
  //     console.error(err.messsage);
  //   }

  // };

  render() {
    return (
      <div>
        {/* <div className="outputBox" url_Id={this.props.urlObj.url_Id} >
          url: {this.props.urlObj.url}
          status: {this.props.urlObj.status} */}
        {/* <form onSubmit= {() => checkNow()}> */}
        {/* <button>check now</button> */}
        {/* </form> */}
        {/* <button>uptime</button> */}
        {/* </div> */}
        <h1>Output Box is a success!</h1>
      </div>
    );
  }
}

export default OutputBox;
