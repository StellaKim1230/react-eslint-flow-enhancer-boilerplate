// @flow
import React, { Component } from 'react'
import type { ComponentType } from 'react'

import './withModal.css'

const ESC = 27

type Props = {
  onCloseModal: () => void,
}

const withModal = <P>(WrappedComponent: ComponentType<P>) => (
  class extends Component<P & Props> {
    componentDidMount() {
      document.addEventListener('keyup', (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.keyCode === ESC) {
          this.props.onCloseModal()
        }
      })
    }

    render() {
      return (
        <div className="WithModal">
          WithModal
          <button onClick={this.props.onCloseModal}>모달 끄기</button>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
)

export default withModal
