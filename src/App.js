import React, { PropTypes } from 'react'
import Row from './Row'
import Col from './Col'
import Button from './Button'
import Text from './Text'

function App(props) {
  return (
    <Row>
      <Col md="4+2">
        <Button onClick={() => console.log('hello')}>hello</Button>
      </Col>
      <Col md="6">
        <Text.blockqoute>
          <Text>hello, world</Text>
        </Text.blockqoute>
      </Col>
    </Row>
  )
}

export default App
