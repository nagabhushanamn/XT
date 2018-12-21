import React, { Component } from 'react';
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    super(props)
    //console.log(props);
    console.log("App:: constructor");
  }
  render() {
    console.log("App:: render");
    // this.props.trainer = "New Tnr";  // error
    return (
      <div className="container">
        <hr />
        <h1>
          <span className="badge badge-info">{this.props.title}</span> &mdash;
          by &nbsp;<span className="badge badge-danger">{this.props.trainer}</span> </h1>
        <hr />
      </div>
    );
  }
}

App.defaultProps = {
  trainer: 'Anonymous'
}
App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}

export default App;
