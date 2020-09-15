import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/action.js";
import OutputBox from "../components/OutputBox";

// import child components

const mapStateToProps = (state) => ({
  // rule: pick what state properties you want from store and to pass to your children as props
  // because your children components cannot access the state in store
  // get the array state property from store
  // newEndpoint: '',

  urlList: state.outputs.urlList,
  // currentUser: state.outputs.currentUser,
  // status: state.outputs.status,
  url_id: state.outputs.urlList[0].url_id,
  url: state.outputs.urlList[0].url,
});

const mapDispatchToProps = (dispatch) => ({
  // componenets can update state values
  // will be used to pass down disptach props to child components
  checkStatus: (statusObj) => dispatch(actions.checkNow(statusObj)),
});


class OutputBoxContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // initialize empty array
    const childrenList = this.props.urlList.map( (index) => 
      <OutputBox
        key={index.url_id}
        url_id={index.url_id}
        url={index.url}
        status={ index.status }
        dispatchCheckStatus={this.props.checkStatus}

      />
    )


    // when user logs in, user will be stored in state.currentUser
    // pull state.currentuser from state and only render objects from urllist with urlList.username = currentuser
    // iterate through the endpointList array

    // push render boxes of div(outputBox) for each element
    // passing in relevant props and dispatch props

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
}

export default connect(mapStateToProps, mapDispatchToProps)(OutputBoxContainer);
