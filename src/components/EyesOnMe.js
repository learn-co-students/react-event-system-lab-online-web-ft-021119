// Code EyesOnMe Component Here
import React, {Component} from 'react'


export default class EyesOnMe extends Component {


  focusMe = (e) => {
    console.log('Good!')
  }


  blurMe = (e) => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
    <button onFocus={this.focusMe} onBlur={this.blurMe} />
    )
  }
}
