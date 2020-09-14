import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputBox extends Component {
  constructor(props) {
    super(props)
  }

  // function making api request
 sendURL () {
   async (url)=> {
    // making a request to api
    try {
      const send =  await fetch('/main/addURL', {

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(url),
      })
      const data = await send.json();
      
      // transform the data into the form we want by declaring an object constant
      const urlObj = {
        url: url,
        status: data.status,
        url_Id: data.url_Id
      }
      
      // call dispatch method on urlObj - props.dispatchAddUrl = addURL(urlObj) from MainContainer return statement
      props.dispatchAddUrl(urlObj);
      
    } catch (err) {
      console.error(err.messsage);
    }
  }
}

  render() {
    return (
      <div>
        {/*  will have to update with id class css */}
        <form onSubmit={(e) => {
          sendUrl(e.target.value);
        }
        }>
          <input type="text" placeholder="Enter endpoint here..."></input>
          {/* remember to fill in onclick based on dispatch method created */}
          <button type='submit'>Add</button>

        </form>
      </div>

    )
  }
}

export default InputBox;