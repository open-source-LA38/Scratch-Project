import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddURL } from '../actions/action.js'; 
import axios from 'axios';

// import '@babel/plugin-proposal-class-properties' from '../../webpack.config.js';

class InputBox extends Component {
  constructor(props) {
    super(props)
    this.onSubForm = this.onSubForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      url: '',
    }
  }

  onSubForm (e) {
    // preventDefault prevents reloading of the page when clicked
    e.preventDefault();
    const input = document.getElementById("addUrlForm");
    console.log(input);
    console.log('hello');

    const { url } = this.state 
    axios.post('http://localhost:3000/main/addURL', url)
    .then((result)=>{
      console.log('inputbox addURL', result);
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

  onChange(e) {
    this.setState({ 
      [e.target.name] : e.target.value
    })
  }

  render() {
   
    return (
      <div>
          <input id="addUrlForm" type="text" name="url" value={this.state.url} onChange={this.onChange}></input>
          <button type="submit" onClick={this.onSubForm}>Add url</button>
      </div>

    )
  };
}

export default InputBox;





