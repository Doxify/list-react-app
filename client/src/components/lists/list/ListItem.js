import React from 'react';
import '../list.css';

class ListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.id || null
		}

    	this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<div className="col-sm-12">
				<div className="card list-item">
					<div className="card-body form-check">
						<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={this.props.completed} />
						<label class="form-check-label card-text" for="flexCheckChecked">
							{this.props.text}
						</label>
						{/* TODO: Only show this on hover */}
						<button className="btn btn-sm btn-danger float-right small" onClick={this.delete}>❌ Delete</button>
						<button className="btn btn-sm btn-warning float-right small text-white mr-2">✏ Edit</button>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	delete() {
		console.log('detected click');
	} 

}

export default ListItem;
