import React, { Component } from 'react';

class Bands extends Component {
  render() {
    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index} id={todo.id} /* <- code change */ store={this.props.store} /> 
    });
 
    return(
      <ul>
        band={band}
      </ul>
    );
  }
};

export default Bands;
