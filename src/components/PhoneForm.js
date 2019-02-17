// @flow
import React from 'react'

type state = {
  name: string,
  phone: string,
  value: string,
}

type props = {
  onCreate: any,
}

class PhoneForm extends React.Component<props, state> {
  input = React.createRef<any>();

  state = {
    name: '',
    phone: '',
    value: '',
  }

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.onCreate(this.state)
    this.setState({
      name: '',
      phone: '',
    })
    // this.input.current.focus< null | any >()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
          ref={this.input}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button type="submit">등록</button>
      </form>
    )
  }
}

export default PhoneForm
