import React, { Component, PropTypes } from 'react'
import Row from './Row'
import Col from './Col'
import Button from './Button'
import Text from './Text'
import Table from './Table'

class App extends Component {

  componentDidMount() {
    window.refs = this.refs;
    console.log(this.refs);
  }

  render() {
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
            ref="table"
            condensed
            striped
            hover
            onSelect={() => {}}
            data={[
              { id: 1, name: 1, age: 1 },
              { id: 2, name: 2, age: 2 },
              { id: 3, name: 3, age: 3 },
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

}

export default App
