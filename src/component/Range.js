
import React from 'react';
import './Range.css'

class Range extends React.Component {
    constructor(props) {
      super(props);
      this.updateRange = this.updateRange.bind(this);
    }
    
    updateRange(e) {
      this.props.updateRange(e.target.value);
    }
    
    render() {
      // console.log(this.props);
      const { range, min, max, step } = this.props;
      return (
        <div>
          <span id="input">{min}</span>
          <input id="range" type="range"
            value={range}
            min={min}
            max={max}
            step={step}
            onChange={this.updateRange}
          />
          <span id="output">{max}</span>
          <span id="output">{range}</span>
        </div>
      )
    }
  }

  export default Range;