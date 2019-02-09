import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadProducts, deleteProduct } from '../actions/products'
// import { Button } from 'primereact/button';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// import { DataTable, Column } from 'primereact/datatable';

class ProductList extends Component {
  componentDidMount() {
    let { actions } = this.props;
    actions.loadProducts(20);
  }
  renderProducts() {
    let { products } = this.props;
    return products.map((product, idx) => {
      return (
        <tr key={product._id}>
          <td>{product.name}</td>
          <td>&#8377;{product.price}</td>
          <td>
            <button className="btn btn-info">Edit ( Not implemented )</button>
            &nbsp;
            <button onClick={e => this.props.actions.deleteProduct(product._id)} className="btn btn-info">Delete</button>
          </td>
        </tr>
      )
    });
  }
  render() {
    return (
      <div>
        <table className="table table-sm table-bordered">
          <tbody>
            {this.renderProducts()}
          </tbody>
        </table>
      </div>
    )
  }
}


function mapStateToProps(state, props) {
  return { products: state.products }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadProducts, deleteProduct }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);