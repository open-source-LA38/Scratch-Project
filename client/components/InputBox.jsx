import React, { Component } from 'react';
// import { connect } from 'react-redux';

class InputBox extends Component {
    constructor(props) {
        super(props)
    }

  // function making api request
  function sendURL(url) {
  // making a request to api
  return fetch('url', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    })
  })
    // we are se nding the endpoint URL in the form of req.body as an object
  
  }


    render() {
        return (
          <div>
          {/*  will have to update with id class css */}
            <form onSubmit={ (e) => {
              dipatch(   sendUrl(e.target.value)   );
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