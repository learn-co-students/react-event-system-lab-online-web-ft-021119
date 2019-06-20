// Code EyesOnMe Component Here

import React, { Component } from 'react';

export default class EyesOnMe extends React.Component{

    focusOnMe = () => console.log('Good!')

    blurMe = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button onFocus={this.focusOnMe} onBlur={this.blurMe} >Eyes on Me!</button>
    )
  }
}
