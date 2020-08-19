import React from 'react';
import ListItem from './ListItem';
import DeleteList from './utils/DeleteList';
import ShareList from './utils/ShareList';
import RenameList from './utils/RenameList';
import AddItemToList from './utils/AddItemToList';
import NewListButton from '../../NewListButton';

import axios from 'axios';
import LocalStorage from '../../../utils/LocalStorage';

import Moment from 'react-moment';
import 'moment-timezone';

class ListView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			item: "",
			id: props.match.params.id || null,
            list: {
				items: []
			},
			loading: false
		}

		this.getListData = this.getListData.bind(this);
	}

	componentDidMount() {
		this.setState({ loading: true });
		this.getListData();
	}

	getListData() {
		axios.get(`${process.env.REACT_APP_API_URL}/list/${this.state.id}`)
			.then((result) => {
				if(result && result.status === 200) {
					let data = result.data;
					this.setState({ list: data });

					// Adding the list id to local storage because the user has accessed it.
					LocalStorage.addList(this.state.list.id)
				} 
			})
			.catch((err) => {
				this.setState({ id: null })
			})
			.finally(() => {
				this.setState({ loading: false });
			})
	}


	render() {
		return (
			<div className="container mt-5">

				{/* Alerts */}
				<div className="row mt-5">
					{/* Loading */}
					<div className="col text-center bd-lead" hidden={!this.state.loading}>
						<mark>Loading...</mark>
					</div>
					{/* Invalid ID */}
					<div className="col text-center bd-lead" hidden={this.state.id}>
						<span className="lead">Sorry, but that list ID is invalid.</span><br/>
						<span className="text-muted">Perhaps you wanted to create a new list?</span><br/>
						<NewListButton />
					</div>
				</div>

				{/* Header */}
				<div className="row" hidden={this.state.loading || !this.state.id}>
					<div className="col-sm-3 float-right">
						<h1 className="bd-title">{this.state.list.name}</h1>
					</div>
					<div className="col-sm-12 col-md-5">
						<AddItemToList id={this.state.list.id} updateListData={this.getListData} />
					</div>
					<div className="col-sm-4 float-right">
						<DeleteList id={this.state.list.id}/>
						<ShareList id={this.state.list.id}/>
						<RenameList id={this.state.list.id}/>
					</div>
					<div className="col-sm-12 mt-1">
						<span className="text-small text-muted float-left">id: {this.state.list.id}</span>
						<span className="text-small text-muted float-right">updated <Moment fromNow ago>{this.state.list.updated}</Moment> ago</span>
					</div>
					<hr/>
				</div>

				{/* List Items */}
				<div className="row mt-2 ml-2" hidden={this.state.loading}>
					<ul className="list-items">
						
						{this.state.list.items.sort((b, a) => (a.completed === b.completed) ? 0 : a.completed ? -1 : 1).map((item, index) => (
							<li key={index}>
								<ListItem id={item.id} text={item.text} completed={item.completed}/> 
							</li>
						))}
					
					</ul>
				</div>

				{/* No items in list alert */}
				<div className="row" hidden={this.state.list.items.length !== 0}>
					<div className="col text-center">
						<span className="lead">Uh-oh you've got an empty list, why not add something?</span><br/>
						<span className="text-muted">Use the form in the upper-right to add items.</span><br/>
					</div>
				</div>
			</div>
		);
	}

}

export default ListView;
