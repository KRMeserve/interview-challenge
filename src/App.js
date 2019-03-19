import React, { Component } from 'react';
import { Button } from './components';
import { ListCard } from './components';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: ["Item 1", "Item 2", "Item 3"]
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Components</h1>
          <ListCard header="Header" items={this.state.items}></ListCard>
        </header>
        <div className="component-list">
          <Button href="#" theme='go'> Button </Button>
        </div>
      </div>
    );
  }
}

export default App;
