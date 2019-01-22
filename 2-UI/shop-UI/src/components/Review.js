
import React from 'react';


function renderStars(n) {
    let arr = [];
    for (let i = 0; i < n; i++)
        arr.push(<i style={{ color: "red" }} className="fa fa-star" key={i}></i>)
    return arr;
}

export default ({ item }) => {
    return (
        <div className="row">
            <div className="col-8 col-sm-12 col-md-12">
                <div className="alert alert-info">
                    <span className="badge">{renderStars(item.stars)}</span> &mdash; <span>{item.author}</span>
                    <hr />
                    <p><span>{item.body}</span></p>
                </div>
            </div>
        </div>
    )
};