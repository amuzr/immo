import React, { Component } from 'react';

import { connect } from 'react-redux';

export default class Main extends Component {
  componentWillMount() {
    console.log('main !!');
  }

  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}
