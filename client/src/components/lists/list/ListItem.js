import React from 'react';

class ListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.id || null,
			text: props.text || "",
			completed: props.completed || false
		}

    	this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<div className="col-sm-12 list-item">
				<div className="card">
					<div className="card-body form-check">
						<input 
							className="form-check-input" 
							type="checkbox" 
							name={this.props.id}
							checked={this.props.completed}
							onChange={this.handleChange}
						/>
						<label className="form-check-label card-text">
							{this.props.text}
						</label>
						<button className="list-item-button float-right small" onClick={this.delete}><span role="img" aria-label="delete emoji">❌</span></button>
						<button className="list-item-button float-right small text-white mr-2"><span role="img" aria-label="pencil emoji">✏</span></button>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
	}

	handleChange(event) {
		console.log(event.target.name);
		this.setState({ [event.target.name]: event.target.value });
	}

	delete() {
		console.log('detected click');
	} 

}

export default ListItem;
