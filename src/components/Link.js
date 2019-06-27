import React, { Component } from 'react'

export class Link extends Component {
  render() {
    const { link } = this.props
    return (
      <div>
        <div>
          {link.description} ({link.url})
        </div>
      </div>
    )
  }
}

export default Link;