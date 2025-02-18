import React from 'react'
// ### `Filters`

// 1.  Should receive an`onChangeType` callback prop.This callback prop gets
// called whenever the value of the`<select>` element changes with the ** value **
// of the`<select>`

//   - Should receive an`onFindPetsClick` callback prop.This callback prop gets
// called when the users clicks the 'Find pets' button.
class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.props.onChangeType} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
