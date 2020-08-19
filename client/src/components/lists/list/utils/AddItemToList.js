import React from 'react';
import axios from 'axios';

class AddItemToList extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            text: '',
            loading: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.props.id || this.state.text) {
            this.setState({ loading: true });
            // Creating the form for request.
            const form = {
                fk_list: this.props.id,
                text: this.state.text
            };
            // Making request.
            axios.post(`${process.env.REACT_APP_API_URL}/item/new/`, form)
                .then((result) => {
                    if(result && result.status === 201) {
                        // Telling parent to update list once item is successfully added.
                        this.props.updateListData();
                        // Resetting the form.
                        this.setState({ text: '' })
                        document.getElementById('new-item-form').reset();
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    this.setState({ loading: false });
                })
       }
    }

    render() {
        return (
            <form id="new-item-form" className="input-group" onSubmit={this.handleSubmit}>
                <input
                    className="form-control"
                    placeholder="Add a new item to the list"
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    name="text"
                    required
                />
                <button className="btn btn-primary" type="submit">Add</button>
            </form>
        )
    }

}

export default AddItemToList;