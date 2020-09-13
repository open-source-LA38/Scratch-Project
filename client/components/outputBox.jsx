import React, { Component } from 'react';

class OutputBox extends Component {
  constructor(props) {
    super(props);
  }

  //https://javascript.info/async-await
checkNow = async () => {
//triggered by onsubmit
const url= this.props.urlObj.url;
//get request to '/main/checkNow'
try {
  const check = await fetch('/main/checkNow', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(url),
  })
  //store response in state (dispatch to reducer)
   const data = await check.json(); //like .then() / receive sth like data = {status: 200} 
} 
catch {

}

};


  render () {
    return (
      <div className="outputBox">
        url: {this.props.urlObj.url}
        status: {this.props.urlObj.status}
      <form>
        <button>check now</button>
      </form>
        <button>uptime</button>
      </div>
    )
  }
}

export default OutputBox;
