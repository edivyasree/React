import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div>
          <ul>
              <li><a href="Home">home</a></li>
              <li><a href="aboutus">aboutus</a></li>
              <li><a href="contact">contact</a></li>
              
          </ul>
      </div>
    )
  }
}

export default NavBar