import React from 'react';
import './list.scss';
import Thumbnail from './Thumbnail';
import NewListButton from '../NewListButton';
import LocalStorage from '../../utils/LocalStorage';

import axios from 'axios';

class Lists extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lists: [],
			loading: false
		}
	
		this.loadListFromDatabase = this.loadListFromDatabase.bind(this);
	}

	/**
	 * Wg
	 */
	componentDidMount() {
		let lists = LocalStorage.getLists();
		if(!lists) return;

		// Loading lists data from the database for each list.
		lists.forEach((id) => {
			this.loadListFromDatabase(id);
		});
	}

	loadListFromDatabase(id) {
		axios.get(`${process.env.REACT_APP_API_URL}/list/${id}`)
			.then((result) => {
				if(result && result.status === 200) {
					let data = result.data;
					this.setState({ lists: this.state.lists.concat(data) });
				}
			})
			.catch((err) => {
				console.log(err);
			})
	}

	render() {
		return (
			<div className="container mt-5 mb-5" style={{paddingBottom: 15 + 'em'}}>
				{/* Header */}
				<div className="row">
					<div className="col6">
						<h1 className="bd-title">Your Lists</h1>
					</div>
					<hr />
				</div>

				{/* Loading */}
				<div className="row mt-5" hidden={!this.state.loading}>
					<div className="col text-center"><mark>Loading...</mark></div>
				</div>

				{/* Showing empty array message */}
				<div className="row mt-5" hidden={this.state.loading}>
					<div className="col text-center" hidden={this.state.lists.length > 0}>
						<span className="bd-lead">Sorry, we could not find any lists you've previously accessed on this browser.</span><br/>
						<span className="text-muted">We store previously accessed lists in your browser's LocalStorage.</span><br/>
						<NewListButton />
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
