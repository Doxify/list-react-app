import React from 'react';
import './list.css';
import Thumbnail from './Thumbnail';
import LocalStorage from '../../utils/LocalStorage';

import axios from 'axios';

class Lists extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lists: [
				{
					name: 'First List',
					created: 'April 21, 2020',
					id: 'iddwdawd',
					items: 21
				},
				{
					name: 'This is my First List',
					created: 'June 11, 2020',
					id: 'iddwdawd',
					items: 232
				},
				{
					name: 'First List',
					created: 'April 21, 2020',
					id: 'iddwdawd',
					items: 21
				},
				{
					name: 'First List',
					created: 'April 21, 2020',
					id: 'iddwdawd',
					items: 21
				},
				{
					name: 'First List',
					created: 'April 21, 2020',
					id: 'iddwdawd',
					items: 21
				},
				{
					name: 'First List',
					created: 'April 21, 2020',
					id: 'iddwdawd',
					items: 21
				},
				{
					name: 'First List',
					created: 'April 21, 2020',
					id: 'iddwdawd',
					items: 21
				},
				{
					name: 'First List',
					created: 'April 21, 2020',
					id: 'iddwdawd',
					items: 21
				},
				{
					name: 'First List',
					created: 'April 21, 2020',
					id: 'iddwdawd',
					items: 21
				}
			],
			loading: false
		}
	}

	componentDidMount() {
		this.setState({ lists: LocalStorage.getLists()})
	}

	render() {
		return (
			<div className="container mt-5">
				<h1 className="bd-title">Your Lists</h1>
				<hr />

				{/* Loading */}
				<div className="row mt-5" hidden={!this.state.loading}>
					<div className="col text-center"><mark>Loading...</mark></div>
				</div>

				{/* Showing empty array message */}
				<div className="row mt-5" hidden={this.state.loading}>
					<div className="col text-center" hidden={this.state.lists.length > 0}>
						<span className="bd-lead">Sorry, we could not find any lists you've previously accessed on this browser.</span><br/>
						<span className="text-muted">We store previously accessed lists in your browser's LocalStorage.</span><br/>
						<button className="btn btn-success text-white mt-4">Create List</button>
					</div>
				</div>

				{/* Rendering each individual list */}
				<div className="row mt-2" hidden={!this.state.lists.length > 0}>
					{this.state.lists.map((list, index) => (
						<div className="col col-sm-12 col-md-4 col-lg-3 text-center mb-3" key={index}>
							<Thumbnail id={list.id} name={list.name} created={list.created} items={list.items}/>
						</div>		
					))}
				</div>

			</div>
		);
	}

}

export default Lists;
