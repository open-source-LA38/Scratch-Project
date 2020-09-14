import React, { Component } from 'react';
import { connect } from 'react-redux';
import {postToDo} from '../actions/action.js' 
// import '@babel/plugin-proposal-class-properties' from '../../webpack.config.js';

class InputBox extends Component {
  constructor(props) {
    super(props)
    // this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  // function making api request

  // sendURL (url) {
  //   //triggered by onsubmit
  //   fetch('http://localhost:3000/main/addURL', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(url),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       const urlObj = {
  //         url: url,
  //         status: data.status,
  //         url_Id: data.url_Id
  //       }
  //     })
  //     .then(() => this.props.dispatchCheckStatus(urlObj))
  //     .catch ((err) => {
  //       console.error(err.messsage);
  //     })
  // }

//  sendURL (url) {
//     // making a request to api
//     try {
//       const send =  await fetch('/main/addURL', {

//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(url),
//       })
//       const data = await send.json();
      
//       // transform the data into the form we want by declaring an object constant
//       const urlObj = {
//         url: url,
//         status: data.status,
//         url_Id: data.url_Id
//       }
    
//       // call dispatch method on urlObj - props.dispatchAddUrl = addURL(urlObj) from MainContainer return statement
//       props.dispatchAddUrl(urlObj);
      
//     } catch (err) {
//       console.error(err.messsage);
//     }
//   }

  onSubForm (e) {
    e.preventDefault();
    console.log(e.target[0].value)
    postToDo(e.target[0].value)
  }

  render() {
   
    return (
      <div>
        {/*  will have to update with id class css */}
        <form onSubmit={this.onSubForm}>
          {/* // (e) => { */}
          {/* // e.preventDefault(); */}
          {/* // this.sendUrl(e.target.value)}> */}
          {/* <input type="text" placeholder="Enter endpoint here..."></input>
          <button type='submit'>Add</button> */}

        <input
        type="text"
        className="form-control"
      // value={description}
      //  onChange={handleChange}
      />
      <button className="btn btn-success">Add</button>
        </form>
      </div>

    )
  };
}

export default InputBox;





