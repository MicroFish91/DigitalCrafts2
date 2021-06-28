import React, { Component } from 'react';
import { connect } from 'react-redux';
import increaseAction from './Actions/increaseAction';

export class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        {this.props.counter} <br />
        <button onClick={this.props.onIncreaseClick} >Increase</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: () => dispatch(increaseAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
