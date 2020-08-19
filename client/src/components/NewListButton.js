import React from 'react';
import axios from 'axios';
import LocalStorage from '../utils/LocalStorage';
import { Redirect } from 'react-router';

class NewListButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: '',
            navigate: false,
            navigateUrl: ''
        }

        this.createNewList = this.createNewList.bind(this);
    }

    createNewList() {
        this.setState({ loading: true })
        this.setState({ error: '' })
        axios.get(`${process.env.REACT_APP_API_URL}/list/new`)
            .then((result) => {
                if(result && result.status === 201 && result.data.id) {
                    // List successfully created.
                    let listID = result.data.id;
                    // Adding to local storage and routing the user.
                    LocalStorage.addList(listID);
                    this.setState({ navigateUrl: `/lists/${listID}`});
                    this.setState({ navigate: true });
                } else {
                    this.setState({ error: 'Server error, could not create new list.' });
                }
            })
            .catch((err) => {
                console.log(err);
                this.setState({ error: 'Internal error.' });
            })
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        if(this.state.navigate) {
            return <Redirect to={this.state.navigateUrl} push={true} />
        }

        return (
            <div>
                <button 
                    className="btn btn-lg btn-primary text-white mt-4"
                    disabled={this.state.loading}
                    onClick={this.createNewList}
                >
                    Create a New List
                </button>
            </div>
        )
    }
}

export default NewListButton;