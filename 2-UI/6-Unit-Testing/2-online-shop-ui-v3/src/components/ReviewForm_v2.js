import React, { Component } from 'react';

class ReviewForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: true,
            stars: 5,
            author: 'nag@gmail.com',
            body: ''
        }
    }

    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }
    handleChange(e) {
        let fieldId = e.target.id;
        let fieldValue = e.target.value;
        this.setState({ [fieldId]: fieldValue })
    }
    handleForm(e) {
        e.preventDefault()
        let { onNewReview } = this.props;
        let { stars, author, body } = this.state;
        if (onNewReview) {
            onNewReview({ stars, author, body })
            this.toggleForm();
        }
    }
    isValidForm() {
        let { stars } = this.state;
        if (stars < 3) return true
        else return false;
    }

    renderForm() {
        let { isOpen, stars, author, body } = this.state;
        if (!isOpen) return (<button onClick={e => this.toggleForm()} className="btn btn-info btn-sm"><i className="fa fa-plus"></i></button>)
        else return (
            <div className="card card-default">
                <div className="card-header">Review Form</div>
                <div className="card-body">
                    <form onSubmit={e => this.handleForm(e)}>
                        <div className="form-group">
                            <label>stars</label>
                            <select className="form-control" id="stars" value={stars} onChange={e => this.handleChange(e)}>
                                {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                            </select>
                            {stars <= 2 ? '> 3 stars' : null}
                        </div>
                        <div className="form-group">
                            <label>author</label>
                            <input className="form-control" id="author" value={author} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>body</label>
                            <textarea className="form-control" id="body" value={body} onChange={e => this.handleChange(e)}></textarea>
                        </div>
                        <button disabled={this.isValidForm()} className="btn btn-sm btn-primary">submit</button>
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