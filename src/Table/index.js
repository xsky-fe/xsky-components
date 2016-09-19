// base
import React, { PropTypes } from 'react'
import map from 'lodash/map'
import partial from 'lodash/partial'
import { Map } from 'immutable'
import cn from 'classnames'
import emptyFunc from '../utils/fp.js'

class Table extends React.Component {

  constructor(...args) {
    super(...args)

    this.state = {
      all: false,
      items: new Map(),
    }

    this.handleSelect = () => {
      this.props.onSelect(this.selected)
    }

    this.handleToggleAllClick = () => {
      const nextState = !this.state.all;
      this.setState({
        all: nextState,
        items: new Map(this.props.data.map(v => [v.id, nextState])),
      }, this.handleSelect)
    }

    this.handleToggleItemClick = (item) => {
      const { items } = this.state
      this.setState({
        items: items.update(item.id, v => !v),
      }, this.handleSelect)
    }
  }

  get selected() {
    return this.state.items
  }

  render() {
    const {
      props: {
        className, fields, data,
        bordered, condensed, hover, responsive, striped,
        renderHeader, renderBody, onSelect, onEdit, onDelete,
      },
      state: { all, items },
    } = this

    const tableComponent = (
      <table
        className={cn(className, {
          table: true,
          'table-bordered': bordered,
          'table-condensed': condensed,
          'table-hover': hover,
          'table-striped': striped,
        })}
      >
        {renderHeader !== emptyFunc && (
          <thead>
            <tr>
              {onSelect !== emptyFunc && (
                <th>
                  <input
                    type="checkbox"
                    checked={Boolean(all)}
                    onChange={this.handleToggleAllClick}
                  />
                </th>
              )}

              {map(renderHeader(fields), (v, k) =>
                fields[k] && <th key={k}>{v}</th>
              )}

              {onEdit !== emptyFunc && (<th />)}
              {onDelete !== emptyFunc && (<th />)}
            </tr>
          </thead>
        )}

        {renderBody !== emptyFunc && (
          <tbody>
            {data.map((row, i) =>
              <tr key={i}>
                {onSelect !== emptyFunc && (
                  <td>
                    <input
                      type="checkbox"
                      checked={Boolean(items.get(row.id))}
                      onChange={partial(this.handleToggleItemClick, row)}
                    />
                  </td>
                )}

                {map(renderBody(row, fields), (v, k) =>
                  fields[k] && <td key={k}>{v}</td>
                )}

                {onEdit !== emptyFunc && (
                  <td>
                    <span onClick={partial(onEdit, row)}>edit</span>
                  </td>
                )}

                {onDelete !== emptyFunc && (
                  <td>
                    <span onClick={partial(onDelete, row)}>delete</span>
                  </td>
                )}
              </tr>
            )}
          </tbody>
        )}
      </table>
    )

    return responsive ? (
      <div className="table-responsive">
        {tableComponent}
      </div>
    ) : tableComponent
  }

}

Table.propTypes = {
  fields: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,

  bordered: PropTypes.bool,
  condensed: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.bool,
  striped: PropTypes.bool,

  renderHeader: PropTypes.func,
  renderBody: PropTypes.func,
  onSelect: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
}

Table.defaultProps = {
  renderHeader: emptyFunc,
  renderBody: emptyFunc,
  onSelect: emptyFunc,
  onEdit: emptyFunc,
  onDelete: emptyFunc,
}

export default Table
