import React from 'react';
import '../list.css';
import ListItem from './ListItem';

import axios from 'axios';

class ListView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			item: "",
            list: {
                name: 'First List',
                created: 'April 21, 2020',
				id: 'iddwdawd',
				lastUpdated: 'May 28th at 11:23pm',
                items: [
					{
						completed: false,
						text: 'hot dog'
					}
				]
            },
			loading: false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<div className="container mt-5">
				{/* Header */}
				<div className="row">
					<div className="col-sm-3 d-flex justify-content-start">
						<h1 className="bd-title">{this.state.list.name}</h1>
					</div>
					<div className="col-sm-3 float-right">
						<button className="btn btn-danger float-right">
							<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
								<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
							</svg>
							Delete
						</button>
						<button className="btn btn-info mr-2  float-right">
							<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-journal-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2z"/>
								<path d="M2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z"/>
								<path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
							</svg> 
							Share
						</button>
					</div>
					<div className="col-sm-12 col-md-6">
						{/* Item Submit Form */}
						<form className="input-group" onSubmit={this.handleSubmit} hidden={this.state.loading}>
							<input
								className="form-control"
								placeholder="Add a new item to the list"
								type="text"
								value={this.state.list.item}
								onChange={this.handleChange}
								name="listItem"
							/>
							<button class="btn btn-primary" type="submit">Submit</button>
						</form>
					</div>
					<div className="col-sm-12 mt-1">
						<span className="text-small text-muted float-right">Last updated at {this.state.list.lastUpdated}</span>
					</div>
				</div>
				<hr/>

				{/* Loading */}
				<div className="row mt-5" hidden={!this.state.loading}>
					<div className="col text-center"><mark>Loading...</mark></div>
				</div>

				<div className="row mt-2 ml-2" hidden={!this.state.list}>
					<ListItem id="idididididididididid" text="Hot dog water" completed="false" />
				</div>

			</div>
		);
	}

	componentDidMount() {
		console.log('getting lists');
		// this.setState({ lists: LocalStorage.getLists()})
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {

	}

}

export default ListView;
