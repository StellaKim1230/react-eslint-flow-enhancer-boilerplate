import React, { Component } from 'react'

import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList'
import Warning from './components/Warning'
import Hello from './components/Hello'

class App extends Component {
  id = 3;

  state = {
    information: [
      {
        name: '홍길동',
        phone: '000-0000-0001',
        id: 0,
      },
      {
        name: '김지은',
        phone: '000-0000-0002',
        id: 1,
      },
      {
        name: '김스텔라',
        phone: '000-0000-0003',
        id: 2,
      },
    ],
    keyword: '',
    isShowModal: true,
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }

  handleCreate = (data) => {
    const { information } = this.state
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++,
      }),
      // information: information.concat(Object.assign({}, data, {
      //   id: this.id++
      // }))
    })
  }

  handleRemove = (id) => {
    const { information } = this.state
    this.setState({
      information: information.filter(info => info.id !== id),
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) {
            return {
              id,
              ...data,
            }
          }
          return info
        },
      ),
    })
  }

  onCloseModal = () => this.setState({
    isShowModal: false,
  })

  render() {
    const { isShowModal } = this.state

    return (
      <div>
        {isShowModal && <Warning onCloseModal={this.onCloseModal} />}
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        <PhoneInfoList
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1,
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default App
