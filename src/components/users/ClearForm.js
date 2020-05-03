import React, { Component } from 'react';

export class ClearForm extends Component {
  render() {
    return (
      <div>
        {this.props.showClear ? (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear Form
          </button>
        ) : null}
      </div>
    );
  }
}

export default ClearForm;
