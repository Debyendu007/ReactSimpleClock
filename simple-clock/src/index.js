import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component {
  constructor(prop)
  {
    super(prop);

    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick()
  {
    this.setState( {
      date: new Date()
    });
  }

  render() {
    
    return (
      <div>
        <h1>Hello User</h1>
        <FormattedDate date = {this.state.date} />
      </div>
    );
  }
}

function FormattedDate(props) {
  return (
    <h2>It is {props.date.toLocaleTimeString()}</h2>
  )
}

ReactDOM.render(<Clock />, document.getElementById('root'));