// @flow
import React from 'react'

import withModal from '../enhancers/withModal'

type Props = {
  onCloseModal: () => void,
}

const Hello = ({
  onCloseModal,
}: Props) => (
  <div>
    안녕하세요
    <button>확인</button>
    <button onClick={onCloseModal}>취소</button>
  </div>
)

export default withModal<Props>(Hello)
