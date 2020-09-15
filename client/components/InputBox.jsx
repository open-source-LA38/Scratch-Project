import React from 'react';
import { connect } from 'react-redux';
import { AddURL } from '../actions/action.js'; 
import axios from 'axios';
import * as actions from "../actions/action.js"

// import '@babel/plugin-proposal-class-properties' from '../../webpack.config.js';

class InputBox extends React.Component {
  constructor(props) {
    super(props)
    this.onSubForm = this.onSubForm.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.state = {
    //   url: '',
    // }
  }

  onSubForm (e) {
    // preventDefault prevents reloading of the page when clicked
    e.preventDefault();
    const input = document.getElementById("addUrlForm");
    console.log(input.value);
    console.log('hello');

    //const { ur } = this.state 
    const url = input.value
    return axios.post('http://localhost:3000/main/addURL', `${url}`)
    .then((result)=>{
      console.log(this.props);
      console.log(result)
      // console.log('inputbox addURL', result.data.status);
      this.props.dispatchAddUrl({
        username: this.props.currentUser,
        url_id: result.data.url_id,
        status: result.data.status,
        url: url
      })
    })
    .catch(err=>
      console.log('err onsubform', err)
    )
    //e.target[0].value has the URL
    // console.log('inputbox.jsx e', e.target[0].value)
  }
  
// fetch('http://localhost:3000/main/addURL')
// .then(res => res.json(url))
// .then((result)=>{
//       console.log('inputbox addURL', result);
//     })
//     .catch(err=>
//       console.log('err onsubform', err)
//     )
//     //e.target[0].value has the URL
//     console.log('inputbox.jsx e', e)
//   }

  // onChange(e) {
  //   this.setState({ 
  //     [e.target.name] : e.target.value
  //   })
  // }

  render() {
   
    return (
      <div>
          <input id="addUrlForm" type="text" name="url"></input>
          <button type="submit" onClick={this.onSubForm}>Add url</button>
      </div>

    )
  };
}

export default InputBox;



