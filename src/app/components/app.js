import React, { Component, Children, cloneElement } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('app !!');
  }

  shouldComponentUpdate(nextState) {

  }
  
  render() {
    return (
      <div>
        <div>Header</div>
        <hr />
        {Children.map(this.props.children, (child) => cloneElement(child, {}))}
      </div>
    );
  }
}