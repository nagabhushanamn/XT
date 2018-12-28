import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    handleForm(e) {
        e.preventDefault()
        let { stars, author, body } = this.refs
        let newReview = {
            stars: stars.value,
            author: author.value,
            body: body.value
        }
        let { onNewReview } = this.props;
        if (onNewReview) {
            onNewReview(newReview)
            this.toggleForm();
        }
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen) return (<button onClick={e => this.toggleForm()} className="btn btn-info btn-sm"><i className="fa fa-plus"></i></button>)
        else return (
            <div className="card card-default">
                <div className="card-header">Review Form</div>
                <div className="card-body">
                    <form onSubmit={e => this.handleForm(e)}>
                        <div className="form-group">
                            <label>stars</label>
                            <select className="form-control" ref="stars">
                                {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>author</label>
                            <input className="form-control" ref="author" />
                        </div>
                        <div className="form-group">
                            <label>body</label>
                            <textarea className="form-control" ref="body"></textarea>
                        </div>
                        <button className="btn btn-sm btn-primary">submit</button>
                        <button onClick={e => this.toggleForm()} type="button" className="btn btn-sm btn-danger">cancel</button>
                    </form>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                <div className="row"></div>
                <div className="col-8 col-sm-8 col-md-8">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default ReviewForm;