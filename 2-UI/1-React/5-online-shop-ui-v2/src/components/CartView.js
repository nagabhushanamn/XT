
import React from 'react';

function renderCartItems(cart) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{"qty"}</td>
                <td>{"total"}</td>
            </tr>
        )
    })
}

export default ({ cart }) => {
    return (
        <div className="card card-default">
            <div className="card-header">Item(s) in cart</div>
            <div className="card-body">
                <table className="table table-bordered table-sm">
                    <tbody>
                        {renderCartItems(cart)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}