import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import TopicBrowser from './components/TopicBrowser/TopicBrowser';

class App extends Component {
  render() {
    return(
      <div>
        { TopicBrowser }
      </div> 
    )
  }
}

export default App;

ReactDOM.render(
  <Component />,
  document.getElementById('App')
)