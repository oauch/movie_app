import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {                         // 데이터는 변한다.
    isLoading: true
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 5000);
  }
  render(){
    const {isLoading} = this.state;
    return <div>{this.state.isLoading ? "Loading..." : "We are ready"}</div>
  }
}

export default App;