import React, { Component } from 'react'

import { connect } from 'react-redux'

class OrderView extends Component {
    renderOrders(orders) {
        return orders.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{new Date().toLocaleString()}</td>
                    <td>{item.id}</td>
                    <td>&#8377;{item.totalAmount}</td>
                    <td>ACTIVE</td>
                </tr>
            )
        })
    }
    render() {
        let { orders } = this.props;
        if (orders.length === 0)
            return <span> No Orders</span>
        else
            return (
                <div>
                    <div className="card card-default">
                        <div className="card-header">Orders</div>
                        <div className="card-body">
                            <table className="table table-bordered table-sm">
                                <tbody>
                                    {this.renderOrders(orders)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }
}



const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    orders: state.orders
})
// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    null
)

export default connectToStore(OrderView);
