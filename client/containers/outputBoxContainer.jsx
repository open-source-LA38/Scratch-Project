import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/action.js';

// import child components

const mapStateToProps = (state) => ({
// rule: pick what state properties you want from store and to pass to your children as props
// because your children components cannot access the state in store
  // get the array state property from store
  // newEndpoint: '',

  urlList: state.outputs.urlList,
  // const url = U
});

const mapDispatchToProps = (dispatch) => ({
// componenets can update state values
// will be used to pass down disptach props to child components

});

class OutputBoxContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    // initialize empty array
    const childrenList = [];

    // iterate through the endpointList array
    for (let i = 0; i < props.urlList.length; i += 1) {
      const urlObj = props.urlList[i];
      childrenList.push(
        <outputBox urlObj={ urlObj } />
      )
      // push render boxes of div(outputBox) for each element
      // passing in relevant props and dispatch props
    }
  }
    return (
        // call outputBox component whenever add button in inputBox is clicked
            // state is changed
        // passes down state to outputBox(children)
        <div>
          {childrenList}
        </div>
        // utilzing JSX, call array of child component boxes   
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(outputBoxContainer);
