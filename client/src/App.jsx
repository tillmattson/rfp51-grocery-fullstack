import React from 'react';
import addGroceries from './addGroceries.js';
import getGroceries from './getGroceries.js'
import Form from './Form.jsx'
import List from './List.jsx'


class App extends React.Component {
  constructor(){
    super();
    this.updateGroceryList = this.updateGroceryList.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.renderItems()
  }

  updateGroceryList(data) {
    this.setState({
      items: data
    })
  }

  renderItems() {
    getGroceries(this.updateGroceryList);
  }

  render() {
    return (<div>
      <img src='./grocery-bags.png'/>
      <h1>Grocery List</h1>
      <Form addGroceries={addGroceries} renderItems={this.renderItems}/>
      <List items={this.state.items}/>
    </div>)
  }
}






export default App;