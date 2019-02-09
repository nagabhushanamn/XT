import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saveProduct } from '../actions/products'

class ProductForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        let newProduct = {
            name: this.refs.name.value,
            price: this.refs.price.value,
            description: this.refs.description.value
        }
        this.props.actions.saveProduct(newProduct);
        this.props.history.push('/ui/products')

    }
    render() {
        return (
            <div className="row">
                <div className="col-6 col-sm-6 col-md-6">
                    <div className="card card-default">
                        <div className="card-header">Product Form</div>
                        <div className="card-body">
                            <form onSubmit={e => this.handleSubmit(e)}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control" ref="name" />
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input className="form-control" ref="price" />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" ref="description"></textarea>
                                </div>
                                <button className="btn btn-dark">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ saveProduct }, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(ProductForm);