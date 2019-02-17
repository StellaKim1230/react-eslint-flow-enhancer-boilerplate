// @flow

import React, { Component, createRef } from 'react'

type State = {
  name: string,
  phone: string,
}

type Props = {
  onCreate: (data: State) => void,
}

class PhoneForm extends Component<Props, State> {
  input: { current: null | HTMLInputElement } = createRef<HTMLInputElement>()

  state = {
    name: '',
    phone: '',
  }

  handleChange = ({ target }: SyntheticInputEvent<EventTarget>) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  handleSubmit = (e: SyntheticInputEvent<EventTarget>) => {
    e.preventDefault()
    this.props.onCreate(this.state)
    this.setState({
      name: '',
      phone: '',
    })
    this.onFocus()
  }

  onFocus = () => {
    const { current } = this.input
    if (!current) return
    current.focus()
  }

  render() {
    const { value, name } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={this.input}
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={name}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={value}
        />
        <button type="submit">등록</button>
      </form>
    )
  }
}

export default PhoneForm
