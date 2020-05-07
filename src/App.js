import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Range from './component/Range'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0,
      min: 10,
      max: 100,
      step:1
    }
    this.updateRange = this.updateRange.bind(this);
  }
  
  updateRange(val) {
    this.setState({
      rangeVal: val
    })
  } 
  
  render() {
    const { rangeVal, min, max, step } = this.state;
    return (
      <Range range={rangeVal} min={min} max={max} step={step} updateRange={this.updateRange}/>
    )
  }  
}

// const root = document.getElementById('root');
// ReactDOM.render(<App />, root);

export default App;
