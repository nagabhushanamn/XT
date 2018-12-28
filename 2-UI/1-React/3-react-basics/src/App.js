import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting';
import CounterBox from './components/CounterBox';
import Layout from './components/Layout';
import Product from './components/Product';
import Employee from './components/Employee';
import A from './components/A'

class App extends Component {
  constructor(props) {
    super(props)
    //console.log(props);
    this.state = {
      message: ''
    }
    console.log("App:: constructor");
  }
  changeMessage(e, message) {
    this.setState({ message }) //  
  }
  render() {
    console.log("App:: render");
    // this.props.trainer = "New Tnr";  // error
    return (
      <div className="container">
        <hr />
        <h1>
          <span className="badge badge-info">{this.props.title}</span> &mdash;
          by &nbsp;
          <span className="badge badge-danger">{this.props.trainer}</span> </h1>
        <hr />
        <A value={1000} />
        <A value={2000} />
        <hr />
        <Layout>
          <Product />
          <Product />
        </Layout>
        <Layout>
          <Employee />
          <Employee />
        </Layout>
        <hr />
        <CounterBox />
        <hr />
        <button onClick={e => this.changeMessage(e, 'good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage(e, 'good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage(e, 'good evening')} className="btn btn-primary">GE</button>&nbsp;
        <button onClick={e => this.changeMessage(e, '')} className="btn btn-danger">Remove</button>&nbsp;
        <hr />
        {this.state.message ? <Greeting message={this.state.message} /> : null}
      </div>
    );
  }
  componentDidMount() {
    console.log("App :: componentDidMount");
    //n/w request..
    setTimeout(() => {
      // let serverMessage = "hello react"
      // this.setState({ message: serverMessage })
    }, 3000)

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
