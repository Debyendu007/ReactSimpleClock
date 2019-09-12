import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Clock(prop)
{
  return (
    <div>
      <h1>Hello User</h1>
      <h2>Current time : {prop.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick()
{
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
}

setInterval(tick, 1000);