import * as types from '../actions/action';

const initialState = {
  urlList: [{
    url: 'www.google.com', status: 200},
  { url: 'www.yahoo.com', status: 400],
{url: 'www.facebook.com', status: 400},
  newEndpoint: '',
  status: undefined,
  // graphData(maybe time/)
  
};

const outputReducer = (state = initialState, action) => {
  // ensure we make it to the reducer
  // console.log('made it to the reducer');
  switch (action.type) {
    // case types.enterTypeHere:
  //...initialstate
  // urlList: [{obj1}, {obj2}], 
  // newEndpoint: '',
  // status: undefined,
     case types.ADD_URL:
      // add the new response obj to urlList via payload
        // obj will contain prop of url and status as seen in InputBox.jsx
      // update the status prop 
      const newURLobj = action.payload;
      const copyUrlList = state.urlList.slice();
      copyUrlList.push(newURLobj);

      const newStatus = action.payload.status;

      return {
        ...state,
        urlList: copyUrlList,
        status: newStatus,
       }

  }
};

export default outputReducer;
