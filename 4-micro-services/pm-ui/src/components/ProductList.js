import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadProducts } from '../actions/products'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { DataTable, Column } from 'primereact/datatable';

class ProductList extends Component {
  componentDidMount() {
    let { actions } = this.props;
    actions.loadProducts(20);
  }
  render() {
    return (
      <div>
        <DataTable value={this.props.products}>
          <Column field="name" header="Name" />
          <Column field="price" header="Price" />
        </DataTable>
      </div>
    )
  }
}


function mapStateToProps(state, props) {
  return { products: state.products }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadProducts }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);