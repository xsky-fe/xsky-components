import React, { PropTypes } from 'react'
import Row from './Row'
import Col from './Col'
import Button from './Button'
import Text from './Text'
import Table from './Table'

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
      <Col md="12">
        <Table
          condensed
          striped
          hover
          data={[
            { name: 1, age: 1 },
            { name: 2, age: 2 },
            { name: 3, age: 3 },
          ]}
          fields={{
            name: '姓名',
            age: '年龄',
          }}
          renderHeader={fields => fields}
          renderBody={values => values}
        />
      </Col>
    </Row>
  )
}

export default App
