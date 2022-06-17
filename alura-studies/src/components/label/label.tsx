import React from 'react'

class Label extends React.Component {
  render () {
    return (
      <label {...this.props.name}></label>
    )
  }
}

export default Label
